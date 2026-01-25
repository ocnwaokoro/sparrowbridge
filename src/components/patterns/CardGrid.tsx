import React from 'react';

interface CardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({ 
  children, 
  columns = 3, 
  className = '' 
}) => {
  const gridCols: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-8 ${gridCols[columns]} ${className}`}>
      {children}
    </div>
  );
};
