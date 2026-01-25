import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white border border-P/15 rounded-card overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
