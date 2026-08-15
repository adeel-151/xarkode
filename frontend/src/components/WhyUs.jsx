import { CheckCircle2, XCircle } from 'lucide-react';
import { Container, Reveal, Badge } from './ui.jsx';
import { comparisonFeatures, brand } from '../data/content.js';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 sm:py-28" style={{ background: 'linear-gradient(135deg,#2ee6c5,#3b82f6)' }}>
      <Container>
        {/* Header */}
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-sm font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Find out why you should choose us.
          </h2>
          <div className="flex flex-col gap-3 sm:items-end sm:text-right">
            <Badge className="!border-white/30 !bg-white/20 !text-white font-semibold">
              Why {brand.name}
            </Badge>
            <p className="max-w-[15rem] text-sm text-ink-900/75">
              See how we compare to typical agencies — and why it matters for your business.
            </p>
          </div>
        </Reveal>

        {/* Comparison table */}
        <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-24px_rgba(10,14,19,0.35)]">
          {/* Table header */}
          <div className="hidden grid-cols-3 border-b border-paper-line sm:grid">
            <p className="p-5 text-sm font-bold text-ink-900">Features</p>
            <p className="border-l border-paper-line p-5 text-sm font-bold text-ink-500">Other Agencies</p>
            <p
              className="p-5 text-sm font-bold text-ink-900"
              style={{
                borderLeft: '2px solid #2ee6c5',
                background: 'linear-gradient(90deg, rgba(46,230,197,0.06), transparent)',
              }}
            >
              {brand.name} ✨
            </p>
          </div>

          {comparisonFeatures.map((row, i) => (
            <div
              key={row.feature}
              className="group grid grid-cols-1 gap-3 border-b border-paper-line p-5 transition-colors last:border-b-0 hover:bg-gray-50/80 sm:grid-cols-3 sm:gap-0 sm:p-0"
            >
              <p className="text-sm font-semibold text-ink-900 sm:flex sm:items-center sm:p-5">
                {row.feature}
              </p>
              <div className="flex items-start gap-2 sm:items-center sm:border-l sm:border-paper-line sm:p-5">
                <XCircle size={15} className="mt-0.5 shrink-0 text-red-400 sm:mt-0" />
                <p className="text-sm text-ink-500">{row.others}</p>
              </div>
              <div
                className="flex items-start gap-2 sm:items-center sm:p-5"
                style={{
                  borderLeft: '2px solid #2ee6c5',
                  background: 'linear-gradient(90deg, rgba(46,230,197,0.04), transparent)',
                }}
              >
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-500 sm:mt-0" />
                <p className="text-sm font-medium text-ink-900">{row.us}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
