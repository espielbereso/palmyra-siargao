# Palmyra Siargao Frontend + Contact Backend

Standalone frontend built with Vite + React + TypeScript + Tailwind CSS.

The contact form backend uses:
- Supabase Edge Function (`send-contact-email`)
- Resend (email delivery)
- Rate limit + honeypot + origin allowlist (bot/spam protection baseline)

## Architecture

1. User submits the React form.
2. Frontend sends payload to Supabase Edge Function.
3. Edge Function validates input, applies rate limit/honeypot/origin checks, and triggers Resend.
4. Team receives inquiry email (optional auto-reply can also be enabled).

## Local frontend development

```sh
npm install
cp .env.example .env
npm run dev
```

## Frontend environment variables

Set in `.env` (local) and in Netlify environment settings (production):

```bash
VITE_SUPABASE_URL="https://your-project-ref.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key"
```

## Supabase backend setup

1. Create a new Supabase project.
2. Put your project ref in `supabase/config.toml` (`project_id`).
3. Login and link project:

```sh
supabase login
supabase link --project-ref your-project-ref
```

4. Set edge function secrets:

```sh
supabase secrets set \
  RESEND_API_KEY=your_resend_api_key \
  CONTACT_TO_EMAIL=team@yourdomain.com \
  CONTACT_FROM_EMAIL="PALMYRA Siargao <hello@yourdomain.com>" \
  ALLOWED_ORIGINS="https://your-domain.com,https://your-site.netlify.app" \
  REQUIRE_TURNSTILE=false \
  RATE_LIMIT_MAX_REQUESTS=5 \
  RATE_LIMIT_WINDOW_SECONDS=600 \
  ENABLE_AUTOREPLY=false
```

5. Deploy function:

```sh
supabase functions deploy send-contact-email
```

## Build and preview

```sh
npm run build
npm run preview
```

## Deploy (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- Add the same `VITE_*` variables in Netlify site settings.

## Security notes

- Keep `RESEND_API_KEY` and all backend secrets only in Supabase secrets.
- Do not expose secrets with `VITE_*`.
- Keep `ALLOWED_ORIGINS` restricted to your real domains.

## TODO (Recommended soon)

- Enable Cloudflare Turnstile before traffic increases or if spam appears.
- When enabling:
  - Add `VITE_TURNSTILE_SITE_KEY` to frontend environment.
  - Set `TURNSTILE_SECRET_KEY` in Supabase secrets.
  - Set `REQUIRE_TURNSTILE=true`.
