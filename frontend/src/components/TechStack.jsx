import { ArrowUpRight, Check } from 'lucide-react';

export default function TechStack() {
  const stack = [
    { num: '01', name: 'Next.js', icon: '▲' },
    { num: '02', name: 'React', icon: '⚛' },
    { num: '03', name: 'Node.js', icon: '⬢' },
    { num: '04', name: 'TypeScript', icon: 'TS' },
    { num: '05', name: 'PostgreSQL', icon: '🐘' },
    { num: '06', name: 'Supabase', icon: '⚡' },
    { num: '07', name: 'Vercel', icon: '▲' },
    { num: '08', name: 'Tailwind CSS', icon: '≋' },
  ];

  const industries = [
    'Clinics & Healthcare',
    'Education & Admissions',
    'Construction & Accounting',
    'Automotive Services',
    'E-commerce & Retail',
  ];

  const practices = [
    'Custom builds — no template shortcuts',
    'Conversion-focused design',
    'Clean, maintainable code',
    'Direct communication with the founder',
  ];

  return (
    <section className="bg-[#f3f1ea] text-[#180838] py-24 border-b border-[#180838]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#180838]/15 gap-4 text-xs font-mono tracking-widest text-[#645b77] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#180838]">08</span>
            <span>TECHNOLOGY & CAPABILITIES</span>
          </div>
          <div>THE STACK BEHIND THE WORK</div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-14 pb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-[5.2rem] leading-[0.92] tracking-tighter uppercase text-[#180838]">
              THE STACK<br />
              BEHIND <span className="text-[#7028e0]">THE</span><br />
              WORK.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#524962] leading-relaxed max-w-md">
              From brand experiences and digital campaigns to websites and custom management systems, XARKODE combines creative direction with practical technology to build solutions that businesses can confidently use and grow with.
            </p>
          </div>
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="group flex items-center justify-between p-4 sm:p-5 rounded-none bg-white/70 border border-[#180838]/10 hover:border-[#7028e0]/40 hover:bg-white hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#736a88]">{item.num}</span>
                <span className="w-7 h-7 rounded-none bg-purple-50 text-[#7028e0] font-bold text-xs flex items-center justify-center border border-purple-100">
                  {item.icon}
                </span>
                <span className="font-display font-bold text-base text-[#180838] group-hover:text-[#7028e0] transition-colors">
                  {item.name}
                </span>
              </div>
              <ArrowUpRight size={15} className="text-[#736a88] group-hover:text-[#7028e0] transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom Capabilities & Practices Grid */}
        <div className="mt-16 pt-8 border-t border-[#180838]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs font-mono">
          {/* Selected Areas of Work */}
          <div className="lg:col-span-6 space-y-3">
            <div className="uppercase tracking-widest text-[#736a88] font-bold">
              SELECTED AREAS OF WORK
            </div>
            <div className="flex flex-wrap gap-2 text-[#180838]">
              {industries.map((ind, i) => (
                <span key={i} className="bg-white/80 px-3 py-1.5 rounded-none border border-[#180838]/10 text-xs font-sans font-medium">
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* How We Work */}
          <div className="lg:col-span-6 space-y-3">
            <div className="uppercase tracking-widest text-[#736a88] font-bold">
              HOW WE WORK
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#270e5e]">
              {practices.map((prac, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={14} className="text-[#7028e0] shrink-0" strokeWidth={3} />
                  <span>{prac}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
