import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Container } from './ui.jsx';
import { brand, navLinks } from '../data/content.js';
import { Link } from 'react-router-dom';
import useUIStore from '../store/useUIStore.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuOpen = useUIStore((s) => s.mobileMenuOpen);
  const setMobileMenuOpen = useUIStore((s) => s.setMobileMenuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <Container className="!max-w-5xl">
        {/* Main bar */}
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/[0.06] border border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]'
              : 'bg-white/[0.04] border border-white/[0.06]'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="font-display text-xl font-extrabold tracking-tight text-white">
            {brand.short}
            <span
              style={{
                backgroundImage: 'linear-gradient(90deg,#2ee6c5,#3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {brand.accent}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue px-5 py-2 text-sm font-bold text-ink-900 shadow-[0_4px_16px_-4px_rgba(46,230,197,0.5)] transition-transform hover:-translate-y-0.5"
            >
              Contact Us
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-white">
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          >
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="mt-2 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/95 p-5 backdrop-blur-xl lg:hidden"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={handleLinkClick}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-ink-800 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue px-5 py-3 text-sm font-bold text-ink-900"
                >
                  Contact Us
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
