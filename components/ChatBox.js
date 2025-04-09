import { useState } from 'react';

export default function ChatBox() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askOraelya = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer || 'Oraelya tace... întreab-o din nou.');
    } catch (err) {
      setAnswer('Eroare... încearcă din nou.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-mystic-gradient text-white font-body flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-oraelya mb-4 tracking-wide text-goldLight">
        Oraelya AI Oracle
      </h1>

      <p className="text-center text-white/70 mb-10 max-w-lg italic">
        ✨ Bine ai venit, suflet rătăcitor... Întreabă, iar Oracolul îți va răspunde în șoapte de lumină.
      </p>

      <form onSubmit={askOraelya} className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Întreabă Oracolul..."
          className="w-full px-4 py-3 mb-4 bg-white/10 text-white placeholder-white/50 rounded border border-white/20 focus:outline-none focus:ring-2 focus:ring-goldLight"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-goldLight text-black py-2 rounded font-bold transition duration-300 hover:brightness-110 hover:shadow-md"
        >
          {loading ? 'Oraelya ascultă...' : 'Trimite'}
        </button>
      </form>

      {answer && (
        <div className="mt-8 max-w-2xl text-lg leading-relaxed text-white/90 animate-fade-in">
          <strong className="text-goldLight">Oraelya răspunde:</strong>
          <p className="mt-4 whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
}
