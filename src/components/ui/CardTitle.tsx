import React from 'react';

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`font-h text-[14px] font-extrabold tracking-[0.2px] text-P/90 ${className}`}>
      {children}
    </h3>
  );
};
