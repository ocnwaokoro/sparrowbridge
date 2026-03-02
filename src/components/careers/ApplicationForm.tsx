import React, { useState } from 'react';
import { FormField } from '../contact/FormField';
import { Button } from '../ui/Button';

// PLACEHOLDER [BLOCKING]: Application submission only works when env is set — needs VITE_APPLICATION_FORM_ENDPOINT in .env and backend/Formspree
const APPLICATION_FORM_ENDPOINT = import.meta.env.VITE_APPLICATION_FORM_ENDPOINT as string | undefined;

export const ApplicationForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const inputBase = "w-full px-3 py-2 bg-white border border-P/15 rounded-btn font-b text-base lg:text-[14px] focus:outline-none focus:border-A1/40 focus:ring-4 focus:ring-P/5 transition-all placeholder:text-P/40";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!APPLICATION_FORM_ENDPOINT) {
      return;
    }
    const form = e.currentTarget;
    setStatus('sending');
    setMessage('');
    try {
      const body = new FormData(form);
      const res = await fetch(APPLICATION_FORM_ENDPOINT, {
        method: 'POST',
        body,
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setMessage('Application received. We\'ll be in touch.');
      form.reset();
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <div className="border border-P/10 rounded-card bg-P/[0.02] overflow-hidden flex flex-col">
      <div className="px-4 py-2 bg-P/5 border-b border-P/10">
        <h3 className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">Application</h3>
      </div>

      <div className="p-4 bg-white flex flex-col gap-4 flex-1">
        <form className="flex flex-col gap-4 flex-1" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Full Name" id="app-name">
              {/* PLACEHOLDER [VISIBLE]: Example placeholder text in input — optional to replace with generic "Your name" */}
              <input type="text" id="app-name" name="name" placeholder="Kelechi" className={inputBase} required />
            </FormField>
            <FormField label="Email" id="app-email">
              {/* PLACEHOLDER [VISIBLE]: Example email placeholder — optional to use generic "you@example.com" */}
              <input type="email" id="app-email" name="email" placeholder="k@sparrowbridge.com" className={inputBase} required />
            </FormField>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="LinkedIn URL" id="app-linkedin">
              <input type="url" id="app-linkedin" name="linkedin" placeholder="https://linkedin.com/in/..." className={inputBase} required />
            </FormField>
            <FormField label="Location" id="app-location">
              <input type="text" id="app-location" name="location" placeholder="City, State" className={inputBase} />
            </FormField>
          </div>

          <FormField label="Brief Note" id="app-note">
            <textarea id="app-note" name="note" rows={4} placeholder="What draws you to SparrowBridge?" className={`${inputBase} resize-y`} required />
          </FormField>

          <div className="flex flex-col gap-3 p-4 rounded-card border border-P/10 bg-P/[0.02]">
            <label htmlFor="resume" className="font-h text-[12px] font-extrabold text-P/80 uppercase tracking-wider">Resume / CV</label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="text-[13px] file:mr-4 file:py-2 file:px-4 file:rounded-btn file:border-0 file:text-[13px] file:font-h file:font-bold file:bg-P file:text-white hover:file:bg-P/90 cursor-pointer"
              required
            />
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button type="submit" variant="primary" className="w-full md:w-auto px-8 py-3.5" disabled={status === 'sending'}>
              {status === 'sending' ? 'Submitting…' : 'Submit Application'}
            </Button>
            {status === 'success' && (
              <span className="font-b text-[14px] font-semibold text-A2">{message}</span>
            )}
            {status === 'error' && (
              <span className="font-b text-[14px] font-semibold text-A1">{message}</span>
            )}
          </div>

          {/* PLACEHOLDER [VISIBLE]: Shown when env unset — form submission is no-op until VITE_APPLICATION_FORM_ENDPOINT is set */}
          {!APPLICATION_FORM_ENDPOINT && (
            <p className="text-[11px] font-medium text-P/40 italic">
              Set VITE_APPLICATION_FORM_ENDPOINT to your backend or Formspree URL to accept applications.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
