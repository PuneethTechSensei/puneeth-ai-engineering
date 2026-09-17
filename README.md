# Puneeth AI Engineering

An original, developer-first AI engineering learning platform inspired by the *learning experience* of modern open curricula. It does not copy the reference site's branding, proprietary content, or visual assets.

## Included
- Responsive homepage
- 20-phase curriculum
- 100 starter lessons (5 per phase)
- Lesson pages with learning loop and runnable-style examples
- Browser-local progress tracking
- Search and completion filters
- Learning paths
- Glossary
- Dark/light mode
- GitHub/Vercel-friendly static deployment

## Run locally
No build step is required.

```bash
python3 -m http.server 3000
```
Open http://localhost:3000

## Deploy
### Vercel
Import this folder/repository into Vercel. Framework preset: Other. Build command: none. Output directory: `.`.

### GitHub Pages
Push the files to a repository and enable Pages from the repository settings.

## Next production upgrades
1. Move lesson content into Markdown/MDX.
2. Add Supabase authentication and cloud progress.
3. Add AI Tutor using an API route/serverless function.
4. Add code execution sandbox.
5. Add CMS/editor workflow for curriculum updates.
6. Add analytics and SEO sitemap.
7. Register a custom domain.
