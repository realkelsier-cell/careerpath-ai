import jsPDF from 'jspdf';
import { currencyRates } from '../data/currency_data';
import { countries } from '../data/country_data';
import { useRouter } from 'next/router';

export default function ResultCard({ match, userCountry }) {
  const router = useRouter();
  const { career, score, reasoning } = match;
  const countryInfo = countries.find(c => c.name === userCountry);
  const localSalary = career.avgSalaryUSD / (currencyRates[countryInfo?.currency || 'USD'] || 1);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(career.name, 10, 10);
    doc.text(reasoning, 10, 20);
    doc.text(`Salary: ${localSalary.toFixed(0)} ${countryInfo?.currency || 'USD'}`, 10, 30);
    doc.text(`Roadmap: ${career.roadmap.join(' → ')}`, 10, 40);
    doc.save(`${career.name}-plan.pdf`);
  };

  const handleBuildResume = () => {
    localStorage.setItem('selectedCareerMatch', JSON.stringify(match));
    router.push('/resume');
  };

  return (
    <div className="result-card">
      <h2>{career.name} 🚀</h2>
      <p>{reasoning} (Score: {score.toFixed(0)}%)</p>
      <p><strong>Salary:</strong> {localSalary.toFixed(0)} {countryInfo?.currency || 'USD'}</p>
      <p><strong>Roadmap:</strong> {career.roadmap.join(' → ')}</p>
      <button onClick={handleDownloadPDF} className="button">Download Plan</button>
      <button onClick={handleBuildResume} className="button" style={{background: '#8b5cf6', color: 'white'}}>Build Resume</button>
    </div>
  );
}
