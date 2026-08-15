import { Container, Reveal, Badge } from './ui.jsx';
import { workProcess } from '../data/content.js';

export default function Process() {
  return (
    <section className="bg-ink-900 py-24 sm:py-28">
      <Container>
        <Reveal className="text-center">
          <Badge className="!bg-brand-teal !border-brand-teal !text-ink-900 font-bold">Process</Badge>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl">
            How We <span className="text-gradient">Work</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {workProcess.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1} className="relative">
              {/* Connecting line on desktop */}
              {i < workProcess.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full border-t-2 border-dashed border-ink-600 z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl glass-card-strong font-display text-2xl font-extrabold text-brand-teal mb-6 shadow-[0_8px_32px_-8px_rgba(46,230,197,0.3)]">
                  {item.step}
                </span>
                <h3 className="font-display text-xl font-extrabold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-2 max-w-sm">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
