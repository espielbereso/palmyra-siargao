import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

interface InlineFormProps {
  variant?: "footer" | "page";
  defaultType?: "general" | "investor";
}

type FormValues = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  message: "",
  website: "",
};

const InlineForm = ({ variant = "page", defaultType = "general" }: InlineFormProps) => {
  const { toast } = useToast();
  const [formType, setFormType] = useState<"general" | "investor">(defaultType);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const isFooter = variant === "footer";
  const idPrefix = isFooter ? "footer" : "page";

  const inputClass = isFooter
    ? "bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-buttered-rum"
    : "bg-transparent border-foreground/20 text-foreground placeholder:text-muted-foreground focus-visible:ring-accent";

  const helpText = formType === "investor"
    ? "Share your investment interest and any details you need in the investor brief."
    : "Share your inquiry and the team will respond with relevant project details.";

  const messagePlaceholder = formType === "investor"
    ? "Tell us your investment focus and preferred unit type…"
    : "Tell us what you'd like to know about PALMYRA Siargao…";

  const setFieldValue = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) nextErrors.email = "Email is required.";
    else if (!emailPattern.test(values.email.trim())) nextErrors.email = "Enter a valid email address.";
    if (!values.message.trim()) nextErrors.message = "Message is required.";
    else if (values.message.trim().length < 12) nextErrors.message = "Please add a bit more detail (at least 12 characters).";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Please review your details",
        description: "Some required fields need attention before sending.",
      });
      return;
    }

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      toast({
        title: "Configuration missing",
        description: "Form service is not configured. Please contact the site admin.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          ...values,
          formType,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error || "Your message could not be sent right now.");
      }

      toast({
        title: "Thank you",
        description: formType === "investor"
          ? "We've received your request. Our team will share the investor brief shortly."
          : "We've received your message. Someone from our team will be in touch soon.",
      });
      setSubmitted(true);
      setValues(initialValues);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg w-full">
      {variant === "page" && (
        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => {
              setFormType("general");
              setSubmitted(false);
            }}
            className={`font-label text-sm px-5 py-2 rounded-sm transition-colors ${
              formType === "general"
                ? "bg-primary text-primary-foreground hover:bg-buttered-rum hover:text-white"
                : "bg-secondary text-foreground hover:bg-buttered-rum hover:text-white"
            }`}
          >
            General Inquiry
          </button>
          <button
            type="button"
            onClick={() => {
              setFormType("investor");
              setSubmitted(false);
            }}
            className={`font-label text-sm px-5 py-2 rounded-sm transition-colors ${
              formType === "investor"
                ? "bg-primary text-primary-foreground hover:bg-buttered-rum hover:text-white"
                : "bg-secondary text-foreground hover:bg-buttered-rum hover:text-white"
            }`}
          >
            Investor Inquiry
          </button>
        </div>
      )}

      {submitted ? (
        <div className={`${isFooter ? "border-primary-foreground/30 bg-primary-foreground/5" : "border-foreground/12 bg-white"} border p-6`}>
          <div className="flex items-start gap-3">
            <CheckCircle2 className={`h-5 w-5 mt-0.5 ${isFooter ? "text-buttered-rum" : "text-primary"}`} aria-hidden="true" />
            <div>
              <p className="font-subhead text-base mb-2">Message sent successfully</p>
              <p className={`font-body text-sm leading-relaxed ${isFooter ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                {formType === "investor"
                  ? "Thank you. The team will review your details and respond with investor information shortly."
                  : "Thank you. The team will get back to you shortly with the right next details."}
              </p>
              <button
                type="button"
                onClick={resetForm}
                className={`mt-4 font-label text-xs uppercase tracking-widest ${isFooter ? "text-buttered-rum" : "text-primary"} hover:underline`}
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {variant === "page" ? (
            <p className="font-body text-sm text-muted-foreground -mt-2 mb-1">{helpText}</p>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor={`${idPrefix}-name`} className={isFooter ? "text-primary-foreground/70" : ""}>Name *</Label>
              <Input
                id={`${idPrefix}-name`}
                name="name"
                required
                placeholder="Your name"
                className={inputClass}
                value={values.name}
                onChange={(e) => setFieldValue("name", e.target.value)}
              />
              {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
            </div>
            <div>
              <Label htmlFor={`${idPrefix}-email`} className={isFooter ? "text-primary-foreground/70" : ""}>Email *</Label>
              <Input
                id={`${idPrefix}-email`}
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className={inputClass}
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
              {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor={`${idPrefix}-phone`} className={isFooter ? "text-primary-foreground/70" : ""}>Phone</Label>
              <Input
                id={`${idPrefix}-phone`}
                name="phone"
                type="tel"
                placeholder="Optional"
                className={inputClass}
                value={values.phone}
                onChange={(e) => setFieldValue("phone", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor={`${idPrefix}-organization`} className={isFooter ? "text-primary-foreground/70" : ""}>Organization</Label>
              <Input
                id={`${idPrefix}-organization`}
                name="organization"
                placeholder="Optional"
                className={inputClass}
                value={values.organization}
                onChange={(e) => setFieldValue("organization", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor={`${idPrefix}-message`} className={isFooter ? "text-primary-foreground/70" : ""}>Message *</Label>
            <Textarea
              id={`${idPrefix}-message`}
              name="message"
              required
              placeholder={messagePlaceholder}
              className={`${inputClass} min-h-[100px]`}
              value={values.message}
              onChange={(e) => setFieldValue("message", e.target.value)}
            />
            {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message}</p> : null}
          </div>

          {/* Hidden honeypot field for bot detection */}
          <div className="hidden" aria-hidden="true">
            <Label htmlFor={`${idPrefix}-website`} className="sr-only">Website</Label>
            <Input
              id={`${idPrefix}-website`}
              name="website"
              autoComplete="off"
              tabIndex={-1}
              value={values.website}
              onChange={(e) => setFieldValue("website", e.target.value)}
            />
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="text-sm tracking-wider px-8 py-3 h-auto border border-primary bg-primary text-primary-foreground hover:bg-buttered-rum hover:border-buttered-rum hover:text-white transition-all duration-300"
          >
            {submitting ? "Sending…" : formType === "investor" ? "Request Investor Brief" : "Get Project Updates"}
          </Button>
          {variant === "page" ? (
            <p className="font-body text-xs text-muted-foreground">
              We hate spam. Your details stay private.
            </p>
          ) : null}
        </>
      )}
    </form>
  );
};

export default InlineForm;
