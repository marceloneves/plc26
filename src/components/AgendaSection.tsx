import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const agenda = [
  { time: "09:00", title: "Abertura & Keynote", speaker: "Ana Ribeiro", tag: "Keynote" },
  { time: "10:30", title: "Product-Led Growth em escala", speaker: "Carlos Mendes", tag: "Palestra" },
  { time: "12:00", title: "Almoço & Networking", speaker: "", tag: "Networking" },
  { time: "13:30", title: "AI-First Product Strategy", speaker: "Rafael Costa", tag: "Palestra" },
  { time: "14:30", title: "Discovery que gera impacto", speaker: "Juliana Torres", tag: "Workshop" },
  { time: "16:00", title: "Painel: O futuro do PM no Brasil", speaker: "Vários speakers", tag: "Painel" },
  { time: "17:00", title: "De PM a CPO: carreira em produto", speaker: "Pedro Almeida", tag: "Fireside Chat" },
  { time: "18:00", title: "Encerramento & Happy Hour", speaker: "", tag: "Networking" },
];

const AgendaItem = ({ item, index }: { item: typeof agenda[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="flex gap-6 py-5 border-b border-border last:border-0 group"
  >
    <div className="flex items-center gap-2 text-muted-foreground min-w-[80px]">
      <Clock className="w-4 h-4" />
      <span className="font-display font-medium text-sm">{item.time}</span>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-1">
        <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-display font-medium">
          {item.tag}
        </span>
      </div>
      {item.speaker && (
        <p className="text-sm text-muted-foreground">{item.speaker}</p>
      )}
    </div>
  </motion.div>
);

const AgendaSection = () => {
  return (
    <section id="agenda" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            Programação
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Um dia de<br />
            <span className="text-gradient-gold">conteúdo intenso</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl">
          <h3 className="font-display text-xl font-bold text-primary mb-6">4 de Setembro, 2026</h3>
          <div>
            {agenda.map((item, i) => (
              <AgendaItem key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
