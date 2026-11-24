import PageHeader from '../components/PageHeader.jsx';
import BrandManifesto from '../components/BrandManifesto.jsx';
import DirectByDesign from '../components/DirectByDesign.jsx';
import ClientEndorsements from '../components/ClientEndorsements.jsx';
import CTA from '../components/CTA.jsx';

export default function About() {
  return (
    <>
      <PageHeader 
        tag="ABOUT / DIGITAL ARCHITECT"
        title="Direct by Design" 
        subtitle="XarKode is a premium digital agency that builds the foundation beneath your digital growth." 
      />
      <BrandManifesto />
      <DirectByDesign />
      <ClientEndorsements />
      <CTA />
    </>
  );
}
