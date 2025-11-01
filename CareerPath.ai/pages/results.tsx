import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ResultCard from '../components/ResultCard';
import Footer from '../components/Footer';

export default function Results() {
  const router = useRouter();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInput') || '{}');
    // Simulate Rust WASM call
    setMatches([{ career: { name: "Engineer" }, score: 95 }]);
  }, []);

  return (
    <>
      <Navbar />
      <div style={{padding: '2rem'}}>
        <h1 style={{textAlign: 'center'}}>Your Matches</h1>
        {matches.map((m, i) => <ResultCard key={i} match={m} />)}
      </div>
      <Footer />
    </>
  );
}
