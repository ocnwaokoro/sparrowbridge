import React, { useEffect } from 'react';
import { 
  PageShell, 
  SiteHeader, 
  Footer, 
  ContactForm,
  HeroKickerStyle
} from '../components';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'SparrowBridge - Contact';
  }, []);

  return (
    <PageShell>
      <SiteHeader />
      
      {/* HERO */}
      <section className="px-6 lg:px-[80px] py-12 bg-P text-white grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-x-[18px] gap-y-6 items-stretch">
        
        {/* Hero header */}
        <div className="lg:col-span-2">
          <HeroKickerStyle prefix="CONTACT" />
          <h1 className="font-h text-[40px] lg:text-[52px] font-extrabold tracking-[-.6px] leading-[1.05] mt-[10px]">
            Start the Conversation
          </h1>
          <p className="text-[18px] text-white/80 max-w-[700px] mt-3">
            Schedule a discovery call or send a note. We’ll respond quickly and clearly.
          </p>
        </div>

        {/* LEFT */}
        <div className="flex flex-col gap-3">

          {/* Connect block */}
          <div className="border border-[rgba(54,72,97,.12)] rounded-card bg-[rgb(248,249,250)] overflow-hidden">
            <div className="px-3 py-2 border-b border-[rgba(54,72,97,.12)] bg-[rgba(54,72,97,.04)] flex items-center justify-between gap-2.5">
              <div className="font-h text-[13px] font-extrabold text-[rgba(54,72,97,.92)]">Connect</div>
            </div>

            <div className="p-3 flex flex-col gap-2 bg-white h-full">
              <a className="flex items-center justify-between gap-2.5 px-3 py-2 rounded-card border border-[rgba(54,72,97,.12)] bg-white no-underline text-[rgba(54,72,97,.92)] font-bold text-[13px]"
                 href="https://www.linkedin.com/company/sparrowbridge" target="_blank" rel="noopener noreferrer">
                SparrowBridge on LinkedIn
                <span className="text-[12px] font-bold text-[rgba(54,72,97,.62)] whitespace-nowrap">LinkedIn</span>
              </a>

              <a className="flex items-center justify-between gap-2.5 px-3 py-2 rounded-card border border-[rgba(54,72,97,.12)] bg-white no-underline text-[rgba(54,72,97,.92)] font-bold text-[13px]"
                 href="https://www.linkedin.com/in/kelechiokere/" target="_blank" rel="noopener noreferrer">
                Founder on LinkedIn
                <span className="text-[12px] font-bold text-[rgba(54,72,97,.62)] whitespace-nowrap">LinkedIn</span>
              </a>

              {/* PLACEHOLDER [SILENT]: Calendly URL is generic — needs real scheduling link from client */}
              <a className="flex items-center justify-between gap-2.5 px-3 py-2 rounded-card border border-[rgba(54,72,97,.12)] bg-white no-underline text-[rgba(54,72,97,.92)] font-bold text-[13px]"
                 href="https://calendly.com/placeholder" target="_blank" rel="noreferrer">
                Calendly
                <span className="text-[12px] font-bold text-[rgba(54,72,97,.62)] whitespace-nowrap">Schedule a call</span>
              </a>

              {/* PLACEHOLDER [VISIBLE]: Dev note about URLs — remove or replace when Calendly is set */}
              <div className="mt-auto pt-1 text-[12px] font-semibold text-[rgba(54,72,97,.55)]">
                Replace placeholders with real URLs.
              </div>
            </div>
          </div>

          {/* Getting Started block */}
          <div className="border border-[rgba(54,72,97,.12)] rounded-card bg-[rgb(248,249,250)] overflow-hidden">
            <div className="px-3 py-2 border-b border-[rgba(54,72,97,.12)] bg-[rgba(54,72,97,.04)] flex items-center justify-between gap-2.5">
              <div className="font-h text-[13px] font-extrabold text-[rgba(54,72,97,.92)]">Getting Started</div>
            </div>

            <div className="p-3 flex flex-col gap-2 bg-white h-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {/* Step */}
                <div className="flex flex-col gap-1.5 items-center text-center p-3 rounded-card border border-[rgba(54,72,97,.12)] bg-white">
                  <div className="w-[26px] h-[26px] rounded-full border border-[rgba(54,72,97,.22)] bg-white flex items-center justify-center font-h font-extrabold text-[12px] text-[rgba(54,72,97,.9)]">
                    1
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="font-h text-[13px] font-extrabold text-[rgba(54,72,97,.93)] leading-[1.2]">Initial Consultation</div>
                    <div className="text-[12px] font-semibold text-[rgba(54,72,97,.72)] leading-[1.35]">Clarify the situation and desired outcome.</div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 items-center text-center p-3 rounded-card border border-[rgba(54,72,97,.12)] bg-white">
                  <div className="w-[26px] h-[26px] rounded-full border border-[rgba(54,72,97,.22)] bg-white flex items-center justify-center font-h font-extrabold text-[12px] text-[rgba(54,72,97,.9)]">
                    2
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="font-h text-[13px] font-extrabold text-[rgba(54,72,97,.93)] leading-[1.2]">Diagnosis</div>
                    <div className="text-[12px] font-semibold text-[rgba(54,72,97,.72)] leading-[1.35]">Identify root causes and bottlenecks.</div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 items-center text-center p-3 rounded-card border border-[rgba(54,72,97,.12)] bg-white">
                  <div className="w-[26px] h-[26px] rounded-full border border-[rgba(54,72,97,.22)] bg-white flex items-center justify-center font-h font-extrabold text-[12px] text-[rgba(54,72,97,.9)]">
                    3
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="font-h text-[13px] font-extrabold text-[rgba(54,72,97,.93)] leading-[1.2]">Next Steps</div>
                    <div className="text-[12px] font-semibold text-[rgba(54,72,97,.72)] leading-[1.35]">Align on approach, scope and timeline. Co-design solutions, implement together.</div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-1 text-[12px] font-semibold text-[rgba(54,72,97,.55)]">
                Coaching engagements have a three-month minimum.
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Send a Note */}
        <div id="note" className="border border-[rgba(54,72,97,.14)] rounded-card overflow-hidden bg-white/80 flex flex-col">
          <div className="px-3 py-2 border-b border-[rgba(54,72,97,.12)] bg-[rgba(54,72,97,.06)] flex items-center justify-between gap-2.5">
            <div className="font-h text-[16px] font-extrabold text-[rgba(54,72,97,.92)]">Send a Note</div>
          </div>

          <div className="p-3 flex flex-col bg-transparent flex-1">
            <ContactForm />
          </div>
        </div>

      </section>

      <Footer />
    </PageShell>
  );
};

export default Contact;
