import { ArrowUpRight } from 'lucide-react';
import { Container, Reveal, Badge } from './ui.jsx';
import { portfolio, portfolioLogos } from '../data/content.js';
import CountUp from './CountUp.jsx';
import { Link } from 'react-router-dom';

function parseStat(str) {
  const match = str.match(/^([+\-]?)(\d+)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: str };
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
}

export default function Portfolio({ hideCta = false }) {
  const doubledLogos = [...portfolioLogos, ...portfolioLogos];

  return (
    <section id="portfolio" className="bg-ink-900 py-24 sm:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge className="!bg-brand-teal/10 !border-brand-teal/30 !text-brand-teal font-bold">Our Work</Badge>
          <h2 className="mt-5 font-display text-4xl font-extrabold text-white sm:text-5xl">
            Real <span className="text-gradient">Results</span>
          </h2>
          <p className="mt-4 text-sm text-muted-2 sm:text-base max-w-lg mx-auto">
            Explore the outcomes we&rsquo;ve delivered for clients across digital growth, automation, and infrastructure.
          </p>
        </Reveal>

        {/* Cinematic Case Study Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {portfolio.map((project, i) => {
            const stat = parseStat(project.statValue);
            return (
              <Reveal key={project.client} delay={i * 0.1}>
                <Link to={`/work/${project.id}`} className="group block relative h-[450px] sm:h-[500px] w-full overflow-hidden rounded-[2.5rem] bg-ink-800">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.client}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Cinematic Gradients */}
                    <div className="absolute inset-0 bg-ink-900/60 mix-blend-multiply transition-opacity group-hover:opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10">
                    {/* Top row: Client name & Date */}
                    <div className="flex items-center justify-between z-10">
                      <div className="glass-card-strong px-4 py-2 rounded-full backdrop-blur-md">
                        <p className="font-display text-sm font-extrabold tracking-widest text-white uppercase">
                          {project.client}
                        </p>
                      </div>
                      <p className="text-xs font-semibold text-white/60 tracking-wider uppercase">{project.date}</p>
                    </div>

                    {/* Bottom row: Description & Stats */}
                    <div className="z-10 flex flex-col gap-6">
                      <p className="text-base sm:text-lg leading-relaxed text-white/90 max-w-md font-medium">
                        {project.description}
                      </p>
                      
                      {/* Glass Stat Box */}
                      <div className="glass-card-strong relative overflow-hidden rounded-2xl px-6 py-5 flex items-center justify-between border border-white/10 group-hover:border-brand-teal/30 transition-colors">
                        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-teal/20 blur-2xl transition-opacity group-hover:opacity-100 opacity-50" />
                        <span className="font-display text-3xl font-extrabold text-white">
                          <CountUp
                            end={stat.number}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            duration={2200 + i * 200}
                          />
                        </span>
                        <div className="flex flex-col items-end">
                          <span className="max-w-[12rem] text-right text-xs leading-snug text-white/70 uppercase tracking-widest font-semibold mb-1">
                            {project.statLabel}
                          </span>
                          <ArrowUpRight className="text-brand-teal h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Divider + CTA */}
        {!hideCta && (
          <Reveal className="mt-16 flex flex-col items-center gap-6 border-t border-white/10 pt-10 sm:flex-row sm:justify-between">
            <p className="text-sm font-medium text-muted-2">Trusted by 20+ scaling companies worldwide.</p>
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-brand-teal"
            >
              View Full Portfolio
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        )}

        {/* Dark Infinite Marquee */}
        <div className="mt-12 overflow-hidden mask-edges">
          <div className="marquee-track">
            {doubledLogos.map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-center text-xs font-extrabold uppercase tracking-widest text-white/40 transition-all duration-300 hover:border-brand-teal/30 hover:text-brand-teal hover:bg-brand-teal/5 sm:h-20 sm:w-40"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
