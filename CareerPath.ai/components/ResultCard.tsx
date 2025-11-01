import { useRouter } from 'next/router';

export default function ResultCard({ match }: any) {
  const router = useRouter();
  const { career, score } = match;

  const handleResume = () => {
    localStorage.setItem('selectedCareerMatch', JSON.stringify(match));
    router.push('/resume');
  };

  return (
    <div className="result-card">
      <h3>{career.name}</h3>
      <p>Match Score: {score.toFixed(0)}%</p>
      <button onClick={handleResume} className="button" style={{background: '#8b5cf6', color: 'white'}}>Build Resume</button>
    </div>
  );
}
