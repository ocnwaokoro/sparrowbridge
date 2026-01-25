import React from 'react';
import { Card } from '../ui/Card';
import { CardBody } from '../ui/CardBody';

interface StepCardProps {
  number: string | number;
  title: string;
  description: string;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ 
  number, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <Card className={`h-full ${className}`}>
      <CardBody className="p-6 gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-P text-white font-h text-[16px] font-extrabold rounded-btn">
          {number}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-h text-[18px] font-bold text-P">{title}</h3>
          <p className="font-b text-[14px] leading-[1.6] text-P/70">
            {description}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

interface GettingStartedProps {
  children: React.ReactNode;
  className?: string;
}

export const GettingStarted: React.FC<GettingStartedProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {children}
    </div>
  );
};
