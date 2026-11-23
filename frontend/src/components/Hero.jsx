import { ArrowUpRight, ArrowDownRight, MessageCircle, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#08070e] text-white pt-28 pb-12 flex flex-col justify-between overflow-hidden">
      {/* Ambient Radial Glow on the right */}
      <div 
        className="pointer-events-none absolute right-0 top-1/4 w-[750px] h-[750px] rounded-full blur-[140px] opacity-40 -mr-40"
        style={{
          background: 'radial-gradient(circle, #7028e0 0%, #3b0764 45%, transparent 75%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        {/* Top Metadata Line */}
        <div className="flex items-center justify-between py-6 border-b border-white/10 mb-10 text-xs font-mono tracking-widest text-white/60">
          <div className="flex items-center gap-2 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
            <span>XARKODE — DIGITAL SOLUTIONS STUDIO</span>
          </div>
          <div>01 / 03</div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Big Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[0.92] tracking-tighter uppercase text-white">
              WE BUILD<br />
              DIGITAL<br />
              <span className="text-[#8b5cf6]">EXPERIENCES</span><br />
              THAT MOVE<br />
              BUSINESSES<br />
              <span className="text-[#8b5cf6]">FORWARD.</span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Websites, business systems, and intelligent automation designed for brands that expect more than an ordinary digital presence.
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
              {/* Layer 1: Angled Background Card ("Digital growth") */}
              <div 
                className="absolute -top-4 right-0 w-[85%] bg-[#f5f4ef] text-[#1b0a3d] rounded-none p-6 shadow-2xl transform rotate-3 transition-transform duration-500 hover:rotate-1"
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

              {/* Layer 2: Main Foreground Dashboard Card ("Clinic System") */}
              <div 
                className="relative bg-[#110d24]/95 border border-purple-500/25 rounded-none p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                style={{ zIndex: 2 }}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
                    <span className="text-[11px] font-mono tracking-wider uppercase text-white/80">XARKODE / CLINIC SYSTEM</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">STUDIO COMPOSITION</span>
                </div>

                {/* Card Body */}
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#8b5cf6]">BUILT AROUND THE BUSINESS</div>
                      <h4 className="font-display font-bold text-xl text-white mt-1">One connected system.</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-none bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      • Conceptual
                    </span>
                  </div>

                  {/* Inner Workflow Map Box */}
                  <div className="bg-[#0b0818] border border-white/10 rounded-none p-4 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono uppercase text-white/60">
                      <span>WORKFLOW MAP</span>
                      <Calendar size={14} className="text-purple-400" />
                    </div>

                    {/* Appointments Day Selector */}
                    <div>
                      <div className="text-[11px] text-white/50 mb-2">Appointments</div>
                      <div className="grid grid-cols-5 gap-1.5 text-center text-xs">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                          <div
                            key={day}
                            className={`py-1.5 rounded-none font-medium text-[11px] transition-colors ${
                              day === 'Wed'
                                ? 'bg-[#7028e0] text-white font-bold shadow-sm'
                                : 'bg-white/5 text-white/60 hover:bg-white/10'
                            }`}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sub cards: Patient Workspace & Follow-ups */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="bg-white/[0.03] border border-white/10 rounded-none p-3">
                        <div className="text-[10px] text-white/50 mb-1.5">Patient workspace</div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 bg-white/20 rounded-full w-full" />
                          <div className="h-1.5 bg-purple-500/50 rounded-full w-3/4" />
                        </div>
                      </div>

                      <div className="bg-white/[0.03] border border-white/10 rounded-none p-3">
                        <div className="text-[10px] text-white/50 mb-1.5">Follow-ups</div>
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                          <MessageCircle size={13} />
                          <span>WhatsApp</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtag */}
                <div className="mt-5 text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">
                    ↘ DESIGN / SYSTEMS / GROWTH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-white/50">
          <div>WEB / SYSTEMS / AUTOMATION</div>
          <div className="flex items-center gap-2 text-white/70">
            <span>SCROLL TO EXPLORE</span>
          </div>
          <div className="text-[#8b5cf6] font-bold text-base">↘</div>
        </div>
      </div>
    </section>
  );
}
