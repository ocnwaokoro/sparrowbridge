import React from 'react';
import { Card } from '../ui/Card';
import { CardHeader } from '../ui/CardHeader';
import { CardBody } from '../ui/CardBody';

interface SolutionItem {
  id: string;
  title: string;
  description: string;
}

interface SolutionsOverviewCardProps {
  title: string;
  items: SolutionItem[];
  className?: string;
}

export const SolutionsOverviewCard: React.FC<SolutionsOverviewCardProps> = ({ 
  title, 
  items, 
  className = '' 
}) => {
  return (
    <Card className={`w-full ${className}`}>
      <CardHeader title={title} />
      <CardBody className="gap-3">
        {items.map((item) => (
          <div 
            key={item.id}
            className="p-3 bg-white border border-P/15 rounded-card flex flex-col gap-1.5"
          >
            <div className="font-b text-[14px] font-bold text-P">
              <span className="text-A1 mr-2">{item.id}</span>
              {item.title}
            </div>
            <div className="font-b text-[12px] text-P/75 leading-[1.4]">
              {item.description}
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};
