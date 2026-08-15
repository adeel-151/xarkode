import { motion } from 'framer-motion';
import { Users, FolderKanban, Star } from 'lucide-react';
import { Container, Reveal } from './ui.jsx';
import CountUp from './CountUp.jsx';

const stats = [
  { icon: Users, value: 20, suffix: '+', label: 'Clients Served' },
  { icon: FolderKanban, value: 50, suffix: '+', label: 'Projects Delivered' },
  { icon: Star, value: 99, suffix: '%', label: 'Client Satisfaction' },
];

export default function Stats() {
  return (
    <section className="relative z-20 bg-ink-800 border-b border-ink-600">
      <div className="w-full">
        <Reveal>
          <div className="grid grid-cols-1 divide-y divide-ink-600 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative overflow-hidden flex flex-col items-center gap-4 px-6 py-12 text-center sm:flex-row sm:text-left sm:px-10 lg:px-16 transition-colors hover:bg-white/[0.02]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 blur-2xl" />
                <span
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(46,230,197,0.1), rgba(59,130,246,0.1))' }}
                >
                  <stat.icon size={28} className="text-brand-teal" />
                </span>
                <div>
                  <p className="font-display text-4xl font-extrabold tracking-tight text-white">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2000 + i * 300} />
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-muted-2 uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
