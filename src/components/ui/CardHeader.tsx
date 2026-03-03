import React from "react";

interface CardHeaderProps {
  children?: React.ReactNode;
  title?: string;
  rightSlot?: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  title,
  rightSlot,
  className = "",
}) => {
  return (
    <div
      className={`px-4.5 py-3.5 bg-P/5 border-b border-P/15 flex items-center justify-between ${className}`}
    >
      {title ? (
        <h3 className="font-h text-[14px] font-extrabold tracking-[0.2px] text-P/90">
          {title}
        </h3>
      ) : (
        children
      )}
      {rightSlot && <div>{rightSlot}</div>}
    </div>
  );
};
