type InquiryType = "general" | "investor";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
  formType: InquiryType;
  turnstileToken: string;
  website: string;
}

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

interface TurnstileResponse {
  success: boolean;
  "error-codes"?: string[];
}

const RATE_LIMITS = new Map<string, RateLimitEntry>();

const BASE_CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  Vary: "Origin",
};

const RESEND_API_URL = "https://api.resend.com/emails";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

Deno.serve(async (req) => {
  const allowedOrigins = parseCsvEnv("ALLOWED_ORIGINS");
  const origin = req.headers.get("origin");
  const corsOrigin = resolveCorsOrigin(origin, allowedOrigins);

  if (req.method === "OPTIONS") {
    if (!corsOrigin) {
      return jsonResponse(403, { error: "Origin is not allowed." }, null);
    }
    return new Response(null, { status: 204, headers: buildCorsHeaders(corsOrigin) });
  }

  if (req.method !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." }, corsOrigin);
  }

  if (!corsOrigin) {
    return jsonResponse(403, { error: "Origin is not allowed." }, null);
  }

  try {
    const resendApiKey = mustGetEnv("RESEND_API_KEY");
    const recipientEmail = mustGetEnv("CONTACT_TO_EMAIL");
    const senderEmail = Deno.env.get("CONTACT_FROM_EMAIL")?.trim() || "PALMYRA Siargao <onboarding@resend.dev>";

    const requireTurnstile = (Deno.env.get("REQUIRE_TURNSTILE") ?? "false").toLowerCase() !== "false";
    const turnstileSecret = Deno.env.get("TURNSTILE_SECRET_KEY")?.trim() ?? "";

    if (requireTurnstile && !turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY is required when REQUIRE_TURNSTILE=true");
      return jsonResponse(500, { error: "Server configuration error." }, corsOrigin);
    }

    const body = await safeParseJson(req);
    if (!body) {
      return jsonResponse(400, { error: "Invalid JSON payload." }, corsOrigin);
    }

    const validated = validatePayload(body);
    if (!validated.ok) {
      return jsonResponse(400, { error: validated.error }, corsOrigin);
    }

    const payload = validated.data;

    // Honeypot: bots often fill hidden fields; fail silently.
    if (payload.website) {
      return jsonResponse(200, { success: true }, corsOrigin);
    }

    const clientIp = getClientIp(req);
    const rateLimitKey = `${clientIp}:${payload.email.toLowerCase()}`;
    const maxRequests = parsePositiveIntEnv("RATE_LIMIT_MAX_REQUESTS", 5);
    const windowSeconds = parsePositiveIntEnv("RATE_LIMIT_WINDOW_SECONDS", 600);
    const allowed = consumeRateLimit(rateLimitKey, maxRequests, windowSeconds * 1000);

    if (!allowed) {
      return jsonResponse(429, { error: "Too many submissions. Please try again later." }, corsOrigin);
    }

    if (requireTurnstile) {
      if (!payload.turnstileToken) {
        return jsonResponse(400, { error: "Verification is required." }, corsOrigin);
      }

      const turnstileResult = await verifyTurnstile(turnstileSecret, payload.turnstileToken, clientIp);
      if (!turnstileResult.success) {
        console.warn("Turnstile verification failed", turnstileResult["error-codes"] ?? []);
        return jsonResponse(400, { error: "Verification failed. Please try again." }, corsOrigin);
      }
    }

    const subjectPrefix = payload.formType === "investor" ? "Investor Inquiry" : "General Inquiry";
    const subject = `${subjectPrefix} from ${payload.name}`;
    const escapedEmail = escapeHtml(payload.email);

    const htmlBody = `
      <h2>${subjectPrefix}</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${escapeHtml(payload.name)}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;"><a href="mailto:${escapedEmail}">${escapedEmail}</a></td></tr>
        ${
          payload.phone
            ? `<tr><td style="padding:6px 12px;font-weight:bold;">Phone</td><td style="padding:6px 12px;">${escapeHtml(payload.phone)}</td></tr>`
            : ""
        }
        ${
          payload.organization
            ? `<tr><td style="padding:6px 12px;font-weight:bold;">Organization</td><td style="padding:6px 12px;">${escapeHtml(payload.organization)}</td></tr>`
            : ""
        }
        <tr><td style="padding:6px 12px;font-weight:bold;">Type</td><td style="padding:6px 12px;">${payload.formType === "investor" ? "Investor" : "General"}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px;">${escapeHtml(payload.message)}</p>
    `;

    const textBody = [
      `${subjectPrefix}`,
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.phone ? `Phone: ${payload.phone}` : "",
      payload.organization ? `Organization: ${payload.organization}` : "",
      `Type: ${payload.formType === "investor" ? "Investor" : "General"}`,
      "",
      "Message:",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n");

    const notifyResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: senderEmail,
        to: [recipientEmail],
        reply_to: payload.email,
        subject,
        html: htmlBody,
        text: textBody,
      }),
    });

    const notifyData = await safeParseResendJson(notifyResponse);
    if (!notifyResponse.ok) {
      console.error("Resend notify error:", notifyData);
      return jsonResponse(502, { error: "Failed to send email. Please try again later." }, corsOrigin);
    }

    const enableAutoreply = (Deno.env.get("ENABLE_AUTOREPLY") ?? "false").toLowerCase() === "true";
    if (enableAutoreply) {
      const autoReplyHtml = `
        <div style="font-family:sans-serif;font-size:14px;color:#333;max-width:560px;">
          <h2 style="color:#1a1a1a;">Thank you, ${escapeHtml(payload.name)}</h2>
          <p style="line-height:1.7;">
            ${
              payload.formType === "investor"
                ? "We've received your investor inquiry and our team will review your details. You can expect to hear from us within 1-2 business days with relevant project information."
                : "We've received your message and a member of our team will be in touch shortly."
            }
          </p>
          <p style="margin-top:24px;color:#888;font-size:12px;">
            This is an automated message. Please do not reply directly to this email.
          </p>
        </div>
      `;

      const autoReplyResponse = await fetch(RESEND_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [payload.email],
          subject:
            payload.formType === "investor"
              ? "We received your investor inquiry - PALMYRA Siargao"
              : "We received your message - PALMYRA Siargao",
          html: autoReplyHtml,
        }),
      });

      if (!autoReplyResponse.ok) {
        const autoReplyData = await safeParseResendJson(autoReplyResponse);
        console.error("Resend auto-reply error:", autoReplyData);
      }
    }

    return jsonResponse(200, { success: true }, corsOrigin);
  } catch (error) {
    console.error("Unexpected error:", error);
    return jsonResponse(500, { error: "An unexpected error occurred." }, corsOrigin);
  }
});

function resolveCorsOrigin(origin: string | null, allowedOrigins: string[]): string | null {
  if (allowedOrigins.length === 0) return origin;
  if (!origin) return null;
  return allowedOrigins.includes(origin) ? origin : null;
}

function buildCorsHeaders(corsOrigin: string | null): Headers {
  const headers = new Headers(BASE_CORS_HEADERS);
  if (corsOrigin) {
    headers.set("Access-Control-Allow-Origin", corsOrigin);
  }
  return headers;
}

function jsonResponse(status: number, body: Record<string, unknown>, corsOrigin: string | null): Response {
  const headers = buildCorsHeaders(corsOrigin);
  headers.set("Content-Type", "application/json");
  return new Response(JSON.stringify(body), { status, headers });
}

function parseCsvEnv(name: string): string[] {
  return (Deno.env.get(name) ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parsePositiveIntEnv(name: string, fallback: number): number {
  const raw = Number.parseInt(Deno.env.get(name) ?? "", 10);
  return Number.isFinite(raw) && raw > 0 ? raw : fallback;
}

function mustGetEnv(name: string): string {
  const value = Deno.env.get(name)?.trim();
  if (!value) {
    throw new Error(`${name} is not configured`);
  }
  return value;
}

async function safeParseJson(req: Request): Promise<unknown | null> {
  try {
    return await req.json();
  } catch {
    return null;
  }
}

async function safeParseResendJson(response: Response): Promise<unknown> {
  try {
    return await response.json();
  } catch {
    return { error: "Unable to parse Resend response." };
  }
}

function validatePayload(body: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const data = body as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const organization = typeof data.organization === "string" ? data.organization.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const formType: InquiryType = data.formType === "investor" ? "investor" : "general";
  const turnstileToken = typeof data.turnstileToken === "string" ? data.turnstileToken.trim() : "";
  const website = typeof data.website === "string" ? data.website.trim() : "";

  if (!name) return { ok: false, error: "Name is required." };
  if (name.length > 200) return { ok: false, error: "Name is too long." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "A valid email is required." };
  if (email.length > 320) return { ok: false, error: "Email is too long." };
  if (!message) return { ok: false, error: "Message is required." };
  if (message.length < 12) return { ok: false, error: "Message must be at least 12 characters." };
  if (message.length > 5000) return { ok: false, error: "Message is too long." };
  if (phone.length > 30) return { ok: false, error: "Phone number is too long." };
  if (organization.length > 200) return { ok: false, error: "Organization name is too long." };
  if (turnstileToken.length > 4000) return { ok: false, error: "Verification token is invalid." };
  if (website.length > 200) return { ok: false, error: "Invalid request." };

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      organization,
      message,
      formType,
      turnstileToken,
      website,
    },
  };
}

function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return (
    req.headers.get("x-real-ip")?.trim() ||
    req.headers.get("cf-connecting-ip")?.trim() ||
    "unknown"
  );
}

function consumeRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  pruneRateLimits(now);

  const existing = RATE_LIMITS.get(key);
  if (!existing || existing.resetAt <= now) {
    RATE_LIMITS.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (existing.count >= limit) {
    return false;
  }

  existing.count += 1;
  RATE_LIMITS.set(key, existing);
  return true;
}

function pruneRateLimits(now: number): void {
  for (const [key, entry] of RATE_LIMITS.entries()) {
    if (entry.resetAt <= now) {
      RATE_LIMITS.delete(key);
    }
  }
}

async function verifyTurnstile(secret: string, token: string, clientIp: string): Promise<TurnstileResponse> {
  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (clientIp && clientIp !== "unknown") {
    body.set("remoteip", clientIp);
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    return { success: false, "error-codes": ["verification-request-failed"] };
  }

  try {
    return (await response.json()) as TurnstileResponse;
  } catch {
    return { success: false, "error-codes": ["invalid-verification-response"] };
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
