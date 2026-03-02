import React, { useState } from 'react';

// PLACEHOLDER [BLOCKING]: Form submission only works when env is set — needs VITE_CONTACT_FORM_ENDPOINT in .env and Formspree/backend endpoint
const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const inputBase = "font-b text-base lg:text-[14px] px-3 py-2 rounded-btn border border-P/20 outline-none text-P/90 placeholder:text-P/55 placeholder:font-semibold focus:border-P/40 focus:ring-4 focus:ring-P/10";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!CONTACT_FORM_ENDPOINT) {
      return;
    }
    const form = e.currentTarget;
    setStatus('sending');
    setMessage('');
    try {
      const body = new FormData(form);
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        body,
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setMessage('Thank you. We\'ll respond soon.');
      form.reset();
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <form
      action={CONTACT_FORM_ENDPOINT || '#'}
      method="post"
      className="flex flex-col gap-4 flex-1"
      onSubmit={handleSubmit}
    >
      {/* PLACEHOLDER [SILENT]: action falls back to '#' when VITE_CONTACT_FORM_ENDPOINT unset — form appears to submit but does nothing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-name" className="font-b text-[13px] font-semibold text-P/80">Name</label>
          <input
            id="contact-name"
            className={inputBase}
            name="name"
            placeholder="Name"
            autoComplete="name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-email" className="font-b text-[13px] font-semibold text-P/80">Email</label>
          <input
            id="contact-email"
            className={inputBase}
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-org" className="font-b text-[13px] font-semibold text-P/80">Organization</label>
          <input
            id="contact-org"
            className={inputBase}
            name="org"
            placeholder="Organization"
            autoComplete="organization"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-role" className="font-b text-[13px] font-semibold text-P/80">Role / Title</label>
          <input
            id="contact-role"
            className={inputBase}
            name="role"
            placeholder="Role / Title"
            autoComplete="organization-title"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="contact-type" className="font-b text-[13px] font-semibold text-P/80">Inquiry type</label>
        <select
          id="contact-type"
          required
          className={`${inputBase} bg-white`}
          name="type"
        >
          <option value="" disabled>Inquiry type</option>
          <option value="discovery">Discovery / Consulting</option>
          <option value="coaching">Coaching</option>
          <option value="speaking">Speaking / Workshop</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="contact-message" className="font-b text-[13px] font-semibold text-P/80">Message</label>
        <textarea
          id="contact-message"
          required
          className={`${inputBase} min-h-[100px] resize-y flex-1`}
          name="message"
          placeholder="Message"
        />
      </div>

      <div className="flex gap-3 items-center flex-wrap">
        <button
          className="inline-flex items-center justify-center px-4 py-3 rounded-btn bg-A1 text-white font-h text-[14px] font-bold no-underline whitespace-nowrap disabled:opacity-70 min-h-[44px]"
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'success' && (
          <span className="font-b text-[14px] font-semibold text-A2">{message}</span>
        )}
        {status === 'error' && (
          <span className="font-b text-[14px] font-semibold text-A1">{message}</span>
        )}
      </div>

    </form>
  );
};
