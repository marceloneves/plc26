import { motion } from "framer-motion";
import { Users, Lightbulb, Rocket, Trophy, MessageCircle, Zap } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Networking de Alto Nível",
    description: "Conecte-se com CPOs, VPs e Heads de Produto das maiores empresas da América Latina.",
  },
  {
    icon: Lightbulb,
    title: "Conteúdo Diferenciado",
    description: "Cases reais, frameworks exclusivos e insights que você não encontra em nenhum outro lugar.",
  },
  {
    icon: Rocket,
    title: "Aceleração de Carreira",
    description: "Mentoria, workshops práticos e conexões que impulsionam seu próximo passo profissional.",
  },
  {
    icon: MessageCircle,
    title: "Sessões Interativas",
    description: "Rodas de conversa, Q&A com speakers e dinâmicas que vão além da palestra tradicional.",
  },
  {
    icon: Trophy,
    title: "Certificado de Participação",
    description: "Reconhecimento oficial para fortalecer seu perfil e mostrar seu compromisso com excelência.",
  },
  {
    icon: Zap,
    title: "Acesso Exclusivo",
    description: "Comunidade privada pós-evento, materiais complementares e gravações das palestras.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            Por que participar
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Uma experiência<br />
            <span className="text-gradient-gold">transformadora</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
