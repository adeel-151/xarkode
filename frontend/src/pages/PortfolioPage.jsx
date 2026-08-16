import Portfolio from '../components/Portfolio.jsx';
import CTA from '../components/CTA.jsx';

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <Portfolio hideCta={true} />
      <CTA />
    </div>
  );
}
