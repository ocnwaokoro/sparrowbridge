import React from 'react';
import { FormField } from '../contact/FormField';
import { Button } from '../ui/Button';

export const ApplicationForm: React.FC = () => {
  const inputBase = "w-full px-3 py-2 bg-white border border-P/15 rounded-btn font-b text-[14px] focus:outline-none focus:border-A1/40 focus:ring-4 focus:ring-P/5 transition-all placeholder:text-P/40";
  
  return (
    <div className="border border-P/10 rounded-card bg-P/[0.02] overflow-hidden flex flex-col">
      <div className="px-4 py-3 bg-P/5 border-b border-P/10">
        <h3 className="font-h text-[14px] font-extrabold text-P/90 uppercase tracking-wider">Application</h3>
      </div>

      <div className="p-4 bg-white flex flex-col gap-4 flex-1">
        <form className="flex flex-col gap-4 flex-1" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Full Name" id="app-name">
              <input type="text" id="app-name" placeholder="Kelechi" className={inputBase} required />
            </FormField>
            <FormField label="Email" id="app-email">
              <input type="email" id="app-email" placeholder="k@sparrowbridge.com" className={inputBase} required />
            </FormField>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="LinkedIn URL" id="app-linkedin">
              <input type="url" id="app-linkedin" placeholder="https://linkedin.com/in/..." className={inputBase} required />
            </FormField>
            <FormField label="Location" id="app-location">
              <input type="text" id="app-location" placeholder="City, State" className={inputBase} />
            </FormField>
          </div>
          
          <FormField label="Brief Note" id="app-note">
            <textarea id="app-note" rows={4} placeholder="What draws you to SparrowBridge?" className={`${inputBase} resize-y`} required />
          </FormField>

          <div className="flex flex-col gap-3 p-4 rounded-card border border-P/10 bg-P/[0.02]">
            <label htmlFor="resume" className="font-h text-[12px] font-extrabold text-P/80 uppercase tracking-wider">Resume / CV</label>
            <input 
              type="file" 
              id="resume" 
              className="text-[13px] file:mr-4 file:py-2 file:px-4 file:rounded-btn file:border-0 file:text-[13px] file:font-h file:font-bold file:bg-P file:text-white hover:file:bg-P/90 cursor-pointer" 
              required 
            />
          </div>

          <div className="mt-2">
            <Button variant="primary" className="w-full md:w-auto px-8 py-3.5">
              Submit Application
            </Button>
          </div>
          
          <p className="text-[11px] font-medium text-P/40 italic">
            Note: Form submission is currently a placeholder.
          </p>
        </form>
      </div>
    </div>
  );
};
