import { motion } from "framer-motion";

const speakers = [
  { name: "Ana Ribeiro", role: "VP of Product", company: "Nubank", initials: "AR" },
  { name: "Carlos Mendes", role: "CPO", company: "iFood", initials: "CM" },
  { name: "Juliana Torres", role: "Head of Product", company: "Mercado Livre", initials: "JT" },
  { name: "Rafael Costa", role: "Director of PM", company: "VTEX", initials: "RC" },
  { name: "Marina Silva", role: "SVP Product", company: "Globo", initials: "MS" },
  { name: "Pedro Almeida", role: "CPO", company: "Loft", initials: "PA" },
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
            Speakers
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Quem estará<br />
            <span className="text-gradient-gold">no palco</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-5">
                <span className="font-display font-bold text-lg text-primary-foreground">
                  {speaker.initials}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {speaker.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {speaker.role}
              </p>
              <p className="text-primary font-display font-medium text-sm mt-1">
                {speaker.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
