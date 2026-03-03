import React from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "inverse" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-3 font-h text-[14px] font-bold rounded-btn transition-all hover:-translate-y-[1px] no-underline min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-A1 focus-visible:ring-offset-2";

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-A1 text-white hover:opacity-[0.95]",
    secondary: "bg-white border border-P text-P hover:bg-P/5",
    inverse: "bg-transparent border border-white text-white hover:bg-white/10",
    ghost:
      "bg-transparent text-P/70 hover:text-P hover:bg-P/5 px-2 py-1 min-h-0",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal && !href.startsWith("#")) {
      return (
        <Link to={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
