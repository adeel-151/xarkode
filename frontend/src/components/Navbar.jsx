import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // Let normal navigation to home anchor happen
        return;
      }
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#08070e]/85 backdrop-blur-md border-b border-white/[0.06] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Angular Purple Ribbon Logo Mark */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-8 h-8 fill-none">
              <path
                d="M10 8 L24 8 L32 18 L18 18 Z"
                fill="url(#xarkode-logo-grad1)"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
              <path
                d="M8 22 L22 22 L30 32 L16 32 Z"
                fill="url(#xarkode-logo-grad2)"
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
              <defs>
                <linearGradient id="xarkode-logo-grad1" x1="10" y1="8" x2="32" y2="18" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9d68ff" />
                  <stop offset="1" stopColor="#6d28d9" />
                </linearGradient>
                <linearGradient id="xarkode-logo-grad2" x1="8" y1="22" x2="30" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#4c1d95" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-white uppercase">
            XARKODE
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-200 hover:bg-neutral-200 hover:scale-[1.02]"
          >
            <span>Book a Strategy Call</span>
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#08070e]/98 px-6 py-6 backdrop-blur-xl">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-semibold text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-black"
              >
                <span>Book a Strategy Call</span>
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
