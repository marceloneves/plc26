import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-2xl font-bold text-foreground">
              PLC<span className="text-gradient-gold">'26</span>
            </span>
            <p className="text-sm text-muted-foreground mt-1">Product Leadership Conference</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/codigo-de-conduta" className="hover:text-foreground transition-colors">Código de Conduta</Link>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
            <Link to="/privacidade" className="hover:text-foreground transition-colors">Privacidade</Link>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 PLC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
