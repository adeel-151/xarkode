import { useState, useEffect } from 'react';
import { brand } from '../data/content.js';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';
    
    const duration = 1200; // Fast and snappy
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setIsFinished(true);
        // Unlock scroll after exit animation
        setTimeout(() => {
          document.body.style.overflow = '';
          setIsMounted(false);
        }, 800); // 800ms matches the transition duration
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink-900 transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isFinished ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="relative overflow-hidden mb-8">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue tracking-tighter">
          {brand.name}
        </h1>
      </div>

      {/* Premium thin progress line */}
      <div className="w-48 sm:w-64 h-[2px] bg-white/5 rounded-full relative overflow-hidden">
        {/* Shine sweep effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
          style={{ animation: 'shimmer 1.5s infinite' }}
        />
        <div 
          className="h-full bg-gradient-to-r from-brand-teal to-brand-blue transition-all duration-75 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Percentage */}
      <div className="mt-4 text-[10px] font-bold text-brand-teal/80 tracking-[0.2em] uppercase">
        {Math.round(progress)}%
      </div>
    </div>
  );
}
