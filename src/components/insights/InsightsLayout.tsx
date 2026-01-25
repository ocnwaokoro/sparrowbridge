import React from 'react';
import { Container } from '../layout/Container';

interface InsightsLayoutProps {
  children: React.ReactNode;
  rail: React.ReactNode;
}

export const InsightsLayout: React.FC<InsightsLayoutProps> = ({ 
  children, 
  rail 
}) => {
  return (
    <Container className="py-12 lg:py-20 flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
      <aside className="w-full">
        <div className="sticky top-28 space-y-8">
          {rail}
        </div>
      </aside>
      
      <main className="min-w-0">
        {children}
      </main>
    </Container>
  );
};
