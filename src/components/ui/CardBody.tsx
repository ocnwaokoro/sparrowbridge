import React from 'react';

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-4.5 flex flex-col gap-3 ${className}`}>
      {children}
    </div>
  );
};
