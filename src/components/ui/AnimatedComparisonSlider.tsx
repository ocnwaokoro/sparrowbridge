import React, { useState, useEffect, useCallback, useRef } from 'react';

interface ComparisonSlide {
  from: string;
  to: string;
}

interface AnimatedComparisonSliderProps {
  slides: ComparisonSlide[];
  autoAdvanceMs?: number;
  className?: string;
}

export const AnimatedComparisonSlider: React.FC<AnimatedComparisonSliderProps> = ({
  slides,
  autoAdvanceMs = 4000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setVisible(true);
    }, 300);
  }, []);

  const next = useCallback(() => {
    goTo((currentIndex + 1) % slides.length);
  }, [currentIndex, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, slides.length, goTo]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex(i => {
        const next = (i + 1) % slides.length;
        setVisible(false);
        setTimeout(() => {
          setCurrentIndex(next);
          setVisible(true);
        }, 300);
        return i;
      });
    }, autoAdvanceMs);
  }, [autoAdvanceMs, slides.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };
  const handleDot = (i: number) => { goTo(i); resetTimer(); };

  const slide = slides[currentIndex];

  const contentTransition = { opacity: visible ? 1 : 0, transition: 'opacity 300ms ease' };

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>

      {/* Card shell stays static; only inner content crossfades */}
      <div className="w-full bg-white border border-P/15 rounded-card overflow-hidden shadow-sm min-h-[160px]">
        <div className="hidden md:flex bg-P/5 border-b border-P/15">
          <div className="w-1/2 flex-none min-w-0 p-[14px] font-h text-[14px] font-extrabold text-P">Go from</div>
          <div className="w-1/2 flex-none min-w-0 p-[14px] font-h text-[14px] font-extrabold text-P">To</div>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch min-h-[120px]">
          <div className="flex-1 min-w-0 md:w-1/2 md:flex-none py-5 px-[14px] font-b text-[15px] leading-[1.5] text-P/85 overflow-hidden">
            <span className="md:hidden block font-h font-extrabold text-[12px] uppercase text-A1 mb-1">Go from:</span>
            <span style={contentTransition} className="block">{slide.from}</span>
          </div>
          <div className="flex-1 min-w-0 md:w-1/2 md:flex-none py-5 px-[14px] font-b text-[15px] leading-[1.5] font-semibold text-P/95 border-t md:border-t-0 md:border-l border-P/10 overflow-hidden">
            <span className="md:hidden block font-h font-extrabold text-[12px] uppercase text-A2 mb-1">To:</span>
            <span style={contentTransition} className="block">{slide.to}</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-P/20 bg-white text-P/60 hover:text-P hover:border-P/40 transition-colors text-[16px] font-bold"
        >
          ‹
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-5 h-2 bg-P'
                  : 'w-2 h-2 bg-P/25 hover:bg-P/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-P/20 bg-white text-P/60 hover:text-P hover:border-P/40 transition-colors text-[16px] font-bold"
        >
          ›
        </button>
      </div>
    </div>
  );
};
