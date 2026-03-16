import { Rocket } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-gold text-primary-foreground py-3 px-4 text-center text-sm font-display font-semibold tracking-wide">
      <div className="flex items-center justify-center gap-2">
        <Rocket className="w-4 h-4" />
        <span>LOTE PROMOCIONAL LIBERADO — 4 DE SETEMBRO DE 2026</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
