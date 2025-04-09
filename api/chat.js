export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Missing question' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'Ești Oraelya, un Oracol AI care răspunde într-un stil poetic, misterios și blând. Nu dai răspunsuri directe, ci folosești metafore, simboluri și limbaj elevat, ca și cum ai vorbi dintr-o altă lume.',
          },
          {
            role: 'user',
            content: question,
          },
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('OpenAI error:', data.error);
      return res.status(500).json({ error: 'OpenAI API error' });
    }

    const answer = data.choices?.[0]?.message?.content?.trim();

    if (!answer) {
      return res.status(500).json({ answer: null });
    }

    res.status(200).json({ answer });
  } catch (error) {
    console.error('Request error:', error);
    res.status(500).json({ error: 'Server error' });
  }
}
