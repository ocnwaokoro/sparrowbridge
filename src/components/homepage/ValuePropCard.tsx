import React from 'react';
import { Card } from '../ui/Card';
import { CardBody } from '../ui/CardBody';

interface ValuePropCardProps {
  title: string;
  description: string;
  className?: string;
}

export const ValuePropCard: React.FC<ValuePropCardProps> = ({ 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <Card className={`bg-white/70 ${className}`}>
      <CardBody className="gap-1.5 p-3">
        <div className="font-b text-[14px] font-bold text-P">{title}</div>
        <div className="font-b text-[12px] text-P/75 leading-[1.4]">{description}</div>
      </CardBody>
    </Card>
  );
};
