# Deployment Guide — sarahather.com

This guide walks through deploying the portfolio to Vercel (free tier) and pointing your GoDaddy domain `sarahather.com` to it.

---

## 1. Set up Formspree (Contact Form)

The contact form uses [Formspree](https://formspree.io) — a free service that emails you when someone submits the form.

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Click **+ New Form** and give it a name (e.g. "Sarah Ather Portfolio").
3. Copy the **Form ID** shown in the URL (e.g. `xpzgkwqr`). This is not the full URL — just the alphanumeric ID at the end.
4. When deploying on Vercel (step 2 below), you will add this as an environment variable named `VITE_FORMSPREE_FORM_ID`.

---

## 2. Deploy to Vercel

### Prerequisites
- A [Vercel account](https://vercel.com) (free tier is sufficient)
- Your code pushed to a GitHub, GitLab, or Bitbucket repository

### Steps

1. **Log in to Vercel** and click **Add New → Project**.
2. **Import your Git repository** — select the repo containing this portfolio.
3. **Configure the project:**
   - **Framework Preset:** Other
   - **Root Directory:** `artifacts/portfolio` (this is where `vercel.json`, `vite.config.ts`, and `package.json` live)
   - **Build Command:** `pnpm install && pnpm --filter @workspace/portfolio build` (already set in `vercel.json`)
   - **Output Directory:** `dist/public` (already set in `vercel.json`, relative to root directory)
   - **Install Command:** leave blank (handled by build command above)
4. **Add Environment Variables:**
   - Click **Environment Variables** and add:
     - Name: `VITE_FORMSPREE_FORM_ID`
     - Value: your Formspree form ID from step 1 (e.g. `xpzgkwqr`)
5. Click **Deploy** and wait for the build to complete.

Your portfolio will be live at a `*.vercel.app` URL. You can now connect your custom domain.

---

## 3. Add Custom Domain in Vercel

1. In your Vercel project, go to **Settings → Domains**.
2. Click **Add Domain** and enter `sarahather.com`.
3. Also add `www.sarahather.com` as a redirect to `sarahather.com` (or vice versa).
4. Vercel will show you the DNS records to add. See step 4 below.

---

## 4. Configure DNS in GoDaddy

Log in to your GoDaddy account, go to **My Products → DNS** for `sarahather.com`, and add the following records:

### For the apex domain (`sarahather.com`)

Add an **A record** for each of Vercel's IP addresses:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 600 |

> Vercel uses a single IP for their global edge network. If Vercel shows you a different IP in their dashboard, use that one instead.

### For the `www` subdomain

Add a **CNAME record**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | cname.vercel-dns.com | 600 |

### Notes

- DNS changes can take up to 48 hours to propagate globally, though they often take effect within 15–30 minutes.
- Once the DNS records are in place, Vercel will automatically provision an SSL certificate for your domain via Let's Encrypt (free).
- You can verify propagation at [dnschecker.org](https://dnschecker.org).

---

## 5. Verify Everything Works

Once DNS has propagated:

1. Visit `https://sarahather.com` — you should see the portfolio.
2. Fill out the contact form and submit — you should receive an email at your Formspree account's registered address.
3. Navigate between pages — all routes should work (backed by the `vercel.json` catch-all rewrite rule).

---

## Updating Content

All portfolio content lives in TypeScript files in `lib/content/src/`:

| File | Content |
|------|---------|
| `work-experience.ts` | Work history, roles, highlights, tech stack |
| `travels.ts` | Travel destinations, itineraries, highlights |
| `speaking.ts` | Speaking engagements |
| `crafts.ts` | Craft/handmade items |
| `writing.ts` | Blog posts / essays (currently empty) |

To update content, edit the relevant file and push to your Git repository. Vercel will automatically rebuild and redeploy.
