import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forWho = [
  "Líderes de produto (PMs, GPMs, Heads, VPs, CPOs)",
  "Fundadores e C-levels de empresas de tecnologia",
  "Profissionais que querem liderar times de produto",
  "Quem quer construir carreira sólida em produto",
  "Quem busca networking com decisores do mercado",
];

const notForWho = [
  "Quem busca fórmula mágica sem esforço",
  "Curiosos que não aplicam nada",
  "Quem está satisfeito com resultados medíocres",
];

const ForWhoSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Para quem <span className="text-primary">é</span>
            </h3>
            <ul className="space-y-4">
              {forWho.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-destructive/20"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Para quem <span className="text-destructive">NÃO é</span>
            </h3>
            <ul className="space-y-4">
              {notForWho.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-12 font-display"
        >
          Se você quer parar de consumir conteúdo genérico e começar a construir liderança de produto de verdade, o <span className="text-primary font-semibold">PLC</span> é o seu lugar.
        </motion.p>
      </div>
    </section>
  );
};

export default ForWhoSection;
