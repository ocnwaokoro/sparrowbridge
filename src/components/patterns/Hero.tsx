import React from 'react';
import { Container } from '../layout/Container';
import { Kicker } from '../typography/Kicker';
import { PageTitle } from '../typography/PageTitle';
import { BodyText } from '../typography/BodyText';

interface HeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  rightSlot?: React.ReactNode;
  variant?: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({ 
  kicker, 
  title, 
  subtitle, 
  actions, 
  rightSlot,
  variant = 'dark'
}) => {
  const bgClasses = variant === 'dark' ? 'bg-P' : 'bg-white';
  const textVariant = variant === 'dark' ? 'light' : 'dark';

  return (
    <section className={`${bgClasses} py-16 lg:py-24 min-h-[560px] flex items-center`}>
      <Container className="w-full flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        <div className="flex-1 flex flex-col gap-6">
          {kicker && <Kicker variant={textVariant}>{kicker}</Kicker>}
          <PageTitle variant={textVariant}>{title}</PageTitle>
          {subtitle && <BodyText size="lg" variant={textVariant} className="max-w-[700px]">{subtitle}</BodyText>}
          {actions && <div className="flex flex-wrap gap-3 mt-2">{actions}</div>}
        </div>
        
        {rightSlot && (
          <div className="w-full lg:w-[400px] flex-shrink-0">
            {rightSlot}
          </div>
        )}
      </Container>
    </section>
  );
};
