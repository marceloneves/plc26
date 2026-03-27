import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const organizers = [
  {
    name: "Canal Valor",
    description: "Conteúdo e comunidade para profissionais de produto e negócios digitais.",
    initials: "CV",
  },
  {
    name: "Valor Produtos Digitais",
    description: "Consultoria e aceleração de produtos digitais de alta performance.",
    initials: "VPD",
  },
];

const OrganizationSection = () => {
  return (
    <section id="organizacao" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
            <Building2 className="w-4 h-4" />
            Quem faz acontecer
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            <span className="text-gradient-gold">Organização</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {organizers.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-gold mx-auto mb-5 flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                {org.initials}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {org.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {org.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
