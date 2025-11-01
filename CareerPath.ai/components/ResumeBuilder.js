import { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import { useRouter } from 'next/router';

export default function ResumeBuilder({ userData, careerMatch }) {
  const router = useRouter();
  const [resume, setResume] = useState({
    name: '', email: '', phone: '', summary: '', skills: '', certifications: ''
  });

  useEffect(() => {
    if (careerMatch && userData) {
      setResume(prev => ({
        ...prev,
        summary: `Aspiring ${careerMatch.career.name} with strong skills in ${userData.skills.join(', ')}. Self-rated IQ: ${userData.iq}. Ready to commit ${userData.timeCommit} with a ${userData.budget} budget. Preferred work style: ${userData.workStyle}.`,
        skills: [...userData.skills, ...careerMatch.career.requiredSkills].filter((v,i,a)=>a.indexOf(v)===i).join(', ')
      }));
    }
  }, [careerMatch, userData]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(resume.name || 'Your Name', 20, 20);
    doc.setFontSize(12);
    doc.text(resume.summary, 20, 40, { maxWidth: 170 });
    doc.text(`Skills: ${resume.skills}`, 20, 70);
    doc.text(`Certifications: ${resume.certifications || 'None'}`, 20, 90);
    doc.save('resume.pdf');
  };

  return (
    <div className="form-container">
      <h2>Build Your Resume</h2>
      <p>Auto-filled from your career match. Edit and download.</p>
      <input name="name" placeholder="Full Name" onChange={e => setResume(p=>({...p, name: e.target.value}))} />
      <input name="email" placeholder="Email" onChange={e => setResume(p=>({...p, email: e.target.value}))} />
      <input name="phone" placeholder="Phone" onChange={e => setResume(p=>({...p, phone: e.target.value}))} />
      <textarea name="summary" value={resume.summary} onChange={e => setResume(p=>({...p, summary: e.target.value}))} rows="4" />
      <input name="skills" value={resume.skills} onChange={e => setResume(p=>({...p, skills: e.target.value}))} />
      <textarea name="certifications" placeholder="Certifications (optional)" onChange={e => setResume(p=>({...p, certifications: e.target.value}))} />
      <button onClick={generatePDF} className="button" style={{background: '#10b981', color: 'white'}}>Download PDF</button>
      <button onClick={() => router.push('/results')} className="button">Back</button>
    </div>
  );
}
