import React from 'react';

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'base' | 'lg';
  variant?: 'light' | 'dark';
  align?: 'left' | 'center' | 'right';
}

export const BodyText: React.FC<BodyTextProps> = ({ 
  children, 
  className = '', 
  size = 'base',
  variant = 'dark',
  align = 'left'
}) => {
  const variantClasses = variant === 'light' ? 'text-white/80' : 'text-P/85';
  const sizeClasses = size === 'lg' ? 'text-[18px] lg:text-[20px]' : 'text-[16px] md:text-[18px]';
  const alignClasses = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  return (
    <p className={`font-b font-normal leading-[1.6] ${sizeClasses} ${variantClasses} ${alignClasses} ${className}`}>
      {children}
    </p>
  );
};
