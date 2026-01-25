import React from 'react';

interface InsightNav {
  title: string;
  href: string;
}

interface InsightsPagerProps {
  prev?: InsightNav;
  next?: InsightNav;
  className?: string;
}

export const InsightsPager: React.FC<InsightsPagerProps> = ({ 
  prev, 
  next, 
  className = '' 
}) => {
  return (
    <nav className={`flex flex-col md:flex-row justify-between gap-6 border-t border-P/15 py-12 mt-12 ${className}`}>
      {prev ? (
        <a href={prev.href} className="group flex flex-col gap-2 max-w-[300px] no-underline">
          <span className="font-h text-[12px] font-extrabold tracking-[1px] uppercase text-P/40 group-hover:text-A1 transition-colors">
            ← Previous Insight
          </span>
          <span className="font-h text-[16px] font-bold text-P group-hover:text-A1 transition-colors">
            {prev.title}
          </span>
        </a>
      ) : <div />}
      
      {next ? (
        <a href={next.href} className="group flex flex-col gap-2 max-w-[300px] md:text-right no-underline">
          <span className="font-h text-[12px] font-extrabold tracking-[1px] uppercase text-P/40 group-hover:text-A1 transition-colors">
            Next Insight →
          </span>
          <span className="font-h text-[16px] font-bold text-P group-hover:text-A1 transition-colors">
            {next.title}
          </span>
        </a>
      ) : <div />}
    </nav>
  );
};
