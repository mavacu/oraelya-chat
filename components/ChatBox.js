import { useState } from 'react';

export default function ChatBox() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Oraelya AI Oracle</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Întreabă Oracolul..."
          style={{ padding: '0.5rem', width: '80%' }}
        />
        <button type="submit" style={{ padding: '0.5rem', marginLeft: '1rem' }}>
          Trimite
        </button>
      </form>
      {response && <p style={{ marginTop: '2rem' }}>{response}</p>}
    </div>
  );
}
