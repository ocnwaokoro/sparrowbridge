import React from 'react';

export const ContactForm: React.FC = () => {
  const inputBase = "font-b text-[14px] px-3 py-2 rounded-btn border border-[rgba(54,72,97,.18)] outline-none text-[rgba(54,72,97,.92)] placeholder:text-[rgba(54,72,97,.55)] placeholder:font-semibold focus:border-[rgba(54,72,97,.34)] focus:ring-4 focus:ring-[rgba(54,72,97,.10)]";
  
  return (
    <form action="#" method="post" className="flex flex-col gap-2.5 flex-1" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <input 
          className={inputBase}
          name="name" 
          placeholder="Name" 
          autoComplete="name" 
          required 
        />
        <input 
          className={inputBase}
          name="email" 
          type="email" 
          placeholder="Email" 
          autoComplete="email" 
          required 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <input 
          className={inputBase}
          name="org" 
          placeholder="Organization" 
          autoComplete="organization" 
        />
        <input 
          className={inputBase}
          name="role" 
          placeholder="Role / Title" 
          autoComplete="organization-title" 
        />
      </div>

      <select 
        required
        className={`${inputBase} bg-white`}
        name="type"
      >
        <option value="" disabled selected>Inquiry type</option>
        <option value="discovery">Discovery / Consulting</option>
        <option value="coaching">Coaching</option>
        <option value="speaking">Speaking / Workshop</option>
        <option value="other">Other</option>
      </select>

      <textarea 
        required
        className={`${inputBase} min-h-[80px] resize-y flex-1`}
        name="message" 
        placeholder="Message"
      ></textarea>

      <div className="flex gap-3 items-center flex-wrap">
        <button 
          className="inline-flex items-center justify-center px-4 py-3 rounded-btn bg-A1 text-white font-h text-[14px] font-bold no-underline whitespace-nowrap"
          type="submit"
        >
          Send Message
        </button>
      </div>

      <div className="mt-auto pt-1 text-[12px] font-semibold text-[rgba(54,72,97,.55)]">
        Form submission is currently a placeholder. Connect to Formspree / Netlify Forms / your backend.
      </div>
    </form>
  );
};
