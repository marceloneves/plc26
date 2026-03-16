import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section id="register" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Garanta seu <span className="text-gradient-gold">INGRESSO</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O valor muda conforme os lotes avançam. Quem entra antes, paga menos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {/* Lote Promocional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl bg-card border border-primary/40 glow-gold relative"
          >
            <span className="absolute -top-3 left-6 bg-gradient-gold text-primary-foreground text-xs font-display font-bold px-3 py-1 rounded-full">
              MELHOR PREÇO
            </span>
            <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-2">Lote Promocional</h3>
            <p className="text-xs text-muted-foreground mb-3">Presencial</p>
            <div className="text-4xl font-display font-bold text-foreground mb-1">R$ 890</div>
            <p className="text-xs text-muted-foreground mb-5">Somente 100 vagas</p>
            <Button className="w-full bg-gradient-gold text-primary-foreground font-display font-bold hover:opacity-90">
              COMPRAR AGORA <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              <li>• Um dia inteiro de conteúdo</li>
              <li>• Networking estratégico presencial</li>
              <li>• Certificado de participação</li>
            </ul>
          </motion.div>

          {/* Streaming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <h3 className="font-display text-sm font-bold text-accent uppercase tracking-wider mb-2">Streaming</h3>
            <p className="text-xs text-muted-foreground mb-3">Assista de qualquer lugar</p>
            <div className="text-4xl font-display font-bold text-foreground mb-1">R$ 490</div>
            <p className="text-xs text-muted-foreground mb-5">Acesso online</p>
            <Button variant="outline" className="w-full border-accent/30 text-foreground font-display font-semibold hover:bg-accent/10">
              COMPRAR AGORA <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              <li>• Um dia inteiro de conteúdo</li>
              <li>• Certificado digital</li>
            </ul>
          </motion.div>

          {/* 2º Lote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 rounded-2xl bg-card border border-border opacity-60"
          >
            <h3 className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">2º Lote</h3>
            <p className="text-xs text-muted-foreground mb-3">Presencial</p>
            <div className="text-4xl font-display font-bold text-foreground mb-1">R$ 1.290</div>
            <p className="text-xs text-muted-foreground mb-5">Em breve</p>
            <Button variant="outline" className="w-full font-display font-semibold" disabled>
              EM BREVE
            </Button>
          </motion.div>

          {/* 3º Lote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 rounded-2xl bg-card border border-border opacity-60"
          >
            <h3 className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">3º Lote</h3>
            <p className="text-xs text-muted-foreground mb-3">Preço final</p>
            <div className="text-4xl font-display font-bold text-foreground mb-1">R$ 1.890</div>
            <p className="text-xs text-muted-foreground mb-5">Preço final</p>
            <Button variant="outline" className="w-full font-display font-semibold" disabled>
              EM BREVE
            </Button>
          </motion.div>
        </div>

        {/* Security badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 text-muted-foreground"
        >
          <Shield className="w-5 h-5 text-primary" />
          <p className="text-sm font-display">
            COMPRA 100% SEGURA — Ambiente criptografado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
