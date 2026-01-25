import React from 'react';

interface HeroValueListProps {
  values: string[];
  prefix?: string;
  className?: string;
}

export const HeroValueList: React.FC<HeroValueListProps> = ({ 
  values, 
  prefix = 'The courage to', 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-center gap-2 ${className}`}>
      <span className="font-h text-[16px] font-semibold tracking-[0.6px] text-white/85">
        {prefix}
      </span>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-h text-[14px] md:text-[16px]">
        {values.map((value, idx) => (
          <React.Fragment key={value}>
            <span className={`font-extrabold ${idx === 0 ? 'text-A1' : 'text-white'}`}>
              {value}
            </span>
            {idx < values.length - 1 && <span className="text-white">·</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
