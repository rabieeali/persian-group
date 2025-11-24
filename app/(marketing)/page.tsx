import Hero from '@/components/hero/Hero';
import ObstaclesSlider from '@/components/obstacles/ObstaclesSlider';
import ConsultationForm from '@/components/consultation/ConsultationForm';
import FaqAccordion from '@/components/faq/FaqAccordion';

export default function Page() {
  return (
    <main>
      <Hero />
      <ObstaclesSlider />
      <ConsultationForm />
      <FaqAccordion />
    </main>
  );
}
