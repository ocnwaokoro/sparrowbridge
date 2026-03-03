import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  const variantClasses =
    variant === "accent"
      ? "bg-A2/10 border-A2/30 text-A2"
      : "bg-P/5 border-P/15 text-P/70";

  return (
    <span
      className={`px-2.5 py-1 rounded-full border font-b text-[12px] font-bold tracking-[0.5px] uppercase ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
