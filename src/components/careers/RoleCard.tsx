import React from 'react';
import { Card } from '../ui/Card';
import { CardBody } from '../ui/CardBody';
import { Button } from '../ui/Button';

interface RoleCardProps {
  title: string;
  location: string;
  type: string;
  href: string;
  className?: string;
}

export const RoleCard: React.FC<RoleCardProps> = ({ 
  title, 
  location, 
  type, 
  href, 
  className = '' 
}) => {
  return (
    <Card className={className}>
      <CardBody className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="font-h text-[20px] font-bold text-P">{title}</h3>
          <div className="flex items-center gap-3">
            <span className="font-b text-[13px] text-P/60">{location}</span>
            <span className="text-P/20">•</span>
            <span className="font-b text-[13px] text-P/60">{type}</span>
          </div>
        </div>
        <Button href={href} variant="secondary">
          Apply Now
        </Button>
      </CardBody>
    </Card>
  );
};
