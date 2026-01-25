import React from 'react';

interface FounderDetailBlockProps {
  label: string;
  content: React.ReactNode;
}

export const FounderDetailBlock: React.FC<FounderDetailBlockProps> = ({ label, content }) => (
  <div className="p-3 rounded-card border border-P/15 bg-P/[0.03] text-[13px] leading-[1.5] text-P/80">
    <b className="block font-h font-extrabold text-P mb-1 uppercase tracking-wider text-[11px]">{label}</b>
    {content}
  </div>
);

interface FounderBioProps {
  name: string;
  title: string;
  paragraphs: string[];
  details: { label: string; content: React.ReactNode }[];
  imagePlaceholder?: React.ReactNode;
  className?: string;
}

export const FounderBio: React.FC<FounderBioProps> = ({ 
  name, 
  title, 
  paragraphs, 
  details, 
  imagePlaceholder,
  className = '' 
}) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-stretch ${className}`}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="font-b text-[15px] font-normal leading-[1.65] text-P/90">
              {p}
            </p>
          ))}
        </div>

        <div className="grid gap-3 mt-2">
          {details.map((detail, i) => (
            <FounderDetailBlock key={i} label={detail.label} content={detail.content} />
          ))}
        </div>
      </div>

      <aside className="w-full h-full min-h-[400px] lg:min-h-0">
        {imagePlaceholder || (
          <div className="w-full h-full rounded-card border border-P/15 bg-gradient-to-br from-P/15 to-A2/10" />
        )}
      </aside>
    </div>
  );
};
