import PageHeader from '../components/PageHeader.jsx';
import AboutComponent from '../components/About.jsx';
import Team from '../components/Team.jsx';
import BeforeAfter from '../components/BeforeAfter.jsx';
import CTA from '../components/CTA.jsx';

export default function About() {
  return (
    <>
      <PageHeader 
        title="About XarKode" 
        subtitle="We build the foundation beneath your digital growth. Meet the experts driving innovation." 
      />
      <AboutComponent />
      <Team />
      <BeforeAfter />
      <CTA />
    </>
  );
}
