import React from 'react';

interface FinePrintProps {
  children: React.ReactNode;
  className?: string;
}

export const FinePrint: React.FC<FinePrintProps> = ({ children, className = '' }) => {
  return (
    <div className={`font-b text-[12px] text-P/60 leading-[1.5] ${className}`}>
      {children}
    </div>
  );
};
