import { useState } from 'react';

export default function ChatBox() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askOraelya = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      if (data.answer) {
        setAnswer(data.answer);
      } else {
        setAnswer('Oraelya tace... întreab-o din nou.');
      }
    } catch (err) {
      console.error(err);
      setAnswer('A apărut o eroare. Oracolul este tăcut acum.');
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Oraelya AI Oracle</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Întreabă Oracolul..."
        style={{
          marginTop: '1.5rem',
          padding: '0.7rem',
          width: '80%',
          maxWidth: '500px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <br />
      <button
        onClick={askOraelya}
        disabled={loading}
        style={{
          marginTop: '1rem',
          padding: '0.6rem 1.2rem',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Oracolul gândește...' : 'Trimite'}
      </button>

      {answer && (
        <p style={{ marginTop: '2rem', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
          <strong>Oraelya răspunde:</strong> {answer}
        </p>
      )}
    </div>
  );
}
