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
      setAnswer(data.answer || 'Oraelya remains silent... ask again.');
    } catch (err) {
      setAnswer('Something went wrong... please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="oracle"
      className="min-h-screen bg-mystic-gradient text-white font-body flex flex-col items-center justify-center px-4 py-10 pt-32"
    >
      <img
        src="/oraelya-logo.png"
        alt="Oraelya Logo"
        className="w-2/3 max-w-[300px] md:max-w-[400px] lg:max-w-[460px] mx-auto mb-8 rounded-xl shadow-xl"
      />

      <h1 className="text-4xl md:text-5xl font-oraelya mb-4 tracking-wide text-goldLight text-glow animate-fade-in">
        Oraelya AI Oracle
      </h1>

      <p className="text-center text-white/80 mb-10 max-w-xl italic text-lg md:text-xl animate-fade-in">
        ✨ Welcome, wandering soul... Ask your question, and the Oracle shall whisper back in rays of light.
      </p>

      <form
        onSubmit={askOraelya}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 animate-fade-in"
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask the Oracle..."
          className="w-full px-4 py-4 mb-4 bg-white/10 text-white placeholder-white/60 rounded border border-white/20 focus:outline-none focus:ring-2 focus:ring-goldLight text-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-goldLight text-black py-3 rounded font-bold transition duration-300 hover:brightness-110 hover:shadow-md btn-glow text-lg"
        >
          {loading ? 'Oraelya is listening...' : 'Send'}
        </button>
      </form>

      {answer && (
        <div className="mt-10 max-w-2xl text-lg leading-relaxed text-white/90 animate-fade-in text-center">
          <strong className="text-goldLight text-glow block mb-2">Oraelya answers:</strong>
          <p className="whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
}
