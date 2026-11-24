import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section 
      className="bg-[#08070e] text-white py-24 sm:py-32 relative overflow-hidden border-t border-white/10"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 70% 60% at 50% 50%, rgba(112, 40, 224, 0.28) 0%, rgba(30, 10, 70, 0.15) 50%, transparent 80%)
        `,
      }}
    >
      {/* Ambient glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-40"
        style={{ background: 'radial-gradient(circle, #7028e0 0%, #3b0764 80%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.05] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#a78bfa] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
          <span>START YOUR DIGITAL TRANSFORMATION</span>
        </div>

        <h2 className="max-w-4xl mx-auto font-display font-semibold text-4xl sm:text-6xl md:text-7xl tracking-[-2.5px] uppercase text-white leading-[0.95]">
          READY TO BUILD <br />
          <span className="text-[#a78bfa]">YOUR DIGITAL FOUNDATION?</span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-white/70 font-normal leading-relaxed">
          From custom web applications and multi-tenant SaaS architectures to autonomous AI workflow automations, XarKode engineers systems that scale.
        </p>
        
        {/* Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 rounded-none bg-white px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-neutral-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </Link>

          <a
            href="https://wa.me/923015355509"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-none border border-emerald-500/40 bg-emerald-500/10 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/60"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            <span>Chat on WhatsApp (+92 301 5355509) ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
