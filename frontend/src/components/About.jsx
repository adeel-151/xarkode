import { Container, Reveal, Avatar, CornerTag } from './ui.jsx';
import { brand, introQuote, painPoints } from '../data/content.js';

export default function About() {
  const quoteWithoutBrand = introQuote.quote.replace(brand.name, '');

  return (
    <section id="about" className="relative bg-ink-900 py-24 sm:py-28">
      <Container>
        {/* Intro quote */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl md:text-[2.1rem]">
            <span
              style={{
                backgroundImage: 'linear-gradient(90deg,#2ee6c5,#3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {brand.name}
            </span>
            {quoteWithoutBrand}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Avatar name={introQuote.name} size={40} />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{introQuote.name}</p>
              <p className="text-xs text-muted">{introQuote.title}</p>
            </div>
          </div>
        </Reveal>

        {/* Is This You? */}
        <div className="mt-24 sm:mt-28">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Is This{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(90deg,#2ee6c5,#3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                You?
              </span>
            </h2>
          </Reveal>

          {/* Scattered 2-col layout — odd items left, even items right & pushed down */}
          <div className="mx-auto mt-14 grid max-w-2xl gap-x-12 gap-y-6 sm:grid-cols-2">
            {painPoints.map((point, i) => (
              <Reveal
                key={point}
                delay={i * 0.09}
                className={i % 2 === 1 ? 'sm:mt-10 sm:justify-self-end' : 'sm:justify-self-start'}
              >
                <CornerTag className="max-w-[16rem]">{point}</CornerTag>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
