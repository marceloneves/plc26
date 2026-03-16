import { motion } from "framer-motion";

const blocks = [
  {
    label: "BLOCO 1 — FUNDAMENTOS DE LIDERANÇA",
    color: "text-primary",
    items: [
      { time: "08:30", title: "Credenciamento", speaker: "Recepção dos participantes" },
      { time: "09:00", title: "Abertura & Keynote", speaker: "Ana Ribeiro — VP of Product, Nubank" },
      { time: "10:00", title: "Product-Led Growth em Escala", speaker: "Carlos Mendes — CPO, iFood" },
      { time: "11:00", title: "Discovery que Gera Impacto Real", speaker: "Juliana Torres — Head of Product, Mercado Livre" },
      { time: "12:00", title: "Almoço & Networking", speaker: "Intervalo de 01:30h" },
    ],
  },
  {
    label: "BLOCO 2 — EXECUÇÃO E ESTRATÉGIA",
    color: "text-accent",
    items: [
      { time: "13:30", title: "AI-First Product Strategy", speaker: "Rafael Costa — Director of PM, VTEX" },
      { time: "14:30", title: "De Métricas de Vaidade a Impacto Real", speaker: "Marina Silva — SVP Product, Globo" },
      { time: "15:30", title: "Painel: O Futuro do PM no Brasil", speaker: "Múltiplos speakers" },
      { time: "16:30", title: "Coffee Break", speaker: "Intervalo" },
    ],
  },
  {
    label: "BLOCO 3 — ESCALA E CARREIRA",
    color: "text-primary",
    items: [
      { time: "17:00", title: "De PM a CPO: Carreira em Produto", speaker: "Pedro Almeida — CPO, Loft" },
      { time: "18:00", title: "Fireside Chat: Construindo o Futuro", speaker: "Convidados especiais" },
      { time: "18:45", title: "Encerramento & Happy Hour", speaker: "Networking e celebração" },
    ],
  },
];

const AgendaSection = () => {
  return (
    <section id="agenda" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            Pré-Cronograma Oficial
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Programação <span className="text-gradient-gold">Completa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O valor muda conforme os lotes avançam. Quem entra antes, paga menos.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10">
          {blocks.map((block, bi) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: bi * 0.15 }}
            >
              <div className={`font-display text-sm font-bold tracking-widest uppercase mb-4 ${block.color}`}>
                {block.label}
              </div>
              <div className="space-y-0">
                {block.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 py-5 border-b border-border last:border-0 group"
                  >
                    <div className="min-w-[60px] font-display font-bold text-primary text-lg">
                      {item.time}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.speaker}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
