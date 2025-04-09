export default async function handler(req, res) {
  const { message } = req.body;

  // Răspuns dummy temporar
  res.status(200).json({
    reply: `Oracolul spune: ai întrebat "${message}" și răspunsul este... în tine.`,
  });
}
