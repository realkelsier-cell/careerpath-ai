import Head from 'next/head';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head><title>CareerPath.ai</title></Head>
      <Navbar />
      <div className="hero">
        <h1>Find Your Perfect Career with AI.</h1>
        <p>Describe yourself — AI builds your future roadmap.</p>
        <button className="button" onClick={() => document.querySelector('.form-container')?.scrollIntoView({behavior: 'smooth'})}>
          Start Now
        </button>
      </div>
      <Form />
      <Footer />
    </>
  );
}
