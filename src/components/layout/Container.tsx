import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  max?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', max = true }) => {
  return (
    <div className={`${max ? 'max-w-max' : ''} mx-auto px-7 lg:px-20 ${className}`}>
      {children}
    </div>
  );
};
