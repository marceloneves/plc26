import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O evento é presencial?",
    answer: "Sim. O PLC'26 é 100% presencial em São Paulo – SP, projetado para imersão total e networking de alto nível. Não haverá transmissão por streaming.",
  },
  {
    question: "Preciso ser líder de produto para participar?",
    answer: "Não necessariamente. O conteúdo é voltado para quem já atua ou quer atuar em liderança de produto. PMs, GPMs, Heads, VPs e fundadores terão máximo aproveitamento.",
  },
  {
    question: "Vou sair com algo prático?",
    answer: "Sim. O objetivo é entregar frameworks, cases e conexões que você pode aplicar imediatamente na sua operação de produto.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos cartão de crédito (com possibilidade de parcelamento), PIX e boleto bancário. Após a confirmação do pagamento, você receberá o ingresso por e-mail.",
  },
  {
    question: "Existe algum desconto especial para compras em grupo?",
    answer: "Sim! Oferecemos desconto para grupos a partir de 3 pessoas da mesma empresa. Esse benefício não se aplica aos 30 primeiros ingressos promocionais. Entre em contato pelo e-mail contato@plconf.com para saber mais.",
  },
  {
    question: "Como recebo meu ingresso?",
    answer: "Após a confirmação da compra, você receberá um e-mail com o ingresso e acesso ao grupo exclusivo de participantes.",
  },
  {
    question: "Qual a política de cancelamento?",
    answer: "Cancelamentos com reembolso integral podem ser feitos até 7 dias após a compra. Após esse prazo, é possível transferir o ingresso para outra pessoa.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-display font-semibold text-foreground hover:text-primary text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
