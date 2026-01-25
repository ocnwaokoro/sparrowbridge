import React from 'react';
import { Card } from '../ui/Card';
import { CardBody } from '../ui/CardBody';
import { Badge } from '../ui/Badge';

interface CaseStudyCardProps {
  title: string;
  summary: string;
  tags: string[];
  accentColor?: string;
  imagePlaceholder?: React.ReactNode;
  className?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title, 
  summary, 
  tags, 
  accentColor = 'bg-P',
  imagePlaceholder,
  className = '' 
}) => {
  return (
    <Card className={`h-full flex flex-col ${className}`}>
      {imagePlaceholder ? (
        <div className="h-[200px] w-full bg-P/5 flex items-center justify-center">
          {imagePlaceholder}
        </div>
      ) : (
        <div className={`h-[200px] w-full ${accentColor}`} />
      )}
      <CardBody className="p-6 flex-grow flex flex-col gap-4">
        <h3 className="font-h text-[24px] font-semibold text-P leading-[1.3]">{title}</h3>
        <p className="font-b text-[14px] leading-[1.5] text-P/80 flex-grow">
          {summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1.5 bg-A2/8 border border-A2/28 rounded-btn font-b text-[12px] font-bold text-P/85"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
