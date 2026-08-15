import { useRef, useCallback } from 'react';
import { TrendingUp, Bot, Cpu, CheckCircle2 } from 'lucide-react';
import { Container, Reveal, Badge } from './ui.jsx';
import { services } from '../data/content.js';

const serviceIcons = {
  'digital-growth': TrendingUp,
  'ai-systems': Bot,
  'smart-business': Cpu,
};

const serviceGradients = [
  'linear-gradient(135deg, rgba(46,230,197,0.12), rgba(59,130,246,0.08))',
  'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.08))',
  'linear-gradient(135deg, rgba(139,92,246,0.10), rgba(46,230,197,0.08))',
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const Icon = serviceIcons[service.key] || TrendingUp;

  return (
    <Reveal
      delay={index * 0.1}
      className="group"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="cursor-glow glow-border relative h-full rounded-3xl glass-card-strong p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_rgba(46,230,197,0.15)]"
      >
        {/* Icon */}
        <span
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: serviceGradients[index] }}
        >
          <Icon size={22} className="text-brand-teal" strokeWidth={2} />
        </span>

        {/* Service name */}
        <h3
          className="font-display text-lg font-extrabold"
          style={
            index === 0
              ? {
                  backgroundImage: 'linear-gradient(90deg,#2ee6c5,#3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }
              : { color: '#fff' }
          }
        >
          {service.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted">We offer:</p>
        <ul className="mt-3 flex flex-col gap-2">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm text-white/90 transition-colors hover:border-brand-teal/30 hover:bg-brand-teal/5"
            >
              <CheckCircle2 size={14} className="shrink-0 text-brand-teal/60" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-ink-800 py-16 sm:py-24 border-y border-ink-600">
      <Container>
        <Reveal>
          {/* Header row */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              See What
              <br />
              We Offer
            </h2>
            <div className="flex flex-col items-start gap-3 sm:max-w-[17rem] sm:items-end sm:text-right">
              <Badge className="!bg-brand-teal !border-brand-teal !text-ink-900 font-bold">Services</Badge>
              <p className="text-sm leading-relaxed text-muted-2">
                We don&rsquo;t just build websites; we build the infrastructure that helps your business grow and run itself.
              </p>
            </div>
          </div>

          {/* Services list */}
          <div className="mt-12 sm:mt-16">
            <ul className="flex flex-col border-t border-white/10">
              {services.map((service, i) => (
                <li
                  key={service.key}
                  className="group relative flex flex-col items-start justify-between border-b border-white/10 py-6 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-center sm:py-8 lg:py-10"
                >
                  <div className="mb-4 flex flex-col sm:mb-0 sm:flex-row sm:items-center gap-4 sm:gap-12">
                    <span className="font-display text-lg font-bold text-brand-teal sm:text-xl">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
                        {service.name}
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-muted-2 sm:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3 sm:items-end">
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
