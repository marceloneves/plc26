import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stage.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Conference stage with dramatic amber lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            PLC<span className="text-primary">'26</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#speakers" className="hover:text-foreground transition-colors">Speakers</a>
            <a href="#agenda" className="hover:text-foreground transition-colors">Agenda</a>
            <a href="#register" className="hover:text-foreground transition-colors">Ingressos</a>
          </div>
          <Button size="sm" className="bg-gradient-gold text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity">
            Inscreva-se
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium font-display">Edição 2026</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
            Product<br />
            <span className="text-gradient-gold">Leadership</span><br />
            Conference
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            O maior evento de liderança em produto da América Latina. 
            Dois dias de conteúdo, networking e inspiração.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-primary" />
              <span className="font-display font-medium">4 de Setembro, 2026</span>
            </div>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-display font-medium">São Paulo, SP</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground font-display font-bold text-lg px-10 py-6 glow-gold hover:opacity-90 transition-opacity">
              Garanta sua vaga
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground font-display font-medium text-lg px-10 py-6 hover:bg-secondary transition-colors">
              Saiba mais
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
