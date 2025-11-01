import { useState, useEffect } from 'react';

export default function PWAInstallButton() {
  const [prompt, setPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => { e.preventDefault(); setPrompt(e); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!prompt) return null;

  return (
    <button
      onClick={() => prompt.prompt()}
      style={{
        position: 'fixed', bottom: '20px', right: '20px',
        background: '#10b981',09 color: 'white', padding: '12px 20px',
        borderRadius: '50px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        animation: 'pulse 2s infinite', zIndex: 1000
      }}
    >
      Install App
    </button>
  );
}
