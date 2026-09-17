const fs = require('fs');
const path = require('path');

const root = __dirname;
const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const key = (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '').trim();

const safeUrl = url || '__PUNEETH_SUPABASE_URL__';
const safeKey = key || '__PUNEETH_SUPABASE_PUBLISHABLE_KEY__';

if (url && !/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url)) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL does not look like a valid Supabase project URL.');
}

if (key && !key.startsWith('sb_publishable_')) {
  throw new Error('NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY must be a Supabase publishable key (sb_publishable_...).');
}

const config = `/* Generated during deployment. Do not edit manually. */\nwindow.PUNEETH_SUPABASE = ${JSON.stringify({
  url: safeUrl,
  publishableKey: safeKey
}, null, 2)};\n`;

fs.writeFileSync(path.join(root, 'supabase-config.js'), config, 'utf8');
console.log(url && key
  ? 'Supabase browser configuration generated from Vercel environment variables.'
  : 'Supabase environment variables are not configured; keeping local-first fallback.');
