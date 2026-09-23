# Security deployment checklist

The security branch moves authoritative lesson content, assessment answer keys, scoring, lesson completion, and phase unlocks behind Appwrite Functions.

Before merging:
1. Set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY as secret environment variables on both submit-assessment and get-protected-lesson.
2. For the AI Tutor, set OPENAI_API_KEY as a secret on submit-assessment and optionally set OPENAI_MODEL (default: gpt-5.6-luna). Never expose either value to the browser.
3. Keep Appwrite API keys server-side only. The browser must send only the Supabase session bearer token.
4. Activate the tested Appwrite deployment after the variables are populated.
5. Verify one signed-in lesson load, one assessment submission, one lesson evidence save, one phase unlock, and one AI Tutor response end-to-end.

The public bundle should contain lesson metadata only; practice-data.js, answer keys, and authoritative lesson fields must not return to the browser bundle.
