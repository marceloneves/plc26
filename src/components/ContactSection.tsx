import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      toast({ title: "E-mail inválido", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    // Simula envio
    setTimeout(() => {
      toast({ title: "Mensagem enviada!", description: "Retornaremos em breve." });
      setForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-24 bg-card/30 border-t border-border">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
            <Mail className="w-4 h-4" />
            Fale Conosco
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Entre em <span className="text-gradient-gold">Contato</span>
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              placeholder="Seu nome"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary/50 border-border"
            />
            <Input
              type="email"
              placeholder="Seu e-mail"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary/50 border-border"
            />
          </div>
          <Textarea
            placeholder="Sua mensagem..."
            maxLength={1000}
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-secondary/50 border-border resize-none"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold"
            size="lg"
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            <Send className="w-4 h-4 ml-2" />
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
