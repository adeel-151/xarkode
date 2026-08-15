import PageHeader from '../components/PageHeader.jsx';
import WhyUsComponent from '../components/WhyUs.jsx';
import Process from '../components/Process.jsx';
import CTA from '../components/CTA.jsx';

export default function WhyUs() {
  return (
    <>
      <PageHeader 
        title="Why Choose Us" 
        subtitle="See how our holistic, AI-first approach outperforms traditional agencies." 
      />
      <WhyUsComponent />
      <Process />
      <CTA />
    </>
  );
}
