import React, { useEffect } from "react";
import contactHero from "../assets/heroes/contact-hero.jpg";
import {
  PageShell,
  SiteHeader,
  Footer,
  Container,
  ContactForm,
  HeroKickerStyle,
} from "../components";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "SparrowBridge - Contact";
  }, []);

  return (
    <PageShell>
      <SiteHeader />

      {/* HERO */}
      <section className="relative py-6 sm:py-8 min-h-[280px] sm:min-h-[320px] overflow-hidden text-white">
        <img
          src={contactHero}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-P/75" aria-hidden />
        <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-4 lg:gap-4 items-stretch min-w-0">
          {/* Hero header */}
          <div className="lg:col-span-2 min-w-0">
            <HeroKickerStyle prefix="CONTACT" />
            <h1 className="font-h text-[32px] sm:text-[40px] lg:text-[52px] font-extrabold tracking-[-.6px] leading-[1.05] mt-1">
              Start the Conversation
            </h1>
            <p className="text-[16px] sm:text-[18px] text-white/80 max-w-[700px] mt-2">
              Schedule a discovery call or send a note. We’ll respond quickly
              and clearly.
            </p>
          </div>

          {/* LEFT */}
          <div className="flex flex-col gap-3 min-h-0 lg:flex-1 min-w-0">
            {/* Connect block */}
            <div className="w-full border border-P/10 rounded-card bg-[#F8F9FA] overflow-hidden flex flex-col min-h-0 lg:flex-1">
              <div className="px-4 py-2 border-b border-P/10 bg-P/5 flex items-center justify-between gap-2.5">
                <div className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">
                  Connect
                </div>
              </div>

              <div className="p-3 flex flex-col gap-3 bg-white flex-1 min-h-0 min-w-0">
                <p className="text-[15px] font-medium text-P/70 leading-[1.4]">
                  Follow us or book a discovery call. We respond quickly and
                  keep the process simple.
                </p>
                <a
                  className="flex items-center justify-between gap-2.5 px-3 py-3 min-h-[44px] rounded-card border border-P/15 bg-white no-underline text-P/90 font-bold text-[15px] transition-[border-color,box-shadow,transform] duration-200 hover:border-P/30 hover:shadow-sm active:scale-[0.99] touch-manipulation"
                  href="https://www.linkedin.com/company/sparrowbridge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SparrowBridge on LinkedIn
                  <span className="text-[12px] font-bold text-P/60 whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>

                <a
                  className="flex items-center justify-between gap-2.5 px-3 py-3 min-h-[44px] rounded-card border border-P/15 bg-white no-underline text-P/90 font-bold text-[15px] transition-[border-color,box-shadow,transform] duration-200 hover:border-P/30 hover:shadow-sm active:scale-[0.99] touch-manipulation"
                  href="https://www.linkedin.com/in/kelechiokere/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Founder on LinkedIn
                  <span className="text-[12px] font-bold text-P/60 whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>

                <a
                  className="flex items-center justify-between gap-2.5 px-3 py-3 min-h-[44px] rounded-card border border-P/15 bg-white no-underline text-P/90 font-bold text-[15px] transition-[border-color,box-shadow,transform] duration-200 hover:border-P/30 hover:shadow-sm active:scale-[0.99] touch-manipulation"
                  href="https://calendly.com/ko-sparrowbridgeconsulting/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Calendly
                  <span className="text-[12px] font-bold text-P/60 whitespace-nowrap group-hover:text-P/80 transition-colors">
                    Schedule a call
                  </span>
                </a>
              </div>
            </div>

            {/* Getting Started block */}
            <div className="w-full border border-P/10 rounded-card bg-[#F8F9FA] overflow-hidden flex flex-col min-h-0 lg:flex-1">
              <div className="px-4 py-2 border-b border-P/10 bg-P/5 flex items-center justify-between gap-2.5">
                <div className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">
                  Getting Started
                </div>
              </div>

              <div className="py-3 px-3 flex flex-col gap-3 bg-white flex-1 min-h-0 min-w-0 overflow-visible">
                <p className="text-[15px] font-medium text-P/70 leading-[1.4]">
                  Here’s how we typically work with new clients, from first touch to lasting change.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-2">
                  <div className="flex flex-col gap-2 items-center text-center py-3 px-3 rounded-card border border-P/15 bg-white transition-[border-color,box-shadow] duration-200 hover:border-P/30 hover:shadow-sm">
                    <div className="h-[2.4em] flex items-center justify-center w-full">
                      <span className="font-h text-[18px] font-extrabold text-P/90 leading-[1.2] text-center">
                        Initial Consultation
                      </span>
                    </div>
                    <div className="text-[15px] font-semibold text-P/70 leading-[1.4]">
                      Clarify the situation and desired outcome.
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-center text-center py-3 px-3 rounded-card border border-P/15 bg-white transition-[border-color,box-shadow] duration-200 hover:border-P/30 hover:shadow-sm">
                    <div className="h-[2.4em] flex items-center justify-center w-full">
                      <span className="font-h text-[18px] font-extrabold text-P/90 leading-[1.2] text-center">
                        Diagnosis
                      </span>
                    </div>
                    <div className="text-[15px] font-semibold text-P/70 leading-[1.4]">
                      Identify root causes and bottlenecks.
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-center text-center py-3 px-3 rounded-card border border-P/15 bg-white transition-[border-color,box-shadow] duration-200 hover:border-P/30 hover:shadow-sm">
                    <div className="h-[2.4em] flex items-center justify-center w-full">
                      <span className="font-h text-[18px] font-extrabold text-P/90 leading-[1.2] text-center">
                        Next Steps
                      </span>
                    </div>
                    <div className="text-[15px] font-semibold text-P/70 leading-[1.4]">
                      We align on approach, then design and implement.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Send a Note */}
          <div
            id="note"
            className="border border-P/10 rounded-card overflow-hidden bg-[#F8F9FA] flex flex-col min-w-0"
          >
            <div className="px-4 py-2 border-b border-P/10 bg-P/5 flex items-center justify-between gap-2.5">
              <div className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">
                Send a Note
              </div>
            </div>

            <div className="p-3 flex flex-col bg-transparent flex-1">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </PageShell>
  );
};

export default Contact;
