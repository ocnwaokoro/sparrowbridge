import React from "react";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  stickyOffset?: boolean;
}

export const PageShell: React.FC<PageShellProps> = ({
  children,
  className = "",
  stickyOffset = false,
}) => {
  return (
    <div
      className={`min-h-screen font-b text-P leading-[1.6] flex flex-col ${className}`}
    >
      <main
        id="main-content"
        className={`flex-grow flex flex-col min-h-0 ${stickyOffset ? "pt-20" : ""}`}
      >
        {children}
      </main>
    </div>
  );
};
