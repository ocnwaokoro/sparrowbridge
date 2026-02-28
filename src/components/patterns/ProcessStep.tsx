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
  className = '',
}) => (
  <div className={`flex gap-3 ${className}`}>
    <div className="flex-none w-7 h-7 rounded-full bg-P/10 border border-P/15 flex items-center justify-center font-h text-[12px] font-extrabold text-P">
      {number}
    </div>
    <div className="flex flex-col gap-0.5">
      <div className="font-h text-[14px] font-extrabold text-P">{title}</div>
      <div className="font-b text-[13px] leading-[1.45] text-P/80">{description}</div>
    </div>
  </div>
);
