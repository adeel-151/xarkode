import { ArrowUpRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Reveal } from './ui.jsx';
import { globalCta } from '../data/content.js';

export default function CTA() {
  return (
    <section className="bg-ink-900 py-32 sm:py-40 relative overflow-hidden">
      {/* Massive radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            {/* Top glowing icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 mb-8 shadow-[0_0_40px_rgba(46,230,197,0.2)]">
              <Zap size={28} className="text-brand-teal" />
            </div>

            <h2 className="max-w-4xl font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Ready to <span className="text-gradient">Scale</span> Your Business?
            </h2>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl font-medium text-muted-2">
              {globalCta.subtext}
            </p>
            
            <Link
              to={globalCta.buttonLink}
              className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue p-[2px] text-sm font-extrabold text-white shadow-[0_0_60px_-15px_rgba(46,230,197,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_-15px_rgba(46,230,197,0.7)]"
            >
              <div className="flex h-full w-full items-center gap-3 rounded-full bg-ink-900 px-8 py-4 transition-colors group-hover:bg-transparent group-hover:text-ink-900">
                {globalCta.buttonText}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-ink-900/10">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
