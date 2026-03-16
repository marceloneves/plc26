import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import ForWhoSection from "@/components/ForWhoSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <HeroSection />
      <BenefitsSection />
      <AgendaSection />
      <SpeakersSection />
      <ForWhoSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
