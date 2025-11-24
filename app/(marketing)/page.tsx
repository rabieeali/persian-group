import Hero from '@/components/hero/Hero';
import { heroData } from "@/data/hero";
import ObstaclesSlider from "@/components/obstacles/ObstaclesSlider";
import obstacles from "@/data/obstacles";
import ConsultationForm from '@/components/consultation/ConsultationForm';
import FaqAccordion from '@/components/faq/FaqAccordion';

export default function Page() {
  return (
    <main>
      <Hero
        header={heroData.header}
        body={heroData.body}
        footer={heroData.footer}
        imageUrl={heroData.imageUrl}
      />
       <ObstaclesSlider items={obstacles} />
        <ConsultationForm />
        <FaqAccordion /> 
    </main>
  );
}
