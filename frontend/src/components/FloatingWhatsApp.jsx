import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/923015355509"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with XarKode on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-none bg-[#25D366] text-white border border-emerald-300/40 shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#25D366] opacity-30" />
        <MessageCircle size={26} className="relative z-10 fill-white text-[#25D366]" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-none bg-[#08070e] border border-white/20 px-3 py-1.5 text-xs font-mono font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          Chat on WhatsApp ↗
        </span>
      </a>
    </aside>
  );
}
