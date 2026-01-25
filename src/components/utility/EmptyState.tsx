import React from 'react';
import { Card } from '../ui/Card';
import { CardBody } from '../ui/CardBody';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  icon, 
  className = '' 
}) => {
  return (
    <Card className={`border-dashed border-2 bg-transparent ${className}`}>
      <CardBody className="p-12 flex flex-col items-center text-center gap-4">
        <div className="text-P/20 mb-2">
          {icon || (
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          )}
        </div>
        <h3 className="font-h text-[20px] font-bold text-P/60">{title}</h3>
        <p className="font-b text-[15px] leading-[1.6] text-P/40 max-w-[400px]">
          {description}
        </p>
      </CardBody>
    </Card>
  );
};
