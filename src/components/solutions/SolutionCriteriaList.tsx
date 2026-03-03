import React from "react";

interface SolutionCriteriaListProps {
  items: string[];
  className?: string;
}

export const SolutionCriteriaList: React.FC<SolutionCriteriaListProps> = ({
  items,
  className = "",
}) => {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-3 items-start">
          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-A2/10 text-A2 rounded-full">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="font-b text-[14px] leading-[1.4] text-P/85">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
