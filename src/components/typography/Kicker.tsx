import React from 'react';

interface KickerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export const Kicker: React.FC<KickerProps> = ({ children, className = '', variant = 'dark' }) => {
  const variantClasses = variant === 'light' ? 'text-white/70' : 'text-P/70';
  return (
    <div className={`font-h text-[13px] font-extrabold tracking-[1.2px] uppercase ${variantClasses} ${className}`}>
      {children}
    </div>
  );
};
