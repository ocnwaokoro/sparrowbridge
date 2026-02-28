import React from 'react';

/**
 * Renders an icon from the SVG sprite. The sprite must be present in the DOM (e.g. in index.html)
 * with symbols id="icon-{name}". Add <symbol id="icon-{name}"> in the sprite for each icon.
 * Example: <Icon name="link" /> looks up #icon-link. One symbol (icon-link) is included in index.html.
 */
interface IconProps {
  name: string;
  size?: number | string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
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
