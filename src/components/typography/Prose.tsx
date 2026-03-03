import React from "react";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export const Prose: React.FC<ProseProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`font-b text-[16px] leading-[1.7] text-P/90 space-y-6 max-w-[720px] 
      prose-headings:font-h prose-headings:font-bold prose-headings:text-P
      prose-h2:text-[24px] prose-h3:text-[20px]
      prose-ul:list-disc prose-ul:pl-5
      prose-ol:list-decimal prose-ol:pl-5
      ${className}`}
    >
      {children}
    </div>
  );
};
