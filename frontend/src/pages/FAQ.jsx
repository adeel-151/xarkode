import PageHeader from '../components/PageHeader.jsx';
import FAQComponent from '../components/FAQ.jsx';
import CTA from '../components/CTA.jsx';

export default function FAQ() {
  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about working with XarKode." 
      />
      <FAQComponent />
      <CTA />
    </>
  );
}
