import HeroSection from "@/components/HeroSection";
import SpeakersSection from "@/components/SpeakersSection";
import AgendaSection from "@/components/AgendaSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SpeakersSection />
      <AgendaSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
