import React from 'react';

interface ComparisonRow {
  from: string;
  to: string;
}

interface ComparisonTableProps {
  fromLabel?: string;
  toLabel?: string;
  rows: ComparisonRow[];
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ 
  fromLabel = "Go from", 
  toLabel = "To", 
  rows, 
  className = '' 
}) => {
  return (
    <div className={`w-full max-w-[1000px] bg-white border border-P/15 rounded-card overflow-hidden shadow-sm ${className}`}>
      {/* Header */}
      <div className="hidden md:flex bg-P/5 border-b border-P/15">
        <div className="flex-1 p-[14px] font-h text-[14px] font-extrabold text-P">{fromLabel}</div>
        <div className="flex-1 p-[14px] font-h text-[14px] font-extrabold text-P">{toLabel}</div>
      </div>

      <div className="divide-y divide-P/10">
        {rows.map((row, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row md:items-stretch ${idx % 2 === 1 ? 'bg-P/[0.02]' : ''}`}>
            {/* From Column */}
            <div className="flex-1 py-[10px] px-[14px] font-b text-[14px] leading-[1.4] text-P/85">
              <span className="md:hidden block font-h font-extrabold text-[12px] uppercase text-A1 mb-1">{fromLabel}:</span>
              {row.from}
            </div>
            {/* To Column */}
            <div className="flex-1 py-[10px] px-[14px] font-b text-[14px] leading-[1.4] font-semibold text-P/95 border-t md:border-t-0 md:border-l border-P/10">
              <span className="md:hidden block font-h font-extrabold text-[12px] uppercase text-A2 mb-1">{toLabel}:</span>
              {row.to}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
