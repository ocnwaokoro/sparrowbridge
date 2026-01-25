import React from 'react';
import { Card } from '../ui/Card';
import { CardBody } from '../ui/CardBody';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imagePlaceholder?: React.ReactNode;
  className?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name, 
  role, 
  bio, 
  imagePlaceholder,
  className = '' 
}) => {
  return (
    <Card className={`h-full ${className}`}>
      <CardBody className="p-[18px] gap-4">
        <div className="flex gap-4 items-center">
          {imagePlaceholder || (
            <div className="w-14 h-14 rounded-card border border-P/15 flex-none bg-gradient-to-br from-P/15 to-A2/10" />
          )}
          <div>
            <h3 className="font-h text-[18px] font-extrabold text-P">{name}</h3>
            <div className="font-b text-[13px] font-bold text-P/75 mt-0.5">{role}</div>
          </div>
        </div>
        <p className="font-b text-[14px] leading-[1.65] text-P/85">
          {bio}
        </p>
      </CardBody>
    </Card>
  );
};
