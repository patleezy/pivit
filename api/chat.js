export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { messages, systemPrompt } = req.body;
  if (!messages || !systemPrompt) {
    return res.status(400).json({ error: 'Missing messages or systemPrompt' });
  }

  try {
    // Non-streaming — simpler and more reliable for JSON responses
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 2000,
        system: systemPrompt,
        messages,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      return res.status(response.status).json({
        error: err.error?.message || 'Anthropic API error',
      });
    }

    const data = await response.json();
    const content = data.content
      .map((b) => (b.type === 'text' ? b.text : ''))
      .join('');

    return res.status(200).json({ content });
  } catch (err) {
    console.error('Pivit API error:', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}
