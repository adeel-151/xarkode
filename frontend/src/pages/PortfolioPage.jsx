import PageHeader from '../components/PageHeader.jsx';
import SelectedWork from '../components/SelectedWork.jsx';
import CTA from '../components/CTA.jsx';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader 
        tag="PORTFOLIO / SELECTED WORK"
        title="Public Case Studies" 
        subtitle="Explore our flagship production systems across healthcare, multi-tenant SaaS, and autonomous AI." 
      />
      <SelectedWork />
      <CTA />
    </>
  );
}
