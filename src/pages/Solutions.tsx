import React, { useEffect } from 'react';
import { 
  PageShell, 
  SiteHeader, 
  Hero, 
  SectionTitle, 
  Button, 
  Footer, 
  Container,
  RailSection,
  RailLink,
  CaseStudyCard,
  SolutionCriteriaList
} from '../components';

const Solutions: React.FC = () => {
  useEffect(() => {
    document.title = 'SparrowBridge - Solutions';
  }, []);

  return (
    <PageShell>
      <SiteHeader activeLink="/solutions" />
      
      {/* Solutions Hero */}
      <Hero
        kicker="Solutions"
        title="Four ways we help leaders build what lasts."
        subtitle="We don’t treat symptoms. We help you see what’s true, align leaders around what matters, and implement change that holds."
        variant="dark"
        actions={
          <>
            <Button href="/contact" variant="primary">Start the Conversation</Button>
            <Button href="#diagnosis" variant="inverse">Explore Solutions</Button>
          </>
        }
        rightSlot={
          <aside className="bg-white/80 border border-P/15 rounded-card p-[18px] flex flex-col gap-3" aria-label="Solution list">
            <div className="font-h text-[14px] font-extrabold text-P/90">Our four solutions</div>
            <div className="flex flex-col gap-2 mt-[6px]">
              {[
                { id: "01", title: "Incisive Diagnosis", href: "#diagnosis" },
                { id: "02", title: "Co-design & Alignment", href: "#codesign" },
                { id: "03", title: "Implementation & Integration", href: "#implement" },
                { id: "04", title: "Executive & Org Coaching", href: "#coaching" }
              ].map((item) => (
                <a key={item.id} href={item.href} className="flex items-center justify-between p-3 rounded-card bg-white/65 border border-P/10 no-underline text-P font-b text-[14px] font-bold hover:bg-white transition-colors group">
                  {item.title}
                  <span className="font-h text-[12px] font-extrabold tracking-[.6px] text-P/40 group-hover:text-A1 transition-colors">{item.id}</span>
                </a>
              ))}
            </div>
          </aside>
        }
      />

      {/* Main Body */}
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
          
          {/* Sidebar Rail */}
          <aside className="lg:sticky lg:top-28 flex flex-col gap-6">
            <div className="border border-P/15 rounded-card bg-white p-5 shadow-sm">
              <h3 className="font-h text-[16px] font-extrabold mb-2">Choose your entry point</h3>
              <p className="text-[13px] text-P/70 mb-4 leading-[1.5]">
                You can start with diagnosis, or enter midstream if you already know what’s true.
              </p>
              <RailSection>
                <RailLink href="#diagnosis">Incisive Diagnosis</RailLink>
                <RailLink href="#codesign">Co-design & Alignment</RailLink>
                <RailLink href="#implement">Implementation & Integration</RailLink>
                <RailLink href="#coaching">Executive & Org Coaching</RailLink>
              </RailSection>
            </div>
          </aside>

          {/* Solutions Content */}
          <div className="flex flex-col gap-16">
            
            {/* 01 - Incisive Diagnosis */}
            <article id="diagnosis" className="scroll-mt-28 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm">
              <div className="p-5 lg:px-6 lg:py-5 bg-P/5 border-b border-P/15 flex justify-between gap-3 items-baseline">
                <SectionTitle className="lg:text-[28px]">Incisive Diagnosis</SectionTitle>
                <div className="font-h text-[12px] font-extrabold tracking-[1px] uppercase text-P/40">Solution 01</div>
              </div>
              <div className="p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-stretch">
                <div className="flex flex-col gap-6">
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">When this is the right fit</h3>
                    <SolutionCriteriaList 
                      items={[
                        "You’re seeing stalled execution, misalignment, or culture drift.",
                        "Multiple “fixes” have been tried, but problems return.",
                        "Leaders disagree on what the real problem is."
                      ]}
                    />
                  </div>
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">What you receive</h3>
                    <SolutionCriteriaList 
                      items={[
                        "A clear diagnostic narrative (“what’s happening and why”).",
                        "Root-cause map (the few drivers that matter most).",
                        "Recommended interventions and sequencing."
                      ]}
                    />
                  </div>
                </div>
                <CaseStudyCard 
                  title="Elsevier Shared Tech"
                  summary="Diagnostic work revealed cross-functional bottlenecks, unclear decision rights, and incentive misalignment—leading to a practical operating reset."
                  tags={["Diagnosis", "Operations", "Leadership"]}
                  accentColor="bg-P"
                />
              </div>
            </article>

            {/* 02 - Co-design & Alignment */}
            <article id="codesign" className="scroll-mt-28 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm">
              <div className="p-5 lg:px-6 lg:py-5 bg-P/5 border-b border-P/15 flex justify-between gap-3 items-baseline">
                <SectionTitle className="lg:text-[28px]">Co-design & Alignment</SectionTitle>
                <div className="font-h text-[12px] font-extrabold tracking-[1px] uppercase text-P/40">Solution 02</div>
              </div>
              <div className="p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-stretch">
                <div className="flex flex-col gap-6">
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">When this is the right fit</h3>
                    <SolutionCriteriaList 
                      items={[
                        "You know the direction—but leaders aren’t aligned on the “how.”",
                        "Strategy exists, but it’s not translating into execution.",
                        "Buy-in is uneven across functions."
                      ]}
                    />
                  </div>
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">What you receive</h3>
                    <SolutionCriteriaList 
                      items={[
                        "Shared language and commitments across leadership.",
                        "Co-created roadmap with roles, responsibilities, and cadence.",
                        "Decision rights and operating norms that reduce friction."
                      ]}
                    />
                  </div>
                </div>
                <CaseStudyCard 
                  title="Pure"
                  summary="Alignment work clarified priorities and accountability, reducing internal drag and speeding up execution across teams."
                  tags={["Strategy", "Alignment", "Culture"]}
                  accentColor="bg-A2"
                />
              </div>
            </article>

            {/* 03 - Implementation & Integration */}
            <article id="implement" className="scroll-mt-28 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm">
              <div className="p-5 lg:px-6 lg:py-5 bg-P/5 border-b border-P/15 flex justify-between gap-3 items-baseline">
                <SectionTitle className="lg:text-[28px]">Implementation & Integration</SectionTitle>
                <div className="font-h text-[12px] font-extrabold tracking-[1px] uppercase text-P/40">Solution 03</div>
              </div>
              <div className="p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-stretch">
                <div className="flex flex-col gap-6">
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">When this is the right fit</h3>
                    <SolutionCriteriaList 
                      items={[
                        "You have a plan, but adoption is inconsistent.",
                        "Change launches but doesn’t stick.",
                        "Managers need reinforcement systems, not more messaging."
                      ]}
                    />
                  </div>
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">What you receive</h3>
                    <SolutionCriteriaList 
                      items={[
                        "Implementation rhythms (cadence, accountability, feedback loops).",
                        "Integration into day-to-day operating practices.",
                        "Measurement: what changed, what held, what didn’t."
                      ]}
                    />
                  </div>
                </div>
                <CaseStudyCard 
                  title="Healthcare System"
                  summary="Post-merger integration support built shared operating norms and sustained behavioral change across legacy teams."
                  tags={["Integration", "Culture", "Execution"]}
                  accentColor="bg-A1"
                />
              </div>
            </article>

            {/* 04 - Executive & Org Coaching */}
            <article id="coaching" className="scroll-mt-28 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm">
              <div className="p-5 lg:px-6 lg:py-5 bg-P/5 border-b border-P/15 flex justify-between gap-3 items-baseline">
                <SectionTitle className="lg:text-[28px]">Executive & Org Coaching</SectionTitle>
                <div className="font-h text-[12px] font-extrabold tracking-[1px] uppercase text-P/40">Solution 04</div>
              </div>
              <div className="p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-stretch">
                <div className="flex flex-col gap-6">
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">When this is the right fit</h3>
                    <SolutionCriteriaList 
                      items={[
                        "Leaders are under pressure and need a trusted thinking partner.",
                        "You’re navigating conflict, decision fatigue, or a credibility gap.",
                        "You need behavior change, not just strategy."
                      ]}
                    />
                  </div>
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">What you receive</h3>
                    <SolutionCriteriaList 
                      items={[
                        "Executive coaching grounded in real organizational context.",
                        "Tools for decision-making, accountability, and conflict.",
                        "Support that reinforces the change you’re implementing."
                      ]}
                    />
                  </div>
                </div>
                <CaseStudyCard 
                  title="Leadership Team Reset"
                  summary="Coaching + operating norms helped a leadership team rebuild trust and make faster, cleaner decisions under complexity."
                  tags={["Coaching", "Leadership", "Trust"]}
                  accentColor="bg-P"
                />
              </div>
            </article>

          </div>
        </Container>
      </section>

      <Footer />
    </PageShell>
  );
};

export default Solutions;
