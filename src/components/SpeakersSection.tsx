import { motion } from "framer-motion";
import fotoMarceloNeves from "@/assets/foto-marcelo-neves.webp";

const speakers = [
  { name: "Marcelo Neves", role: "", company: "Canal Valor", city: "", topic: "Um pioneiro na área de produtos digitais, com mais de 30 anos de experiência no mercado. Atuante e influente, tem sido o Mentor de mais de 1.350 profissionais, capacitando essas pessoas como excelentes Líderes de Produtos Digitais, ou como ele gosta de dizer: Líderes de Produtos Digitais Casca Grossa.", initials: "MN", photo: fotoMarceloNeves },
  { name: "À definir", role: "À definir", company: "", city: "", topic: "À definir", initials: "?" },
  { name: "À definir", role: "À definir", company: "", city: "", topic: "À definir", initials: "?" },
  { name: "À definir", role: "À definir", company: "", city: "", topic: "À definir", initials: "?" },
  { name: "À definir", role: "À definir", company: "", city: "", topic: "À definir", initials: "?" },
  { name: "À definir", role: "À definir", company: "", city: "", topic: "À definir", initials: "?" },
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
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Quem Estará <span className="text-gradient-gold">No Palco</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center mb-5 overflow-hidden">
                {"photo" in speaker && speaker.photo ? (
                  <img src={speaker.photo} alt={speaker.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-display font-bold text-2xl text-primary-foreground">
                    {speaker.initials}
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-0.5">
                {speaker.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{speaker.city}</p>
              <p className="text-primary font-display font-semibold text-sm mb-1">
                {speaker.role}{speaker.company ? `, ${speaker.company}` : ""}
              </p>
              <p className="text-muted-foreground text-sm mt-3 pt-3 border-t border-border">
                {speaker.topic}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
