import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  role, 
  variant = 'dark',
  className = '' 
}) => {
  const variantClasses = variant === 'dark' 
    ? 'bg-[#F8F9FA] border-P/15 text-P' 
    : 'bg-white/15 border-white/10 text-white';
  
  const authorClasses = variant === 'dark' ? 'text-A2' : 'text-white/60';

  return (
    <div className={`w-full max-w-[800px] p-8 border rounded-card flex flex-col gap-4 ${variantClasses} ${className}`}>
      <div className="font-h text-[64px] font-bold leading-[0.5] text-A1">"</div>
      <p className="font-b text-[18px] lg:text-[20px] italic leading-[1.6]">
        {quote}
      </p>
      <div className={`font-b text-[14px] font-semibold ${authorClasses}`}>
        — {author}{role ? `, ${role}` : ''}
      </div>
    </div>
  );
};
