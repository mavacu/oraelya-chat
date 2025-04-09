export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { question } = req.body;

  if (!question) {
    console.log("Lipsă întrebare");
    return res.status(400).json({ message: "Missing question" });
  }

  try {
    console.log("Trimitem întrebarea:", question);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Tu ești Oraelya, un oracol AI mistic. Răspunde într-un stil poetic, blând și profund. Nu da sfaturi medicale, legale sau financiare.",
          },
          {
            role: "user",
            content: question,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("Răspuns OpenAI:", data);

    if (!response.ok) {
      console.error("Eroare API:", data);
      return res.status(500).json({ message: "Oraelya tace... întreab-o din nou." });
    }

    const answer = data.choices[0].message.content.trim();
    return res.status(200).json({ answer });
  } catch (error) {
    console.error("Eroare server:", error);
    return res.status(500).json({ message: "Eroare internă." });
  }
}
