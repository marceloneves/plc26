import { motion } from "framer-motion";
import { Target, Repeat, TrendingUp } from "lucide-react";

const blocks = [
  {
    number: "1",
    icon: Target,
    title: "Aquisição de Talentos & Impacto",
    subtitle: "Construa times de produto de alto desempenho",
    items: [
      "Estratégias de recrutamento e retenção de PMs",
      "Frameworks de product discovery que geram resultado",
      "Como medir e comunicar impacto de produto",
    ],
  },
  {
    number: "2",
    icon: Repeat,
    title: "Entrega e Cultura",
    subtitle: "Crie processos que escalam com qualidade",
    items: [
      "Rituais de produto que funcionam de verdade",
      "Gestão de stakeholders e alinhamento estratégico",
      "Culture code de times de produto de elite",
    ],
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Escala com Previsibilidade",
    subtitle: "Cresça sem perder a essência",
    items: [
      "Product-Led Growth na prática",
      "Estrutura organizacional para escalar produto",
      "De PM a CPO: carreira e liderança",
    ],
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-display font-semibold mb-6">
            <span>Um dia de conteúdo</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>Evento Presencial</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            O Que Você Vai <span className="text-gradient-gold">Dominar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Este não é mais um evento. É um dia de construção real. O PLC entrega o sistema completo.
          </p>
        </motion.div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <block.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-primary font-display font-bold">BLOCO {block.number}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{block.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{block.subtitle}</p>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Agenda Estratégica */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            Agenda Estratégica
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            OS 3 BLOCOS <span className="text-gradient-gold">DO EVENTO</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
