import React from 'react';
import { Container } from '../layout/Container';
import { Kicker } from '../typography/Kicker';
import { PageTitle } from '../typography/PageTitle';
import { BodyText } from '../typography/BodyText';

interface HeroProps {
  kicker?: React.ReactNode;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  rightSlot?: React.ReactNode;
  variant?: 'light' | 'dark';
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  kicker, 
  title, 
  subtitle, 
  actions, 
  rightSlot,
  variant = 'dark',
  backgroundImage,
}) => {
  const bgClasses = backgroundImage ? '' : (variant === 'dark' ? 'bg-P' : 'bg-white');
  const textVariant = variant === 'dark' ? 'light' : 'dark';

  return (
    <section className={`relative ${bgClasses} py-16 lg:py-24 min-h-[480px] lg:h-[620px] flex items-start overflow-hidden`}>
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-P/75" aria-hidden="true" />
        </>
      )}
      <Container className="relative z-10 w-full flex flex-col lg:flex-row gap-12 items-center lg:items-start">
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
