import { ArrowUpRight, ArrowDownRight, MessageCircle, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen text-white pt-28 pb-12 flex flex-col justify-between overflow-hidden"
      style={{
        backgroundColor: '#08070e',
        backgroundImage: `
          radial-gradient(ellipse 70% 60% at 75% 38%, rgba(124, 58, 237, 0.38) 0%, rgba(99, 32, 238, 0.20) 35%, rgba(26, 9, 64, 0.10) 65%, transparent 85%),
          radial-gradient(circle at 90% 15%, rgba(168, 85, 247, 0.25) 0%, transparent 55%)
        `,
      }}
    >
      {/* Ambient Radial Glow Meshes on the right */}
      <div 
        className="pointer-events-none absolute right-[-8%] top-[12%] w-[880px] h-[880px] rounded-full blur-[140px] opacity-75"
        style={{
          background: 'radial-gradient(circle, #7028e0 0%, #4c1d95 45%, #1f0a4f 70%, transparent 85%)',
        }}
      />
      <div 
        className="pointer-events-none absolute right-[15%] top-[35%] w-[580px] h-[580px] rounded-full blur-[110px] opacity-60"
        style={{
          background: 'radial-gradient(circle, #9333ea 0%, #6b21a8 50%, transparent 80%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        {/* Top Metadata Line */}
        <div className="flex items-center justify-between py-6 border-b border-white/10 mb-10 text-xs font-mono tracking-widest text-white/60">
          <div className="flex items-center gap-2 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
            <span>XARKODE — YOUR PARTNER IN THE DIGITAL SPHERE</span>
          </div>
          <div>01 / 03</div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Big Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.1rem] leading-[0.92] tracking-tighter uppercase text-white">
              THE FOUNDATION<br />
              BENEATH<br />
              <span className="text-[#8b5cf6]">YOUR DIGITAL</span><br />
              GROWTH.
            </h1>

            <p className="text-white/70 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              We connect your digital presence, automate your workflows, and build the infrastructure that keeps your business scaling — visibly and beneath the surface.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-200 hover:bg-neutral-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm"
              >
                <span>Explore Our Work</span>
                <ArrowDownRight size={16} strokeWidth={2.5} />
              </a>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-3 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs text-white/60 font-medium tracking-wide">
                Currently accepting selected projects
              </span>
            </div>
          </div>

          {/* Right Column: Layered Interactive 3D Perspective Graphic */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] perspective-1000 pt-8 pb-4">
              {/* Layer 1: Angled Background Card ("Digital growth") - Semi-transparent Frosted Glass */}
              <div 
                className="absolute -top-4 right-0 w-[85%] bg-[#f5f4ef]/80 backdrop-blur-md border border-white/30 text-[#1b0a3d] rounded-none p-6 shadow-2xl transform rotate-3 transition-transform duration-500 hover:rotate-1"
                style={{ zIndex: 1 }}
              >
                <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-4">
                  <span className="font-display font-extrabold text-base tracking-tight">Digital growth</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">STUDIO COMPOSITION</span>
                </div>
                <div className="space-y-2 opacity-60">
                  <div className="h-2 bg-black/15 rounded-full w-4/5" />
                  <div className="h-2 bg-black/10 rounded-full w-3/5" />
                </div>
              </div>

              {/* Layer 2: Main Foreground Dashboard Card - Translucent Dark Violet Glass */}
              <div 
                className="relative bg-[#100c24]/70 border border-purple-400/35 rounded-none p-6 shadow-[0_25px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                style={{ zIndex: 2 }}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
                    <span className="text-[11px] font-mono tracking-wider uppercase text-white/80">XARKODE / DIGITAL ECOSYSTEM</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">SYSTEM ARCHITECTURE</span>
                </div>

                {/* Card Body */}
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#8b5cf6]">ENGINEERED FOR SCALE</div>
                      <h4 className="font-display font-bold text-xl text-white mt-1">One unified platform.</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-none bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      • Production
                    </span>
                  </div>

                  {/* Inner Workflow Map Box - Translucent Glass */}
                  <div className="bg-[#090616]/60 border border-white/10 rounded-none p-4 space-y-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-xs font-mono uppercase text-white/60">
                      <span>CORE ARCHITECTURE</span>
                      <Calendar size={14} className="text-purple-400" />
                    </div>

                    {/* Service Pillars Selector */}
                    <div>
                      <div className="text-[11px] text-white/50 mb-2">Active Modules</div>
                      <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
                        {['Web', 'Apps', 'SaaS', 'AI'].map((mod) => (
                          <div
                            key={mod}
                            className={`py-1.5 rounded-none font-medium text-[11px] transition-colors ${
                              mod === 'SaaS' || mod === 'AI'
                                ? 'bg-[#7028e0] text-white font-bold shadow-sm'
                                : 'bg-white/5 text-white/60 hover:bg-white/10'
                            }`}
                          >
                            {mod}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sub cards: Workflows & Automations - Translucent */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="bg-white/[0.04] border border-white/10 rounded-none p-3 backdrop-blur-sm">
                        <div className="text-[10px] text-white/50 mb-1.5">Cloud Database</div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 bg-white/20 rounded-full w-full" />
                          <div className="h-1.5 bg-purple-500/50 rounded-full w-3/4" />
                        </div>
                      </div>

                      <div className="bg-white/[0.04] border border-white/10 rounded-none p-3 backdrop-blur-sm">
                        <div className="text-[10px] text-white/50 mb-1.5">Smart Automations</div>
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                          <MessageCircle size={13} />
                          <span>Active 24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtag */}
                <div className="mt-5 text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">
                    ↘ WEB / SAAS / AUTOMATION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-white/50">
          <div>WEB & APP / SAAS / AI AUTOMATIONS / UI/UX</div>
          <div className="flex items-center gap-2 text-white/70">
            <span>SCROLL TO EXPLORE</span>
          </div>
          <div className="text-[#8b5cf6] font-bold text-base">↘</div>
        </div>
      </div>
    </section>
  );
}
