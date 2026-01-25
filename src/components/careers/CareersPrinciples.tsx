import React from 'react';
import { CardGrid } from '../patterns/CardGrid';
import { Card } from '../ui/Card';
import { CardBody } from '../ui/CardBody';

interface Principle {
  title: string;
  description: string;
}

interface CareersPrinciplesProps {
  principles: Principle[];
  className?: string;
}

export const CareersPrinciples: React.FC<CareersPrinciplesProps> = ({ 
  principles, 
  className = '' 
}) => {
  return (
    <CardGrid columns={3} className={className}>
      {principles.map((p, idx) => (
        <Card key={idx} className="h-full bg-P/5 border-none">
          <CardBody className="p-8 gap-4">
            <h3 className="font-h text-[20px] font-bold text-P">{p.title}</h3>
            <p className="font-b text-[15px] leading-[1.6] text-P/75">
              {p.description}
            </p>
          </CardBody>
        </Card>
      ))}
    </CardGrid>
  );
};
