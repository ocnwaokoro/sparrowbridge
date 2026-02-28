import React, { useState, useEffect } from 'react';

interface HeroValueListProps {
  values: string[];
  prefix?: string;
  className?: string;
}

export const HeroValueList: React.FC<HeroValueListProps> = ({
  values,
  prefix = 'The courage to',
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex(i => (i + 1) % values.length);
        setVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-h text-[16px] font-semibold tracking-[0.6px] text-white/85 whitespace-nowrap">
        {prefix}
      </span>
      <span
        className="font-h text-[16px] font-extrabold text-A1 inline-block min-w-[100px]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px)' : 'translateY(-4px)',
          transition: 'opacity 300ms ease, transform 300ms ease',
        }}
      >
        {values[currentIndex]}
      </span>
    </div>
  );
};
