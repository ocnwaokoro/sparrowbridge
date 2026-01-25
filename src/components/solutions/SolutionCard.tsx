import React from 'react';
import { Card } from '../ui/Card';
import { CardHeader } from '../ui/CardHeader';
import { CardBody } from '../ui/CardBody';
import { SectionTitle } from '../typography/SectionTitle';

interface SolutionCardProps {
  title: string;
  fitText: string;
  receiveItems: string[];
  className?: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ 
  title, 
  fitText, 
  receiveItems, 
  className = '' 
}) => {
  return (
    <Card className={`h-full ${className}`}>
      <CardHeader>
        <h3 className="font-h text-[24px] font-bold text-P">{title}</h3>
      </CardHeader>
      <CardBody className="gap-6 p-6">
        <div className="flex flex-col gap-2">
          <h4 className="font-h text-[12px] font-extrabold tracking-[1px] uppercase text-A1">
            When this is the right fit
          </h4>
          <p className="font-b text-[15px] leading-[1.6] text-P/85">
            {fitText}
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <h4 className="font-h text-[12px] font-extrabold tracking-[1px] uppercase text-A2">
            What you receive
          </h4>
          <ul className="flex flex-col gap-2.5">
            {receiveItems.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-A2/40 mt-2 flex-shrink-0" />
                <span className="font-b text-[14px] leading-[1.5] text-P/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};
