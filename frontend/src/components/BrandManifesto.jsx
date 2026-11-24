export default function BrandManifesto() {
  return (
    <section className="bg-[#f5f4ef] text-[#180838] py-14 sm:py-24 border-b border-[#180838]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 sm:pb-6 border-b border-[#180838]/15 gap-2 sm:gap-4 text-xs font-mono tracking-widest text-[#645b77] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#180838]">02</span>
            <span>BRAND MANIFESTO</span>
          </div>
          <div>WEB & APP / SAAS / AI AUTOMATION / DESIGN</div>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 pt-8 sm:pt-16 items-start">
          {/* Giant Manifesto Headline */}
          <div className="lg:col-span-8">
            <h2 className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[5.4rem] leading-[1.08] sm:leading-[0.92] tracking-tight sm:tracking-[-3.5px] uppercase text-[#180838]">
              XarKode is not here <br className="hidden sm:inline" />
              to build another <br className="hidden sm:inline" />
              <span className="text-[#7028e0]">forgettable</span> website.
            </h2>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 sm:space-y-8 pt-2">
            <div className="text-right hidden lg:block text-xs font-mono uppercase tracking-widest text-[#645b77]">
              ATTENTION &nbsp;/&nbsp; TRUST &nbsp;/&nbsp; MOMENTUM
            </div>

            <div className="bg-white/80 p-5 sm:p-8 rounded-none border border-[#180838]/10 space-y-3 sm:space-y-4 shadow-sm backdrop-blur-sm">
              <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#7028e0]">
                YOUR PARTNER IN THE DIGITAL SPHERE.
              </div>
              <p className="text-sm sm:text-base text-[#473e58] font-normal leading-relaxed">
                XarKode is a premium digital agency that builds the foundation beneath your digital growth. We engineer digital ecosystems that don&apos;t just look beautiful, but actively drive growth, automate workflows, and scale your business to new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
