import { useState, useEffect } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <nav className="navbar">
      <h2>CareerPath.ai</h2>
      <div className="mode-toggle" onClick={() => setDark(!dark)}>
        {dark ? '☀️' : '🌙'}
      </div>
    </nav>
  );
}
