import React, { useEffect } from 'react';
import careersHero from '../assets/careers-hero.jpg';
import { 
  PageShell, 
  SiteHeader, 
  Hero,
  Footer, 
  Container,
  ApplicationForm,
  HeroKickerStyle
} from '../components';

const Careers: React.FC = () => {
  useEffect(() => {
    document.title = 'SparrowBridge - Careers';
  }, []);

  return (
    <PageShell>
      <SiteHeader />
      
      {/* Careers Hero */}
      <Hero
        kicker={<HeroKickerStyle prefix="Careers" />}
        title="Join us"
        subtitle="We are a purpose-driven company. If you feel called to help individuals and organizations unlock and amplify their value to humanity and our planet, we would love to work with you. If you want a company where you can bring your whole self to work, let’s build it daily. Our vision statement applies to us first. Let’s help you build a lifestyle that lasts."
        variant="dark"
        backgroundImage={careersHero}
        backgroundImagePosition="bottom"
      />

      {/* Main Careers Content */}
      <section className="bg-white py-12 lg:py-20">
        <Container>
          <div className="border border-P/15 rounded-card bg-white overflow-hidden shadow-sm">
            {/* Header */}
            <div className="px-5 lg:px-6 py-4 bg-P/5 border-b border-P/15 flex flex-col gap-1">
              <h2 className="font-h text-[16px] font-extrabold tracking-tight text-P/90">Join SparrowBridge</h2>
              <p className="text-[13px] font-semibold text-P/60">
                We keep hiring simple: send a note, share your LinkedIn, and attach a resume. If there’s a fit, we’ll follow up.
              </p>
            </div>

            {/* Body */}
            <div className="p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 items-stretch">
              
              {/* Left Column: Values & How We Work */}
              <div className="flex flex-col gap-6 min-h-0">
                <div className="flex flex-col gap-4 flex-1 min-h-0">
                  <div className="border border-P/10 rounded-card bg-[#F8F9FA] overflow-hidden flex flex-col shrink-0">
                    <div className="px-4 py-2 border-b border-P/10 bg-P/5">
                      <h3 className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">What We Value</h3>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      {[
                        { t: "Integrity", d: "We do the deeper work, even when it’s uncomfortable." },
                        { t: "Craft", d: "Clear thinking, strong writing, disciplined execution." },
                        { t: "Care", d: "We treat clients, colleagues, and the work with respect." }
                      ].map((item, i) => (
                        <div key={i} className="p-3 border border-P/10 rounded-card bg-white flex gap-3 items-start">
                          <div className="w-2.5 h-2.5 rounded-full bg-P/20 mt-1 flex-shrink-0" />
                          <div className="flex flex-col">
                            <b className="font-h text-[13px] font-extrabold text-P/90">{item.t}</b>
                            <p className="text-[13px] font-medium text-P/60">{item.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-P/10 rounded-card bg-[#F8F9FA] overflow-hidden flex flex-col flex-1 min-h-0">
                    <div className="px-4 py-2 border-b border-P/10 bg-P/5">
                      <h3 className="font-h text-[13px] font-extrabold text-P/90 uppercase tracking-wider">How We Work</h3>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      {[
                        { t: "Client-facing excellence", d: "We communicate in a way that earns trust." },
                        { t: "Systems thinking", d: "We look for root causes, not just symptoms." },
                        { t: "Practical impact", d: "We measure what changed, and what will last." }
                      ].map((item, i) => (
                        <div key={i} className="p-3 border border-P/10 rounded-card bg-white flex gap-3 items-start">
                          <div className="w-2.5 h-2.5 rounded-full bg-P/20 mt-1 flex-shrink-0" />
                          <div className="flex flex-col">
                            <b className="font-h text-[13px] font-extrabold text-P/90">{item.t}</b>
                            <p className="text-[13px] font-medium text-P/60">{item.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Application Form */}
              <ApplicationForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </PageShell>
  );
};

export default Careers;
