import React from 'react';

interface ImagePlaceholderProps {
  aspectRatio?: 'video' | 'square' | 'portrait';
  text?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  aspectRatio = 'video', 
  text, 
  className = '' 
}) => {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  };

  return (
    <div className={`bg-P/10 border border-P/5 flex items-center justify-center overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}>
      {text ? (
        <span className="font-h text-[12px] font-bold text-P/30 uppercase tracking-[1px]">
          {text}
        </span>
      ) : (
        <svg className="w-1/4 h-1/4 text-P/5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
      )}
    </div>
  );
};
