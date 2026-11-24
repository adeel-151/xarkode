import PageHeader from '../components/PageHeader.jsx';
import SolutionsWithIntent from '../components/SolutionsWithIntent.jsx';
import TechStack from '../components/TechStack.jsx';
import CTA from '../components/CTA.jsx';

export default function Services() {
  return (
    <>
      <PageHeader 
        tag="SERVICES & CAPABILITIES"
        title="Solutions with Intent" 
        subtitle="We build the foundation beneath your digital growth. Explore our core engineering services." 
      />
      <SolutionsWithIntent />
      <TechStack />
      <CTA />
    </>
  );
}
