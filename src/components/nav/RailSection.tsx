import React from 'react';

interface RailSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const RailSection: React.FC<RailSectionProps> = ({ 
  title, 
  children, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {title && (
        <h4 className="font-h text-[12px] font-extrabold tracking-[1px] uppercase text-P/50">
          {title}
        </h4>
      )}
      <nav className="flex flex-col">
        {children}
      </nav>
    </div>
  );
};
