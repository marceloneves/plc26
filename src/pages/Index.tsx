import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import ForWhoSection from "@/components/ForWhoSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import OrganizationSection from "@/components/OrganizationSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />
      <AnnouncementBar />
      <HeroSection />
      <BenefitsSection />
      <AgendaSection />
      <SpeakersSection />
      <ForWhoSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <OrganizationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
