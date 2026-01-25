import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`flex gap-3 p-2 bg-P/5 rounded-btn border border-transparent hover:border-P/10 transition-colors ${className}`}>
      <div className="w-6 h-6 flex items-center justify-center bg-P text-white font-h text-[12px] font-extrabold rounded-btn flex-none">
        {number}
      </div>
      <div className="flex flex-col gap-0.5 flex-1">
        <div className="font-h text-[14px] font-extrabold text-P">{title}</div>
        <div className="font-b text-[13px] leading-[1.4] text-P/80">
          {description}
        </div>
      </div>
    </div>
  );
};

interface ProcessDiagramNodeProps {
  title: string;
  description: string;
  isAccent?: boolean;
  className?: string;
}

export const ProcessDiagramNode: React.FC<ProcessDiagramNodeProps> = ({ 
  title, 
  description, 
  isAccent = false,
  className = '' 
}) => {
  return (
    <div className={`p-2.5 border rounded-card flex flex-col gap-1 transition-all ${
      isAccent 
        ? 'bg-P/5 border-A1/30 shadow-[0_0_15px_rgba(227,83,54,0.05)]' 
        : 'bg-P/5 border-P/10'
    } ${className}`}>
      <div className={`font-h text-[14px] font-extrabold ${isAccent ? 'text-A1' : 'text-P'}`}>
        {title}
      </div>
      <div className="font-b text-[12px] text-P/75 leading-[1.4]">
        {description}
      </div>
    </div>
  );
};

export const ProcessConnector: React.FC = () => (
  <div className="flex items-center gap-2 px-2 h-3">
    <div className="flex-1 h-[2px] bg-P/20 rounded-full"></div>
    <span className="font-h text-[11px] font-extrabold text-P/55 uppercase tracking-tighter">then ›</span>
  </div>
);
