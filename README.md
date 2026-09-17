# Puneeth AI Engineering

A free, step-by-step AI Engineering learning platform designed to make practical AI education accessible to everyone.

## Principles
- Free core learning: no learner paywall.
- Guided progression: complete a phase's lessons and assessment to unlock the next phase.
- Preview without blocking curiosity: locked phases can be explored before unlocking.
- Learn → Practice → Prove → Progress.
- Prefer free, open-source and locally runnable tooling wherever practical.

## Current architecture
Static HTML/CSS/JavaScript. Progress and assessment results are stored in the learner's browser with `localStorage`. No database or paid API is required for the current version.

## Deploy
The project can be deployed directly to Vercel as a static site. Keep the root directory as `./` and leave build/install commands empty.
