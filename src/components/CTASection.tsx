import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="register" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-gold opacity-10" />
          <div className="absolute inset-0 border border-primary/20 rounded-2xl" />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Faça parte da<br />
              <span className="text-gradient-gold">próxima edição</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Vagas limitadas. Garanta seu lugar entre os melhores líderes de produto do Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Pricing cards */}
              <div className="bg-card border border-border rounded-xl p-6 text-left min-w-[240px]">
                <span className="text-sm text-muted-foreground font-display">Early Bird</span>
                <div className="text-3xl font-display font-bold text-foreground mt-1">
                  R$ 890
                </div>
                <p className="text-xs text-muted-foreground mt-1 mb-4">até 30/Jun</p>
                <Button className="w-full bg-gradient-gold text-primary-foreground font-display font-semibold hover:opacity-90">
                  Comprar <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="bg-card border border-primary/30 rounded-xl p-6 text-left min-w-[240px] glow-gold">
                <span className="text-sm text-primary font-display font-semibold">Full Pass</span>
                <div className="text-3xl font-display font-bold text-foreground mt-1">
                  R$ 1.490
                </div>
                <p className="text-xs text-muted-foreground mt-1 mb-4">preço regular</p>
                <Button className="w-full bg-gradient-gold text-primary-foreground font-display font-semibold hover:opacity-90">
                  Comprar <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
