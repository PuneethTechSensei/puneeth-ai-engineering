# Security deployment checklist

The security branch moves authoritative lesson content, assessment answer keys, scoring, lesson completion, and phase unlocks behind Appwrite Functions.

Before merging:
1. Set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY as secret environment variables on both submit-assessment and get-protected-lesson.
2. Keep Appwrite API keys server-side only. The browser must send only the Supabase session bearer token.
3. Activate the tested Appwrite deployments after the variables are populated.
4. Verify one signed-in lesson load, one assessment submission, one lesson evidence save, and one phase unlock end-to-end.

The public bundle should contain lesson metadata only; practice-data.js, answer keys, and authoritative lesson fields must not return to the browser bundle.
