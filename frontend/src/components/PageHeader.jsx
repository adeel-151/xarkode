import { motion } from 'framer-motion';
import { Container } from './ui.jsx';

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-ink-900 pt-32 pb-16 sm:min-h-[50vh] sm:pt-40">
      {/* Cinematic Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop")',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-transparent" />
      
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
