import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ResumeBuilder({ userData, careerMatch }: any) {
  const router = useRouter();
  const [resume, setResume] = useState({ name: '', summary: '' });

  useEffect(() => {
    if (careerMatch) {
      setResume({ summary: `Aspiring ${careerMatch.career.name} with skills in ${userData.skills.join(', ')}.` });
    }
  }, [careerMatch, userData]);

  return (
    <div className="form-container">
      <h2>Resume Builder</h2>
      <input placeholder="Full Name" onChange={e => setResume(p => ({...p, name: e.target.value}))} />
      <textarea value={resume.summary} onChange={e => setResume(p => ({...p, summary: e.target.value}))} />
      <button className="button" style={{background: '#10b981', color: 'white'}}>Download PDF (Go WASM)</button>
      <button onClick={() => router.push('/results')} className="button">Back</button>
    </div>
  );
}
