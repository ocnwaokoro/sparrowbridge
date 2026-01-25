import React from 'react';
import { Kicker } from '../typography/Kicker';
import { PageTitle } from '../typography/PageTitle';
import { Prose } from '../typography/Prose';

interface InsightReaderProps {
  category: string;
  date: string;
  readTime: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
  className?: string;
}

export const InsightReader: React.FC<InsightReaderProps> = ({ 
  category, 
  date, 
  readTime, 
  title, 
  lede, 
  children, 
  className = '' 
}) => {
  return (
    <article className={`flex flex-col gap-8 ${className}`}>
      <header className="flex flex-col gap-4 max-w-[800px]">
        <div className="flex items-center gap-3">
          <Kicker>{category}</Kicker>
          <span className="text-P/30">•</span>
          <span className="font-b text-[13px] font-medium text-P/50">{date}</span>
          <span className="text-P/30">•</span>
          <span className="font-b text-[13px] font-medium text-P/50">{readTime}</span>
        </div>
        
        <PageTitle className="lg:text-[48px]">{title}</PageTitle>
        
        {lede && (
          <p className="font-b text-[20px] lg:text-[22px] leading-[1.6] text-P/80 font-medium">
            {lede}
          </p>
        )}
      </header>
      
      <div className="h-px bg-P/10 w-full" />
      
      <Prose>
        {children}
      </Prose>
    </article>
  );
};
