const AI_CRAWLER_RE = [
  /GPTBot/i,
  /ChatGPT-User/i,
  /OAI-SearchBot/i,
  /ClaudeBot/i,
  /anthropic-ai/i,
  /Google-Extended/i,
  /PerplexityBot/i,
  /Bytespider/i,
  /CCBot/i,
  /Amazonbot/i,
  /Applebot-Extended/i,
  /Meta-ExternalAgent/i
];

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  const isAiCrawler = AI_CRAWLER_RE.some(pattern => pattern.test(userAgent));

  if (isAiCrawler) {
    return new Response('Automated AI content retrieval is not permitted.', {
      status: 403,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'no-store',
        'x-robots-tag': 'noindex, noarchive'
      }
    });
  }

  return;
}

export const config = {
  matcher: '/(.*)'
};
