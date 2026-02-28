import React from 'react';
import { Button } from '../ui/Button';

interface CTAInlineProps {
  text: string;
  ctaText: string;
  href: string;
  className?: string;
}

export const CTAInline: React.FC<CTAInlineProps> = ({ 
  text, 
  ctaText, 
  href, 
  className = '' 
}) => {
  return (
    <div className={`w-full max-w-[1000px] p-4 bg-P border border-P/20 rounded-btn 
      flex flex-col md:flex-row md:items-center md:justify-center gap-5 text-center ${className}`}>
      <span className="font-h text-[18px] font-extrabold italic text-white">
        {text}
      </span>
      <Button href={href} variant="primary" className="shrink-0">
        {ctaText}
      </Button>
    </div>
  );
};
