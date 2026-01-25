import React from 'react';
import { Card } from '../ui/Card';
import { CardBody } from '../ui/CardBody';

interface ConnectRowProps {
  icon?: React.ReactNode;
  label: string;
  sublabel?: string;
  href: string;
  className?: string;
}

export const ConnectRow: React.FC<ConnectRowProps> = ({ 
  icon, 
  label, 
  sublabel, 
  href, 
  className = '' 
}) => {
  return (
    <a 
      href={href} 
      className={`flex items-center gap-4 p-3 hover:bg-P/5 rounded-btn transition-colors no-underline group ${className}`}
    >
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-P/5 text-P rounded-full group-hover:bg-P group-hover:text-white transition-colors">
        {icon || (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        )}
      </div>
      <div className="flex flex-col">
        <span className="font-h text-[14px] font-bold text-P">{label}</span>
        {sublabel && <span className="font-b text-[12px] text-P/60">{sublabel}</span>}
      </div>
      <svg className="ml-auto w-4 h-4 text-P/20 group-hover:text-A1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
};

interface ConnectCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const ConnectCard: React.FC<ConnectCardProps> = ({ 
  children, 
  title = "Direct Channels", 
  className = '' 
}) => {
  return (
    <Card className={className}>
      <CardBody className="gap-2 p-4">
        <h3 className="font-h text-[14px] font-extrabold tracking-[0.2px] text-P/90 mb-2">
          {title}
        </h3>
        <div className="flex flex-col gap-1">
          {children}
        </div>
      </CardBody>
    </Card>
  );
};
