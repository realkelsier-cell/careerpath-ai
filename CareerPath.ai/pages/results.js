import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import ResultCard from '../components/ResultCard';
import Footer from '../components/Footer';
import { matchCareers } from '../logic/matchLogic';

export default function Results() {
  const router = useRouter();
  const [matches, setMatches] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('userInput');
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setMatches(matchCareers(parsed));
    } else router.push('/');
  }, [router]);

  return (
    <>
      <Navbar />
      <div style={{padding: '2rem'}}>
        <h1 style={{textAlign: 'center'}}>Your Top Career Matches</h1>
        {matches.map((m,i) => <ResultCard key={i} match={m} userCountry={user?.country} />)}
        <div style={{textAlign: 'center', margin: '30px'}}>
          <button className="button" onClick={() => router.push('/')}>Rerun</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
