import React, { useEffect } from "react";
import careersHero from "../assets/heroes/careers-hero.jpg";
import {
  PageShell,
  SiteHeader,
  Footer,
  Container,
  ApplicationForm,
  HeroKickerStyle,
} from "../components";

const Careers: React.FC = () => {
  useEffect(() => {
    document.title = "SparrowBridge - Careers";
  }, []);

  return (
    <PageShell>
      <SiteHeader />

      {/* HERO — same layout as Contact */}
      <section className="relative py-8 min-h-[320px] overflow-hidden text-white">
        <img
          src={careersHero}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-P/75" aria-hidden />
        <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-4 items-stretch">
          {/* Hero header */}
          <div className="lg:col-span-2">
            <HeroKickerStyle prefix="CAREERS" />
            <h1 className="font-h text-[40px] lg:text-[52px] font-extrabold tracking-[-.6px] leading-[1.05] mt-1">
              Join us
            </h1>
            <p className="text-[18px] text-white/80 max-w-[700px] mt-2">
              We are a purpose-driven company. If you feel called to help
              individuals and organizations unlock and amplify their value, we
              would love to work with you.
            </p>
          </div>

          {/* LEFT */}
          <div className="flex flex-col gap-3 min-h-0 flex-1">
            {/* What We Value */}
            <div className="border border-P/10 rounded-card bg-[#F8F9FA] overflow-hidden flex-1 min-h-0 flex flex-col">
              <div className="px-4 py-2 border-b border-P/10 bg-P/5 flex items-center justify-between gap-2.5">
                <div className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">
                  What We Value
                </div>
              </div>

              <div className="p-3 flex flex-col gap-3 bg-white flex-1 min-h-0">
                <p className="text-[15px] font-medium text-P/70 leading-[1.4]">
                  These principles guide how we show up for clients and each
                  other.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                  {[
                    {
                      t: "Integrity",
                      d: "We do the deeper work, even when it's uncomfortable.",
                    },
                    {
                      t: "Craft",
                      d: "We bring clear thinking, strong writing, and discipline.",
                    },
                    {
                      t: "Care",
                      d: "We treat clients, colleagues, and the work with respect.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-2 items-center text-center py-3 px-3 rounded-card border border-P/15 bg-white transition-[border-color,box-shadow] duration-200 hover:border-P/30 hover:shadow-sm"
                    >
                      <div className="h-[2.4em] flex items-center justify-center w-full">
                        <span className="font-h text-[18px] font-extrabold text-P/90 leading-[1.2] text-center">
                          {item.t}
                        </span>
                      </div>
                      <div className="text-[15px] font-semibold text-P/70 leading-[1.4]">
                        {item.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How We Work */}
            <div className="w-full border border-P/10 rounded-card bg-[#F8F9FA] overflow-hidden flex-1 min-h-0 flex flex-col">
              <div className="px-4 py-2 border-b border-P/10 bg-P/5 flex items-center justify-between gap-2.5">
                <div className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">
                  How We Work
                </div>
              </div>

              <div className="p-3 flex flex-col gap-3 bg-white flex-1 min-h-0">
                <p className="text-[15px] font-medium text-P/70 leading-[1.4]">
                  We look for root causes, communicate with clarity, and measure
                  what lasts.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                  {[
                    {
                      t: "Client-facing excellence",
                      d: "We communicate in a way that earns trust.",
                    },
                    {
                      t: "Systems thinking",
                      d: "We look for root causes, not just symptoms.",
                    },
                    {
                      t: "Practical impact",
                      d: "We measure what changed, and what will last.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-2 items-center text-center py-3 px-3 rounded-card border border-P/15 bg-white transition-[border-color,box-shadow] duration-200 hover:border-P/30 hover:shadow-sm"
                    >
                      <div className="h-[2.4em] flex items-center justify-center w-full">
                        <span className="font-h text-[18px] font-extrabold text-P/90 leading-[1.2] text-center">
                          {item.t}
                        </span>
                      </div>
                      <div className="text-[15px] font-semibold text-P/70 leading-[1.4]">
                        {item.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Apply */}
          <div
            id="apply"
            className="border border-P/10 rounded-card overflow-hidden bg-[#F8F9FA] flex flex-col"
          >
            <div className="px-4 py-2 border-b border-P/10 bg-P/5 flex items-center justify-between gap-2.5">
              <div className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">
                Apply
              </div>
            </div>

            <div className="p-3 flex flex-col bg-transparent flex-1">
              <ApplicationForm embedded />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </PageShell>
  );
};

export default Careers;
