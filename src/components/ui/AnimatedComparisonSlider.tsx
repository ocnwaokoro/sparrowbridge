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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setVisible(true);
    }, 200);
  }, []);

  const next = useCallback(() => {
    goTo((currentIndex + 1) % slides.length);
  }, [currentIndex, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, slides.length, goTo]);

  const resetTimer = useCallback(() => {
    if (prefersReducedMotion) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex(i => {
        const nextIdx = (i + 1) % slides.length;
        setVisible(false);
        setTimeout(() => {
          setCurrentIndex(nextIdx);
          setVisible(true);
        }, 200);
        return i;
      });
    }, autoAdvanceMs);
  }, [autoAdvanceMs, slides.length, prefersReducedMotion]);

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

  const contentTransition = {
    opacity: visible ? 1 : 0,
    transition: prefersReducedMotion ? 'none' : 'opacity 200ms ease',
  };

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        From: {slide.from}. To: {slide.to}.
      </div>

      {/* Card shell stays static; only inner content crossfades. Fixed height on mobile so carousel doesn't jump. */}
      <div className="w-full bg-white border border-P/15 rounded-card overflow-hidden shadow-sm h-[240px] md:h-auto md:min-h-[160px]">
        <div className="hidden md:flex bg-P/5 border-b border-P/15">
          <div className="w-1/2 flex-none min-w-0 p-[14px] font-h text-[14px] font-extrabold text-P">Go from</div>
          <div className="w-1/2 flex-none min-w-0 p-[14px] font-h text-[14px] font-extrabold text-P">To</div>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch h-[240px] md:h-auto md:min-h-[120px]">
          <div className="flex-1 min-w-0 md:w-1/2 md:flex-none py-4 px-4 md:py-5 md:px-[14px] font-b text-[15px] leading-[1.5] text-P/85 overflow-hidden md:overflow-x-hidden">
            <span className="md:hidden block font-h font-extrabold text-[12px] uppercase text-A1 mb-1">Go from:</span>
            <span style={contentTransition} className="block break-words">{slide.from}</span>
          </div>
          <div className="flex-1 min-w-0 md:w-1/2 md:flex-none py-4 px-4 md:py-5 md:px-[14px] font-b text-[15px] leading-[1.5] font-semibold text-P/95 border-t md:border-t-0 md:border-l border-P/10 overflow-hidden md:overflow-x-hidden">
            <span className="md:hidden block font-h font-extrabold text-[12px] uppercase text-A2 mb-1">To:</span>
            <span style={contentTransition} className="block break-words">{slide.to}</span>
          </div>
        </div>
      </div>

      {/* Controls: dots centered, smaller chevrons on sides */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="flex justify-end">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full border border-P/20 bg-white text-P/60 hover:text-P hover:border-P/40 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center" role="tablist" aria-label="Slide index">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to slide ${i + 1}`}
              role="tab"
              aria-selected={i === currentIndex}
              className="group min-w-[44px] min-h-[44px] -mx-2 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-P/5 active:bg-P/10 first:ml-2 last:mr-2"
            >
              <span
                className={`rounded-full transition-all duration-300 shrink-0 pointer-events-none ${
                  i === currentIndex
                    ? 'w-5 h-2 bg-P'
                    : 'w-2 h-2 bg-P/30 group-hover:bg-P/50'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex justify-start">
          <button
            onClick={handleNext}
            aria-label="Next"
            className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full border border-P/20 bg-white text-P/60 hover:text-P hover:border-P/40 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
