import React from 'react';

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'base' | 'lg';
  variant?: 'light' | 'dark';
}

export const BodyText: React.FC<BodyTextProps> = ({ 
  children, 
  className = '', 
  size = 'base',
  variant = 'dark'
}) => {
  const variantClasses = variant === 'light' ? 'text-white/80' : 'text-P/85';
  const sizeClasses = size === 'lg' ? 'text-[18px] lg:text-[20px]' : 'text-[16px] md:text-[18px]';
  return (
    <p className={`font-b font-normal leading-[1.6] ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </p>
  );
};
