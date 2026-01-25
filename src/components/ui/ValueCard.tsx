import React from 'react';
import { Card } from '../ui/Card';
import { CardBody } from '../ui/CardBody';

interface ValueCardProps {
  title: string;
  description: string | React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'default' | 'muted' | 'outline';
  className?: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ 
  title, 
  description, 
  icon, 
  variant = 'default',
  className = '' 
}) => {
  const variantClasses = {
    default: 'bg-white border-P/15',
    muted: 'bg-P/5 border-transparent',
    outline: 'bg-transparent border-P/15',
  };

  return (
    <Card className={`${variantClasses[variant]} h-full ${className}`}>
      <CardBody className="p-[18px] gap-2.5">
        {icon && <div className="mb-1 text-P/60">{icon}</div>}
        <h3 className="font-h text-[16px] font-extrabold text-P">{title}</h3>
        <div className="font-b text-[14px] leading-[1.6] text-P/80">
          {description}
        </div>
      </CardBody>
    </Card>
  );
};
