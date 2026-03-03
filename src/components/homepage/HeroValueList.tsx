import React, { useState, useEffect } from "react";

interface HeroValueListProps {
  values: string[];
  prefix?: string;
  className?: string;
}

export const HeroValueList: React.FC<HeroValueListProps> = ({
  values,
  prefix = "The courage to",
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % values.length);
        setVisible(true);
      }, 200);
    }, 2500);
    return () => clearInterval(interval);
  }, [values.length, prefersReducedMotion]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-h text-[16px] font-semibold tracking-[0.6px] text-white/85 whitespace-nowrap">
        {prefix}
      </span>
      <span
        aria-live="polite"
        aria-atomic="true"
        className="font-h text-[16px] font-extrabold text-A1 inline-block min-w-[100px]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(-4px)",
          transition: prefersReducedMotion
            ? "none"
            : "opacity 200ms ease, transform 200ms ease",
        }}
      >
        {values[currentIndex]}
      </span>
    </div>
  );
};
