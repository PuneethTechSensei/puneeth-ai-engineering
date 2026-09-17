# Puneeth AI Engineering

A free, step-by-step AI Engineering learning platform designed to make practical AI education accessible to everyone. The curriculum currently contains 20 phases and 200 starter lessons, with guided progression and phase assessments.

## Principles
- Free core learning: no learner paywall.
- Guided progression: complete a phase's lessons and assessment to unlock the next phase.
- Preview without blocking curiosity: locked phases can be explored before unlocking.
- Learn → Practice → Prove → Progress.
- Prefer free, open-source and locally runnable tooling wherever practical.

## Current architecture
Static HTML/CSS/JavaScript. Progress and assessment results are stored in the learner's browser with `localStorage`. No database or paid API is required for the current version.

## Current scope
- 20 phases / 200 starter lessons.
- Phase 00 and Phase 01 include authored lesson detail; the remaining phases have structured lesson scaffolding ready for deeper authoring.
- Five-question assessments are available for every phase so the progression system can be tested end-to-end.

## Deploy
The project can be deployed directly to Vercel as a static site. Keep the root directory as `./` and leave build/install commands empty.
