import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          {/* Date & Location pill */}
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-border bg-card/50">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span className="font-display text-sm font-medium uppercase tracking-wider">4 de Setembro de 2026</span>
            </div>
            <span className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-display text-sm font-medium uppercase tracking-wider">São Paulo – SP</span>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium font-display uppercase tracking-wider">
              O maior evento de liderança em produto da América Latina
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[0.9]">
            PRODUCT<br />
            <span className="text-gradient-gold">LEADERSHIP</span><br />
            CONFERENCE 2026
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Evento Presencial • Conteúdo Prático • Comunidade de Líderes e Decisores
          </p>

          {/* Countdown */}
          <CountdownTimer />

          {/* Sub-text */}
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Um dia inteiro de conteúdo intenso para transformar sua visão sobre liderança em produto.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-display font-bold text-lg px-10 py-6 glow-gold hover:opacity-90 transition-opacity"
            >
              QUERO GARANTIR MINHA VAGA
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground font-display font-semibold text-lg px-10 py-6 hover:bg-primary/10 transition-colors"
            >
              LOTE PROMOCIONAL POR TEMPO LIMITADO
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
