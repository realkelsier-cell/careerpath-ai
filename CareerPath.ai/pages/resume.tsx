import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ResumeBuilder from '../components/ResumeBuilder';
import Footer from '../components/Footer';

export default function Resume() {
  const [user, setUser] = useState(null);
  const [match, setMatch] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userInput') || '{}'));
    setMatch(JSON.parse(localStorage.getItem('selectedCareerMatch') || '{}'));
  }, []);

  if (!user || !match) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <ResumeBuilder userData={user} careerMatch={match} />
      <Footer />
    </>
  );
}
