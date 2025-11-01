import Form from '../components/Form';
import PWAInstallButton from '../components/PWAInstallButton';
import ExportImport from '../components/ExportImport';

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>AI Career Ecosystem</h1>
        <p>1000+ Jobs • 50+ Tools • 100% Offline</p>
      </div>
      <Form />
      <ExportImport />
      <PWAInstallButton />
    </>
  );
}
