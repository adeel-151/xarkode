import PageHeader from '../components/PageHeader.jsx';
import ServicesComponent from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import CTA from '../components/CTA.jsx';

export default function Services() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="From AI automation to full-scale digital growth, we provide end-to-end solutions." 
      />
      <ServicesComponent />
      <Process />
      <CTA />
    </>
  );
}
