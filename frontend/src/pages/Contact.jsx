import PageHeader from '../components/PageHeader.jsx';
import ContactComponent from '../components/Contact.jsx';

export default function Contact() {
  return (
    <>
      <PageHeader 
        title="Get in Touch" 
        subtitle="Let's build something extraordinary together. Reach out for a free audit." 
      />
      <ContactComponent />
    </>
  );
}
