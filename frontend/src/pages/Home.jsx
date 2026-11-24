import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import BrandManifesto from '../components/BrandManifesto.jsx';
import SelectedWork from '../components/SelectedWork.jsx';
import Playbook from '../components/Playbook.jsx';
import SolutionsWithIntent from '../components/SolutionsWithIntent.jsx';
import FeaturedSolution from '../components/FeaturedSolution.jsx';
import DirectByDesign from '../components/DirectByDesign.jsx';
import TechStack from '../components/TechStack.jsx';
import ClientEndorsements from '../components/ClientEndorsements.jsx';
import FAQSection from '../components/FAQSection.jsx';
import ProjectInquiry from '../components/ProjectInquiry.jsx';

export default function Home() {
  return (
    <>
      {/* 01: Hero Section */}
      <Hero />

      {/* Marquee Ticker */}
      <Marquee />

      {/* 02: Brand Manifesto */}
      <BrandManifesto />

      {/* 03: Selected Work */}
      <SelectedWork />

      {/* 04: The XarKode Playbook */}
      <Playbook />

      {/* 05: Solutions with Intent / Capabilities */}
      <SolutionsWithIntent />

      {/* 06: Featured Solution */}
      <FeaturedSolution />

      {/* 07: Direct by Design */}
      <DirectByDesign />

      {/* 08: Tech Stack & Practices */}
      <TechStack />

      {/* 09: Client Endorsements & Proof of Execution */}
      <ClientEndorsements />

      {/* 10: FAQ Section */}
      <FAQSection />

      {/* 11: Start a Project Form */}
      <ProjectInquiry />
    </>
  );
}
