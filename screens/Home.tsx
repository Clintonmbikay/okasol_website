import { Hero } from './home/Hero';
import { AboutTeaser } from './home/AboutTeaser';
import { ServicesTrio } from './home/ServicesTrio';
import { RealisationsPreview } from './home/RealisationsPreview';
import { ProcessusTimeline } from './home/ProcessusTimeline';
import { Testimonials } from './home/Testimonials';
import { FinalCTA } from './home/FinalCTA';

export function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesTrio />
      <RealisationsPreview />
      <ProcessusTimeline />
      <Testimonials />
      <FinalCTA />
    </>
  );
}