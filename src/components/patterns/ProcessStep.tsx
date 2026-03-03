import React from "react";

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
  className = "",
}) => (
  <div className={`flex gap-3 ${className}`}>
    <div className="flex-none w-8 h-8 rounded-full bg-P/10 border border-P/15 flex items-center justify-center font-h text-[14px] font-extrabold text-P">
      {number}
    </div>
    <div className="flex flex-col gap-0.5">
      <div className="font-h text-[16px] lg:text-[17px] font-extrabold text-P">
        {title}
      </div>
      <div className="font-b text-[15px] leading-[1.5] text-P/80">
        {description}
      </div>
    </div>
  </div>
);
