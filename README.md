# Puneeth AI Engineering

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


## Content V1

Phases 02–05 now contain authored lessons with explanations, hands-on practice, proof tasks, common mistakes and further reading. Phase assessments use 10 questions with an 80% pass threshold and randomized answer positions.


## Learning Experience Engine V3

Lessons now use an evidence-based learning loop: **Learn → Experiment → Build → Break → Prove → Progress**.

For authored lessons, learners see a lesson-specific engineering mission, required evidence, a deliberate failure case, three mastery self-checks, and a proof-of-work field. Evidence is stored locally and the lesson completion gate opens only after evidence is saved.

The platform intentionally does not treat a generic “Practice” prompt as mastery. Future content stages should continue adding domain-specific labs, debugging incidents, design decisions, and eventually automated validation.


## Learning Experience V4
This version uses the Learn → Experiment → Build → Break → Prove → Progress model, requires concrete proof-of-work for authored lessons, and treats Computer Vision, LLM Internals and Multimodal AI as optional specializations that do not block the core path. See `LEARNING_EXPERIENCE_PLAN.md`.


## Agent systems visual references
Phase 14 includes learner-supplied reference visuals for ten agent engineering concepts. They are displayed with source credit and used as prompts for architecture analysis; they are not presented as original Puneeth AI Engineering artwork.


## Learning-experience V6

V6 treats each lesson as a competency exercise rather than a reading page. Labs have explicit artifacts, prerequisites, success criteria, failure modes and evidence prompts. Saved evidence is local-first and can be exported as Markdown. The platform deliberately describes this as self-reported evidence rather than independently verified mastery.


## Final curriculum shape

This release intentionally reduces the curriculum from 200 to **150 focused lessons**. The platform has **20 phases: 17 core + 3 optional specializations**. Computer Vision, LLM Internals & Training, and Multimodal AI are valuable but do not block the general AI Engineer path. See `CURRICULUM_FINAL_DECISION.md`, `BLINDSPOT_FINAL.md` and `PROMPTFIX_FINAL.md`.
