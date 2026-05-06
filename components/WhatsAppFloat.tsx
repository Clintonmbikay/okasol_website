import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href="#"
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Écrire sur WhatsApp"
    >
      <div className="w-14 h-14 rounded-full bg-[#1A1614] border border-[#C9A96E] flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:bg-[#C9A96E] group-hover:scale-105">
        <MessageCircle
          className="w-5 h-5 text-[#C9A96E] group-hover:text-[#1A1614] transition-colors"
          strokeWidth={1.5}
        />
      </div>
      <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] tracking-[0.22em] text-[#C9A96E] bg-[#1A1614]/90 backdrop-blur-sm border border-[#2B2622] px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ÉCRIRE SUR WHATSAPP
      </div>
    </a>
  );
}