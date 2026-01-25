import React from 'react';
import { RailSection } from '../nav/RailSection';
import { RailLink } from '../nav/RailLink';

interface Category {
  label: string;
  href: string;
}

interface InsightsRailProps {
  categories: Category[];
  activeHref?: string;
  className?: string;
}

export const InsightsRail: React.FC<InsightsRailProps> = ({ 
  categories, 
  activeHref, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      <RailSection title="Categories">
        {categories.map((cat) => (
          <RailLink 
            key={cat.href} 
            href={cat.href} 
            isActive={activeHref === cat.href}
          >
            {cat.label}
          </RailLink>
        ))}
      </RailSection>
      
      <div className="p-4 bg-P/5 rounded-card flex flex-col gap-2">
        <h4 className="font-h text-[13px] font-bold text-P">Newsletter</h4>
        <p className="font-b text-[12px] text-P/70">
          Practical wisdom for leaders delivered to your inbox.
        </p>
        <a href="#subscribe" className="font-b text-[12px] font-bold text-A1 no-underline mt-1">
          Subscribe →
        </a>
      </div>
    </div>
  );
};
