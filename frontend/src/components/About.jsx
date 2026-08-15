import { Quote, Target, Zap, Shield, Rocket } from 'lucide-react';
import { Container, Reveal } from './ui.jsx';
import { brand, introQuote, painPoints } from '../data/content.js';
import ceoImage from '../assets/ceo-adeel.jpg';

const painPointIcons = [Target, Zap, Shield, Rocket];

export default function About() {
  return (
    <section id="about" className="relative bg-ink-900 py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-0 w-full max-w-3xl h-[600px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />

      <Container className="relative z-10">
        
        {/* CEO Message / Vision Split Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: CEO / Vision Image */}
          <Reveal className="relative group w-full">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-ink-800 shadow-[0_0_40px_rgba(46,230,197,0.1)]">
              {/* Animated gradient border glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />
              
              <img 
                src={ceoImage}
                alt="Adeel Qaiser - CEO" 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10">
                <div className="glass-card-strong px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl backdrop-blur-md inline-block max-w-full">
                  <p className="font-display text-base sm:text-lg font-extrabold tracking-widest text-white uppercase truncate">
                    {introQuote.name}
                  </p>
                  <p className="text-[10px] sm:text-xs font-semibold text-brand-teal tracking-wider uppercase mt-1 truncate">
                    {introQuote.title}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: The Message */}
          <Reveal delay={0.2} className="flex flex-col justify-center">
            <Quote size={48} className="w-12 h-12 sm:w-16 sm:h-16 text-brand-teal/20 mb-4 sm:mb-6" />
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Engineering <span className="text-gradient">Growth</span>
            </h2>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-muted-2">
              "{introQuote.quote}"
            </p>
            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-brand-teal to-brand-blue" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/50">Our Vision</p>
            </div>
          </Reveal>
        </div>

        {/* Why We Exist / Pain Points Grid */}
        <div className="mt-32 sm:mt-40">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Why We <span className="text-gradient">Exist</span>
            </h2>
            <p className="mt-4 text-muted-2 text-sm sm:text-base max-w-2xl mx-auto">
              We eliminate the common friction points that hold businesses back from their true potential.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((point, i) => {
              const Icon = painPointIcons[i % painPointIcons.length];
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group h-full flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:border-brand-teal/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(46,230,197,0.15)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-800 border border-white/5 text-brand-teal mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <p className="text-base font-semibold leading-relaxed text-white/80 group-hover:text-white transition-colors">
                      {point}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
}
