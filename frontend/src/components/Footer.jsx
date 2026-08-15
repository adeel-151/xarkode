import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { Mail, ArrowUpRight, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import { Container } from './ui.jsx';
import { Link } from 'react-router-dom';
import { brand, contactSocials, footerLinks, footerAddress } from '../data/content.js';

const socialIcons = {
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane,
  mail: Mail,
};

const columnIcons = {
  Services: Zap,
  Company: Globe,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-900 pt-16 sm:pt-20 overflow-hidden">
      {/* Top subtle border glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[200px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-flex items-center gap-2 font-display text-2xl font-extrabold text-white tracking-tight">
              <Sparkles className="text-brand-teal" size={24} />
              {brand.short}<span className="text-gradient">{brand.accent}</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-2">
              {brand.tagline}
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="relative max-w-sm mt-4">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] pl-5 pr-12 py-3 text-sm text-white placeholder:text-white/30 backdrop-blur transition-all focus:border-brand-teal/50 focus:bg-white/[0.04] focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-brand-teal to-brand-blue text-ink-900 transition-transform hover:scale-105 shadow-[0_0_15px_rgba(46,230,197,0.3)]"
              >
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </button>
            </form>
          </div>

          {/* Dynamic Columns: Links */}
          {Object.entries(footerLinks).map(([title, links]) => {
            const Icon = columnIcons[title] || ShieldCheck;
            return (
              <div key={title} className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.03] border border-white/5 shadow-inner">
                    <Icon size={14} className="text-brand-teal" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wider text-white">{title}</p>
                </div>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href} className="group inline-flex items-center gap-2 text-sm font-medium text-muted-2 transition-colors hover:text-brand-teal">
                        <span className="h-[1px] w-0 bg-brand-teal transition-all group-hover:w-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Column 4: Socials */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.03] border border-white/5 shadow-inner">
                <Mail size={14} className="text-brand-blue" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-white">Connect</p>
            </div>
            <ul className="flex flex-col gap-3">
              {contactSocials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 text-sm font-medium text-muted-2 transition-colors hover:text-white"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-white/50 transition-all group-hover:border-brand-teal/40 group-hover:bg-brand-teal/10 group-hover:text-brand-teal group-hover:shadow-[0_0_12px_rgba(46,230,197,0.2)]">
                        <Icon size={14} />
                      </div>
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-6 text-xs font-medium text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse" />
            <p>{footerAddress}</p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="#" className="transition-colors hover:text-brand-teal">Privacy</Link>
            <Link to="#" className="transition-colors hover:text-brand-teal">Terms</Link>
            <p className="text-white/30">© {year} {brand.name}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
