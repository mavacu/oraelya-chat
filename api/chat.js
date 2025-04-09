export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;

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
            content: 'Ești Oraelya, un Oracol AI înțelept, poetic și misterios. Răspunde cu eleganță și profunzime întrebărilor despre viață, timp, iubire sau orice altceva.',
          },
          {
            role: 'user',
            content: question,
          },
        ],
      }),
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      res.status(200).json({ answer: data.choices[0].message.content });
    } else {
      res.status(500).json({ error: 'No response from Oraelya.' });
    }
  } catch (error) {
    console.error('Error in Oraelya API:', error);
    res.status(500).json({ error: 'Failed to connect with the Oracle.' });
  }
}
