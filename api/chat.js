export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Doar metoda POST este permisă.' });
  }

  const { prompt } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ message: 'Cheia API lipsește.' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Ești Oraelya, un oracol AI înțelept, blând și poetic. Răspunsurile tale sunt profunde și enigmatice.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8
      })
    });

    const data = await response.json();

    if (data.choices && data.choices[0].message) {
      res.status(200).json({ response: data.choices[0].message.content });
    } else {
      res.status(500).json({ message: 'Oraelya tace... întreab-o din nou.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Eroare de comunicare cu Oracolul.', error: error.message });
  }
}
