import { useState } from 'react';

export default function ExportImport() {
  const exportProfile = () => {
    const data = {
      user: JSON.parse(localStorage.getItem('userInput') || '{}'),
      match: JSON.parse(localStorage.getItem('selectedCareerMatch') || '{}')
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'career-profile.cpai';
    a.click();
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={exportProfile} className="button">Export Profile</button>
    </div>
  );
}
