import React from 'react';
import { Container } from '../layout/Container';

interface TwoColumnLayoutProps {
  children: React.ReactNode;
  rail: React.ReactNode;
  railPosition?: 'left' | 'right';
  stickyRail?: boolean;
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ 
  children, 
  rail, 
  railPosition = 'left',
  stickyRail = true
}) => {
  return (
    <Container className="py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
      <aside className={`w-full lg:w-[320px] flex-shrink-0 ${railPosition === 'right' ? 'lg:order-last' : ''}`}>
        <div className={stickyRail ? 'sticky top-28' : ''}>
          {rail}
        </div>
      </aside>
      
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </Container>
  );
};
