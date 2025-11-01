import { useState, useEffect } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <nav className="navbar">
      <h2>CareerPath.ai</h2>
      <div onClick={() => setDark(!dark)} style={{ cursor: 'pointer', fontSize: '1.5rem' }}>
        {dark ? '☀️' : '🌙'}
      </div>
    </nav>
  );
}
