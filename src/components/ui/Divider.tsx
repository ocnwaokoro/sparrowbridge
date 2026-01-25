import React from 'react';

interface DividerProps {
  className?: string;
  vertical?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ className = '', vertical = false }) => {
  if (vertical) {
    return <div className={`w-px bg-P/15 h-full ${className}`} />;
  }
  return <div className={`h-px bg-P/15 w-full ${className}`} />;
};
