import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import XarKodeLogo from './XarKodeLogo.jsx';

export default function Footer() {
  return (
    <footer className="bg-[#08070e] text-white pt-12 pb-8 sm:pt-20 sm:pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4 text-xs font-mono tracking-widest text-white/50 uppercase mb-8 sm:mb-16">
          <div className="flex items-center gap-6">
            <span className="font-bold text-white">12</span>
            <span>XARKODE / DIGITAL SOLUTIONS STUDIO</span>
          </div>
          <div>AI • SOFTWARE • GROWTH</div>
        </div>

        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-16">
          {/* Brand & Studio Mission (Col 1) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" aria-label="XarKode Home">
              <XarKodeLogo showText={true} className="w-8 h-8" textClassName="text-2xl" />
            </Link>

            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              XarKode is a premium digital agency that builds the foundation beneath your digital growth. We engineer digital ecosystems that actively drive growth, automate workflows, and scale your business to new heights.
            </p>

            {/* Direct Contact */}
            <div className="space-y-2 pt-2 text-xs font-mono text-white/80">
              <a
                href="mailto:xarkodesolutions@gmail.com"
                className="flex items-center gap-2 hover:text-[#8b5cf6] transition-colors"
              >
                <Mail size={14} className="text-purple-400" />
                <span>xarkodesolutions@gmail.com</span>
              </a>

              <a
                href="https://wa.me/923015355509"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Phone size={14} className="text-emerald-400" />
                <span>+92 301 5355509 on WhatsApp ↗</span>
              </a>

              <a
                href="tel:+923015355509"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-purple-400" />
                <span>0301 5355509</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 text-xs font-mono text-white/50 space-y-1">
              <div className="uppercase tracking-wider font-bold text-white/30 text-[10px]">SOCIAL</div>
              <div>
                <a
                  href="https://instagram.com/xar_kode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  Instagram <span className="text-white/80">@xar_kode</span>
                </a>
              </div>
              <div>
                <a
                  href="https://facebook.com/xarkode.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  Facebook <span className="text-white/80">@xarkode.official</span>
                </a>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 font-bold">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web & App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  SaaS Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI & Automations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Graphic & UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Digital Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 font-bold">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Watermark Typography at bottom */}
        <div className="pt-8 sm:pt-12 pb-4 sm:pb-6 border-t border-white/5 select-none overflow-hidden text-center">
          <div className="font-display font-black text-[15vw] sm:text-[18vw] leading-none tracking-tighter text-white/[0.07] uppercase">
            XARKODE
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-widest text-white/40">
          <div>AI • SOFTWARE • GROWTH</div>
          <div>© 2026 XARKODE. ALL RIGHTS RESERVED.</div>
          <div>DESIGNED AND DEVELOPED BY XARKODE</div>
        </div>
      </div>
    </footer>
  );
}
