# Palmyra Siargao Frontend

Standalone frontend built with Vite + React + TypeScript + Tailwind CSS.

The contact form uses Web3Forms for email delivery. There is no dedicated backend
server for inquiries.

## Architecture

1. User submits the React form.
2. Frontend validates required fields and applies a hidden honeypot check.
3. Frontend sends the inquiry to Web3Forms.
4. Team receives the inquiry email at the address configured in Web3Forms.

## Local frontend development

```sh
npm install
cp .env.example .env
npm run dev
```

## Frontend environment variables

Set in `.env` (local) and in Netlify environment settings (production):

```bash
VITE_WEB3FORMS_ACCESS_KEY="your_web3forms_access_key"
```

## Web3Forms setup

1. Create or log in to a Web3Forms account.
2. Add the receiving email address: `wellbuilddevelopment@gmail.com`.
3. Copy the Web3Forms access key.
4. Add the key to local `.env` and to the production host environment variables.
5. Redeploy the site.

The form sends a `source` field with `PALMYRA Siargao`, so the same receiving
email can be reused later for Wellbuild without mixing up inquiry origins.

## Build and preview

```sh
npm run build
npm run preview
```

## Deploy (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- Add `VITE_WEB3FORMS_ACCESS_KEY` in Netlify site settings.
- Keep social preview tags in [`index.html`](./index.html) aligned with the live domain and share image.

## Social link previews

- Facebook Messenger, Telegram, Slack, and similar apps use Open Graph metadata to build link previews.
- This site's preview image is served from [`public/og-image.jpg`](./public/og-image.jpg) and referenced in [`index.html`](./index.html).
- If the production domain changes, update the canonical URL plus `og:url`, `og:image`, and `twitter:image` to the new absolute URL.
- Because this is a static Vite SPA, these tags are global for the site. Route-specific previews would require prerendering or SSR.

## Security notes

- Web3Forms access keys are intended for frontend form submissions, but still
  restrict the form to the real production domains in the Web3Forms dashboard
  when available.
- Keep the hidden honeypot field in place.
- If spam increases, enable hCaptcha or Cloudflare Turnstile from Web3Forms.
