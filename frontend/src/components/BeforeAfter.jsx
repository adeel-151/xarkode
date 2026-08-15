import { Globe, RefreshCw, LayoutGrid, TrendingUp, Sparkles, BarChart3 } from 'lucide-react';
import { Container, Reveal, Badge, Button } from './ui.jsx';
import { beforeAfter, beforeAfterCta } from '../data/content.js';

const icons = {
  globe: Globe,
  refresh: RefreshCw,
  layout: LayoutGrid,
  'trending-up': TrendingUp,
  sparkles: Sparkles,
  'bar-chart': BarChart3,
};

function IconChip({ name, tone }) {
  const Icon = icons[name];
  if (!Icon) return null;
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
        tone === 'after'
          ? 'text-ink-900'
          : 'bg-ink-700 text-muted-2'
      }`}
      style={
        tone === 'after'
          ? { background: 'linear-gradient(135deg,#2ee6c5,#3b82f6)' }
          : undefined
      }
    >
      <Icon size={17} strokeWidth={2.2} />
    </span>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-ink-800 py-16 sm:py-24 border-y border-ink-600">
      <Container>
        <Reveal>
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center">
              <Badge className="!bg-brand-teal !border-brand-teal !text-ink-900 font-bold">Before/after</Badge>
            </div>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl">
              What Changes When You Work With Us
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-2 sm:text-base">
              We don&rsquo;t just deliver services — we transform how your business operates, grows, and competes in the digital world.
            </p>
          </div>

          {/* Rows */}
          <div className="mt-10 flex flex-col gap-4">
            {beforeAfter.map((row, i) => (
              <Reveal
                key={row.before}
                delay={i * 0.08}
                className="flex flex-col gap-4 rounded-2xl border border-ink-600 bg-ink-700/40 p-5 sm:flex-row sm:items-center"
              >
                {/* Before */}
                <div className="flex items-center gap-3">
                  <IconChip name={row.beforeIcon} tone="before" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Before</p>
                    <p className="text-sm text-muted-2">{row.before}</p>
                  </div>
                </div>

                {/* Dashed connector */}
                <div className="hidden flex-1 items-center sm:flex">
                  <svg width="100%" height="20" viewBox="0 0 200 20" className="text-ink-500" preserveAspectRatio="none">
                    <line
                      x1="0"
                      y1="10"
                      x2="190"
                      y2="10"
                      stroke="currentColor"
                      strokeDasharray="5 5"
                      strokeWidth="1"
                    />
                    <polygon points="194,5 200,10 194,15" fill="currentColor" />
                  </svg>
                </div>

                {/* After */}
                <div className="flex items-center gap-3 sm:justify-end">
                  <div className="sm:text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">After</p>
                    <p className="text-sm font-semibold text-white">{row.after}</p>
                  </div>
                  <IconChip name={row.afterIcon} tone="after" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* White CTA card */}
          <Reveal className="mt-8 flex flex-col gap-6 rounded-2xl bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-3">
              <Avatar name="Robert Williams" size={42} />
              <div>
                <h3 className="font-display text-lg font-extrabold text-ink-900 sm:text-xl">
                  {beforeAfterCta.heading}
                </h3>
                <p className="mt-1 text-sm text-ink-500">Robert Williams — CEO of XarKode</p>
              </div>
            </div>
            <div className="sm:min-w-[220px] sm:text-right">
              <p className="text-xs leading-relaxed text-ink-500">{beforeAfterCta.description}</p>
              <div className="mt-4 flex sm:justify-end">
                <Button href="#contact" variant="fill" icon>
                  Contact Us
                </Button>
              </div>
            </div>
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}

function Avatar({ name, size = 40 }) {
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span
      style={{ width: size, height: size, background: 'linear-gradient(135deg,#2ee6c5,#3b82f6)' }}
      className="flex shrink-0 items-center justify-center rounded-full text-xs font-bold text-ink-900"
    >
      {initials}
    </span>
  );
}
