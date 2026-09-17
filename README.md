# Puneeth AI Engineering

A free, step-by-step AI Engineering learning platform by Puneeth.

## Core principles

- Core learning remains free.
- Learners can start without an account.
- Guided progression: **Learn → Practice → Prove → Progress**.
- Locked phases can be previewed without being marked complete.
- Prefer free, open-source and local tooling wherever practical.
- Collect only information needed for optional learning sync and privacy-friendly analytics.

## Current platform

- 20 guided phases
- 200 starter lessons
- Phase assessments
- Browser-local progress tracking
- Optional Supabase learner account and cross-device progress sync
- Vercel Web Analytics support
- Creator Center with analytics setup guidance
- Dark/light mode
- Search and curriculum filters
- Responsive static site

## Free analytics

Vercel Web Analytics is wired into the static pages with the official `/_vercel/insights/script.js` integration path. After deploying, enable **Analytics** in the Vercel project dashboard. Vercel provides aggregated traffic information such as visitors and page views. Do not add a Vercel API token to browser code.

## Optional learner accounts

The website works without Supabase. If you want cross-device sync:

1. Create a free Supabase project.
2. Open the Supabase SQL Editor.
3. Run `supabase-setup.sql`.
4. Open `supabase-config.js`.
5. Replace the placeholder project URL and publishable key.
6. Commit the change to GitHub.
7. Vercel automatically deploys the update.

Use only the **publishable/anon** key in the browser. Never put a `service_role` or secret key in `supabase-config.js`.

Supabase's browser client supports persistent sessions, and its Data API should be protected with Row Level Security. The included SQL enables RLS and limits each learner to their own progress and event rows.

## Creator monitoring

Open `creator.html` after deployment. It links to the Vercel and Supabase dashboards and explains which signals are useful for improving the free curriculum.

## Local-first fallback

If Supabase is not configured, learners can still use the entire curriculum. Progress and theme preferences stay in browser local storage. No account is required.

## Deployment

This project is intentionally static. The existing GitHub → Vercel pipeline can deploy it without a build step.
