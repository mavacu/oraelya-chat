import { useState } from "react";

export default function ChatBox() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askOraelya = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer || "Oraelya tace... întreab-o din nou.");
    } catch (err) {
      setAnswer("Eroare... încearcă din nou.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto font-serif text-center">
      <h1 className="text-4xl font-bold mb-6">Oraelya AI Oracle</h1>
      <form onSubmit={askOraelya}>
        <input
          type="text"
          placeholder="Întreabă Oracolul..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Așteaptă..." : "Trimite"}
        </button>
      </form>
      {answer && (
        <p className="mt-6 text-lg">
          <strong>Oraelya răspunde:</strong> {answer}
        </p>
      )}
    </div>
  );
}
