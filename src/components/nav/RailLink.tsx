import React from "react";

interface RailLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export const RailLink: React.FC<RailLinkProps> = ({
  href,
  children,
  isActive = false,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`block py-1.5 font-b text-[14px] font-semibold no-underline transition-colors min-h-[44px] flex items-center
        ${isActive ? "text-A1" : "text-P/70 hover:text-P"} ${className}`}
    >
      {children}
    </a>
  );
};
