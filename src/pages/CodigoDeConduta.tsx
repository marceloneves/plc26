import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CodigoDeConduta = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>

        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Código de <span className="text-gradient-gold">Conduta</span>
        </h1>
        <p className="text-muted-foreground mb-12">Última atualização: Março de 2026</p>

        <div className="space-y-8 text-secondary-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Nosso Compromisso</h2>
            <p>
              A PLC'26 é dedicada a proporcionar uma experiência de conferência livre de assédio para
              todos, independentemente de gênero, identidade e expressão de gênero, idade, orientação
              sexual, deficiência, aparência física, tamanho corporal, raça, etnia, religião (ou falta
              dela), ou escolhas tecnológicas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Comportamento Esperado</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Seja respeitoso com os diferentes pontos de vista e experiências</li>
              <li>Aceite críticas construtivas com elegância</li>
              <li>Concentre-se no que é melhor para a comunidade</li>
              <li>Mostre empatia para com outros participantes</li>
              <li>Use linguagem acolhedora e inclusiva</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Comportamento Inaceitável</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Uso de linguagem ou imagens sexualizadas e atenção sexual indesejada</li>
              <li>Comentários insultuosos/depreciativos e ataques pessoais ou políticos</li>
              <li>Assédio público ou privado</li>
              <li>Publicar informações privadas de outros sem permissão explícita</li>
              <li>Outra conduta que possa razoavelmente ser considerada inadequada em um ambiente profissional</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Consequências</h2>
            <p>
              Os organizadores da conferência podem tomar qualquer ação que considerem apropriada,
              incluindo advertência ou expulsão da conferência sem reembolso. Participantes que
              violarem estas regras poderão ser banidos de eventos futuros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Denúncias</h2>
            <p>
              Se você for vítima ou testemunhar comportamento inaceitável, ou tiver qualquer outra
              preocupação, por favor entre em contato com a organização o mais rápido possível pelo
              e-mail{" "}
              <a href="mailto:contato@plconf.com.br" className="text-primary hover:underline">
                contato@plconf.com.br
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CodigoDeConduta;
