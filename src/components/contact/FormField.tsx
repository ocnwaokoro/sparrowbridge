import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  id, 
  error, 
  children, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="font-h text-[13px] font-extrabold text-P/80 uppercase tracking-[0.5px]">
        {label}
      </label>
      {children}
      {error && <span className="text-A1 text-[12px] font-semibold">{error}</span>}
    </div>
  );
};
