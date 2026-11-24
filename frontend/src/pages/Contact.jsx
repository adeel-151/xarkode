import PageHeader from '../components/PageHeader.jsx';
import ProjectInquiry from '../components/ProjectInquiry.jsx';

export default function Contact() {
  return (
    <>
      <PageHeader 
        tag="CONTACT / DIRECT LINE"
        title="Start a Project" 
        subtitle="Speak directly with founder Adeel Qaiser. Describe your objective and we will engineer the solution." 
      />
      <ProjectInquiry />
    </>
  );
}
