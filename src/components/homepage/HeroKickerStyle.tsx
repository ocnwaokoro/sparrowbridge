import React from 'react';

interface HeroKickerStyleProps {
  prefix: string;
  accent?: string;
  className?: string;
}

export const HeroKickerStyle: React.FC<HeroKickerStyleProps> = ({
  prefix,
  accent = '',
  className = '',
}) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="font-h text-[16px] font-semibold tracking-[0.6px] text-white/85 whitespace-nowrap">
      {prefix}
    </span>
    {accent ? (
      <span className="font-h text-[16px] font-extrabold text-A1">
        {accent}
      </span>
    ) : null}
  </div>
);
