import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacidade = () => {
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
          Política de <span className="text-gradient-gold">Privacidade</span>
        </h1>
        <p className="text-muted-foreground mb-12">Última atualização: Março de 2026</p>

        <div className="space-y-8 text-secondary-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Informações Coletadas</h2>
            <p>
              Coletamos informações pessoais que você nos fornece diretamente, como nome, e-mail e
              dados de pagamento ao adquirir ingressos para a PLC'26. Também podemos coletar
              informações automaticamente quando você visita nosso site, como endereço IP, tipo de
              navegador e páginas visitadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Uso das Informações</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Processar sua inscrição e pagamento do ingresso</li>
              <li>Enviar comunicações relacionadas ao evento</li>
              <li>Melhorar nosso site e experiência do evento</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Compartilhamento de Dados</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para
              fins de marketing. Podemos compartilhar dados com prestadores de serviços que nos
              auxiliam na operação do evento, sempre sob acordos de confidencialidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas
              informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Seus Direitos (LGPD)</h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar,
              corrigir, excluir ou portar seus dados pessoais. Para exercer esses direitos, entre em
              contato pelo e-mail{" "}
              <a href="mailto:contato@plconf.com" className="text-primary hover:underline">
                contato@plconf.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Cookies</h2>
            <p>
              Nosso site utiliza cookies para melhorar a experiência de navegação. Você pode
              configurar seu navegador para recusar cookies, embora isso possa afetar a
              funcionalidade do site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacidade;
