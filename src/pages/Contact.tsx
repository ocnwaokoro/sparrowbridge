import React, { useEffect } from "react";
import contactHero from "../assets/contact-hero.jpg";
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
      <section className="relative py-12 min-h-[320px] overflow-hidden text-white">
        <img
          src={contactHero}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-P/75" aria-hidden />
        <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-6 items-stretch">
          {/* Hero header */}
          <div className="lg:col-span-2">
            <HeroKickerStyle prefix="CONTACT" />
            <h1 className="font-h text-[40px] lg:text-[52px] font-extrabold tracking-[-.6px] leading-[1.05] mt-[10px]">
              Start the Conversation
            </h1>
            <p className="text-[18px] text-white/80 max-w-[700px] mt-3">
              Schedule a discovery call or send a note. We’ll respond quickly
              and clearly.
            </p>
          </div>

          {/* LEFT */}
          <div className="flex flex-col gap-4">
            {/* Connect block */}
            <div className="border border-P/10 rounded-card bg-[#F8F9FA] overflow-hidden">
              <div className="px-4 py-2 border-b border-P/10 bg-P/5 flex items-center justify-between gap-2.5">
                <div className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">
                  Connect
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3 bg-white h-full">
                <p className="text-[13px] font-medium text-P/70 leading-[1.4]">
                  Follow us or book a discovery call. We respond quickly and
                  keep the process simple.
                </p>
                <a
                  className="flex items-center justify-between gap-2.5 px-3 py-2 rounded-card border border-P/15 bg-white no-underline text-P/90 font-bold text-[13px]"
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
                  className="flex items-center justify-between gap-2.5 px-3 py-2 rounded-card border border-P/15 bg-white no-underline text-P/90 font-bold text-[13px]"
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
                  className="flex items-center justify-between gap-2.5 px-3 py-2 rounded-card border border-P/15 bg-white no-underline text-P/90 font-bold text-[13px]"
                  href="https://calendly.com/ko-sparrowbridgeconsulting/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Calendly
                  <span className="text-[12px] font-bold text-P/60 whitespace-nowrap">
                    Schedule a call
                  </span>
                </a>
              </div>
            </div>

            {/* Getting Started block */}
            <div className="border border-P/10 rounded-card bg-[#F8F9FA] overflow-hidden">
              <div className="px-4 py-2 border-b border-P/10 bg-P/5 flex items-center justify-between gap-2.5">
                <div className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">
                  Getting Started
                </div>
              </div>

              <div className="p-4 flex flex-col gap-4 bg-white h-full">
                <p className="text-[13px] font-medium text-P/70 leading-[1.4]">
                  Here’s how we typically work with new clients—from first touch
                  to lasting change.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  {/* Step */}
                  <div className="flex flex-col gap-1.5 items-center text-center p-4 rounded-card border border-P/15 bg-white">
                    <div className="w-[26px] h-[26px] rounded-full border border-P/20 bg-white flex items-center justify-center font-h font-extrabold text-[12px] text-P/90">
                      1
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="font-h text-[13px] font-extrabold text-P/90 leading-[1.2]">
                        Initial Consultation
                      </div>
                      <div className="text-[12px] font-semibold text-P/70 leading-[1.35]">
                        Clarify the situation and desired outcome.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 items-center text-center p-4 rounded-card border border-P/15 bg-white">
                    <div className="w-[26px] h-[26px] rounded-full border border-P/20 bg-white flex items-center justify-center font-h font-extrabold text-[12px] text-P/90">
                      2
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="font-h text-[13px] font-extrabold text-P/90 leading-[1.2]">
                        Diagnosis
                      </div>
                      <div className="text-[12px] font-semibold text-P/70 leading-[1.35]">
                        Identify root causes and bottlenecks.
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 items-center text-center p-4 rounded-card border border-P/15 bg-white">
                    <div className="w-[26px] h-[26px] rounded-full border border-P/20 bg-white flex items-center justify-center font-h font-extrabold text-[12px] text-P/90">
                      3
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="font-h text-[13px] font-extrabold text-P/90 leading-[1.2]">
                        Next Steps
                      </div>
                      <div className="text-[12px] font-semibold text-P/70 leading-[1.35]">
                        Align on approach, scope and timeline. Co-design
                        solutions, implement together.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Send a Note */}
          <div
            id="note"
            className="border border-P/10 rounded-card overflow-hidden bg-[#F8F9FA] flex flex-col"
          >
            <div className="px-4 py-2 border-b border-P/10 bg-P/5 flex items-center justify-between gap-2.5">
              <div className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">
                Send a Note
              </div>
            </div>

            <div className="p-4 flex flex-col bg-transparent flex-1">
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
