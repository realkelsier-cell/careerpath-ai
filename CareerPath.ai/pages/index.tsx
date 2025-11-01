import Head from 'next/head';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Footer from '../components/Footer';
import PWAInstallButton from '../components/PWAInstallButton';
import ExportImport from '../components/ExportImport';

export default function Home() {
  return (
    <>
      <Head><title>CareerPath.ai</title></Head>
      <Navbar />
      <div className="hero">
        <h1>AI Career Advisor</h1>
        <p>Offline • Installable • Multi-Language</p>
        <button className="button" onClick={() => document.querySelector('.form-container')?.scrollIntoView({behavior: 'smooth'})}>
          Start
        </button>
      </div>
      <Form />
      <ExportImport />
      <Footer />
      <PWAInstallButton />
    </>
  );
}
