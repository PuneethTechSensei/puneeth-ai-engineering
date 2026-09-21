# AI Engineering by TechSensei

A free, step-by-step AI Engineering learning platform by Puneeth.

## Core principles

- Core learning remains free.
- Learners can start without an account.
- Guided progression: **Learn → Experiment → Build → Break → Prove → Progress**.
- Locked phases can be previewed without being marked complete.
- Prefer free, open-source and local tooling wherever practical.
- Collect only information needed for optional learning sync and privacy-friendly analytics.

## Current platform

- 20 phases: 17 core + 3 optional specializations
- 150 focused lessons with engineering labs
- Phase assessments
- Browser-local progress tracking
- Optional Supabase learner account and cross-device progress sync
- Vercel Web Analytics support
- Creator Center with analytics setup guidance
- Dark/light mode
- Search and curriculum filters
- Engineering Proof Portfolio with local export
- Original Agent Systems Visual Atlas
- Self-check mastery contracts and phase-aware lab metadata
- Responsive static site

## Free analytics

Vercel Web Analytics is wired into the static pages with the official `/_vercel/insights/script.js` integration path. After deploying, enable **Analytics** in the Vercel project dashboard. Vercel provides aggregated traffic information such as visitors and page views. Do not add a Vercel API token to browser code.

## Optional learner accounts

The website works without Supabase. If you want cross-device sync:

1. Create a free Supabase project.
2. Open the Supabase SQL Editor.
3. Run `supabase-setup.sql`.
4. In Vercel, open **Project Settings → Environment Variables**.
5. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` for Production (and Preview if desired).
6. Redeploy. The Vercel build generates `supabase-config.js` automatically.
7. Vercel automatically deploys the update.

Use only the **publishable** key (`sb_publishable_...`) in the browser. Never put a `service_role` or `sb_secret_...` key in browser code.

Supabase's browser client supports persistent sessions, and its Data API should be protected with Row Level Security. The included SQL enables RLS and limits each learner to their own progress and event rows.

## Creator monitoring

Open `creator.html` after deployment. It links to the Vercel and Supabase dashboards and explains which signals are useful for improving the free curriculum.

## Local-first fallback

If Supabase is not configured, learners can still use the entire curriculum. Progress and theme preferences stay in browser local storage. No account is required.

## Deployment

This project is intentionally static. The existing GitHub → Vercel pipeline can deploy it without a build step.


## PromptFix V8 editorial rewrite

The V8 content pass is a full lesson-quality rewrite of the current 150-lesson map. Every lesson now has a topic-matched problem statement, mental model, worked example, hands-on experiment, deliberate failure, proof requirement, transfer statement, common mistakes and references where useful. The renderer presents these as a real learning sequence rather than generic “what you will learn” scaffolding.

The progression engine now requires saved lab evidence before a lesson can be marked complete. Phase assessments use five applied questions with balanced answer positions rather than vocabulary-only recall. Fast-moving areas carry freshness notes and primary references.

## Editorial quality gate

A lesson is not considered ready merely because it has a title or code sample. The project standard is: **problem → mental model → experiment → build → break → prove → transfer**. If the learner can click complete without doing observable work, the lesson fails the quality gate.

V8 is a curriculum/content implementation pass, not a claim that the site is independently accredited or that every external dependency will remain unchanged. Current tooling should always be checked against its primary documentation.

## Final curriculum shape

This release intentionally keeps the curriculum at **150 focused lessons** across **20 phases: 17 core + 3 optional specializations**. The optional phases are Computer Vision (05), LLM Internals & Training (09), and Multimodal AI (12). They remain available but do not block the core AI Engineer path.
