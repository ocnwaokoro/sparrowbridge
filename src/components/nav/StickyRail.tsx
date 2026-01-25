import React from 'react';

interface StickyRailProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export const StickyRail: React.FC<StickyRailProps> = ({ 
  children, 
  className = '', 
  offset = 112 // Default offset to clear header
}) => {
  return (
    <div 
      className={`sticky flex flex-col gap-8 ${className}`} 
      style={{ top: `${offset}px` }}
    >
      {children}
    </div>
  );
};
