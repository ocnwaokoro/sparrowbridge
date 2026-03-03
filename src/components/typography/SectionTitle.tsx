import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
  align = "left",
  variant = "dark",
}) => {
  const variantClasses = variant === "light" ? "text-white" : "text-P";
  const alignClasses = align === "center" ? "text-center" : "text-left";
  return (
    <h2
      className={`font-h text-[28px] lg:text-[30px] font-extrabold tracking-[-0.3px] ${variantClasses} ${alignClasses} ${className}`}
    >
      {children}
    </h2>
  );
};
