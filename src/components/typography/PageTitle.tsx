import React from "react";

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export const PageTitle: React.FC<PageTitleProps> = ({
  children,
  className = "",
  variant = "dark",
}) => {
  const variantClasses = variant === "light" ? "text-white" : "text-P";
  return (
    <h1
      className={`font-h text-[38px] lg:text-[54px] font-extrabold leading-[1.05] tracking-[-0.6px] ${variantClasses} ${className}`}
    >
      {children}
    </h1>
  );
};
