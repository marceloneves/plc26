import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511914274694";
  const url = `https://api.whatsapp.com/?phone=${phoneNumber}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
