import React from "react";

interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  /** Override label style (e.g. to match Contact form). */
  labelClassName?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  error,
  children,
  className = "",
  labelClassName,
}) => {
  const defaultLabelClass =
    "font-h text-[13px] font-extrabold text-P/80 uppercase tracking-[0.5px]";
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={id}
        className={labelClassName ?? defaultLabelClass}
      >
        {label}
      </label>
      {children}
      {error && (
        <span className="text-A1 text-[12px] font-semibold">{error}</span>
      )}
    </div>
  );
};
