import { useEffect, useState } from 'react';

export default function Results() {
  const [matches] = useState<any[]>([]);

  return (
    <div className="card">
      <h2>Your Career Matches</h2>
      {matches.length === 0 ? <p>No results yet. Go back and fill the form!</p> : null}
    </div>
  );
}
