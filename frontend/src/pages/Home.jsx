import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Reviews from '../components/Reviews.jsx';
import CTA from '../components/CTA.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Reviews />
      <CTA />
    </>
  );
}
