import React from 'react';
import { EmptyState } from '../utility/EmptyState';

interface RoleListProps {
  children?: React.ReactNode;
  className?: string;
}

export const RoleList: React.FC<RoleListProps> = ({ 
  children, 
  className = '' 
}) => {
  if (!children || React.Children.count(children) === 0) {
    return (
      <EmptyState 
        title="No open roles at the moment" 
        description="We're always looking for talented individuals who feel called to this work. Feel free to reach out to us directly."
      />
    );
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {children}
    </div>
  );
};
