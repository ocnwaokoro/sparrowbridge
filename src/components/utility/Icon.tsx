import React from 'react';

interface IconProps {
  name: string;
  size?: number | string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  // This is a wrapper for SVGs. In a real app, you might use a library or a map of SVGs.
  return (
    <svg 
      className={`inline-block align-text-bottom fill-current ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};
