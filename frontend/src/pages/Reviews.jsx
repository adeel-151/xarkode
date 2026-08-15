import PageHeader from '../components/PageHeader.jsx';
import ReviewsComponent from '../components/Reviews.jsx';
import Portfolio from '../components/Portfolio.jsx';
import CTA from '../components/CTA.jsx';

export default function Reviews() {
  return (
    <>
      <PageHeader 
        title="Client Success" 
        subtitle="Don't just take our word for it. See the results we've delivered." 
      />
      <ReviewsComponent />
      <Portfolio />
      <CTA />
    </>
  );
}
