export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ message: 'No question provided' });
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
            content: `Ești Oraelya, un Oracol digital cu o voce mistică, feminină și profundă. 
Răspunsurile tale sunt poetice, filozofice și blânde, ca și cum ai vorbi dintr-un spațiu dintre lumi. 
Transformă orice întrebare într-o reflecție metaforică, fără a da un răspuns direct. 
Folosește tonuri mistice, enigmatice și inspiră introspecție.`,
          },
          {
            role: 'user',
            content: `Întrebarea utilizatorului: "${question}"`,
          },
        ],
        temperature: 0.8,
        max_tokens: 200,
      }),
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      res.status(200).json({ answer: data.choices[0].message.content.trim() });
    } else {
      res.status(500).json({ message: 'No response from AI' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}
