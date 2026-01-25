import React from 'react';

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  stickyOffset?: boolean;
}

export const PageShell: React.FC<PageShellProps> = ({ 
  children, 
  className = '', 
  stickyOffset = false 
}) => {
  return (
    <div className={`min-h-screen bg-white font-b text-P leading-[1.6] flex flex-col ${className}`}>
      {/* If sticky offset is needed for the header, we can add padding-top here */}
      <main className={`flex-grow ${stickyOffset ? 'pt-20' : ''}`}>
        {children}
      </main>
    </div>
  );
};
