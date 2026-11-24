import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle, tag = 'XARKODE / DIGITAL STUDIO' }) {
  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden bg-[#08070e] pt-36 pb-20 border-b border-white/10"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 60% 50% at 50% 30%, rgba(112, 40, 224, 0.25) 0%, rgba(15, 10, 30, 0.1) 60%, transparent 100%)
        `,
      }}
    >
      {/* Ambient Glow */}
      <div 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-40"
        style={{ background: 'radial-gradient(circle, #7028e0 0%, #3b0764 80%, transparent 100%)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {/* Top Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.05] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#a78bfa]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
            <span>{tag}</span>
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-white tracking-[-2.5px] uppercase">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
