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
    <div className={`w-full max-w-[1000px] p-4 bg-white border border-P/15 rounded-btn 
      flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-center md:text-left ${className}`}>
      <span className="font-b text-[18px] font-medium text-P">
        {text}
      </span>
      <Button href={href} variant="primary">
        {ctaText}
      </Button>
    </div>
  );
};
