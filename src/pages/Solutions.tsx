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
  SolutionCriteriaList,
  CardGrid,
  HeroKickerStyle
} from '../components';

const Solutions: React.FC = () => {
  useEffect(() => {
    document.title = 'SparrowBridge - Solutions';
  }, []);

  return (
    <PageShell>
      <SiteHeader />
      
      {/* Solutions Hero */}
      <Hero
        kicker={<HeroKickerStyle prefix="Solutions" />}
        title="Four ways we help leaders create lasting change."
        subtitle="We don’t treat symptoms. We help you see what’s true, align leaders around what matters, and implement change that holds."
        variant="dark"
        actions={
          <>
            <Button href="/contact" variant="primary">Start the Conversation</Button>
            <Button href="#diagnosis" variant="inverse">Explore Solutions</Button>
          </>
        }
        rightSlot={
          <aside className="w-full p-[18px] bg-white/80 border border-P/15 rounded-card flex flex-col gap-3" aria-label="Solution list">
            <div className="font-h text-[14px] font-extrabold tracking-[0.2px] text-P/90">Our four solutions</div>
            <div className="flex flex-col gap-3">
              {[
                { id: "01", title: "Incisive Diagnosis", href: "#diagnosis" },
                { id: "02", title: "Co-design & Alignment", href: "#codesign" },
                { id: "03", title: "Implementation & Integration", href: "#implement" },
                { id: "04", title: "Executive & Org Coaching", href: "#coaching" }
              ].map((item) => (
                <a key={item.id} href={item.href} className="flex items-center justify-between p-3 rounded-card bg-white/70 border border-P/15 no-underline text-P font-b text-[14px] font-bold hover:bg-white transition-colors group">
                  {item.title}
                  <span className="font-h text-[12px] font-extrabold tracking-[.6px] text-P/40 group-hover:text-A1 transition-colors">{item.id}</span>
                </a>
              ))}
            </div>
          </aside>
        }
      />

      {/* Solutions Overview: Challenge / Expect */}
      <section className="bg-[#F8F9FA] py-[48px] lg:py-[64px]">
        <Container className="flex flex-col gap-10">
          <p className="font-b text-[17px] leading-[1.65] text-P/80 max-w-[780px]">
            In any change program, leaders often have to attend to multiple solutions to help the organization perform at its peak again.
          </p>
          <CardGrid columns={2}>

            {/* Sales Transformation */}
            <div className="border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15">
                <h3 className="font-h text-[20px] font-extrabold text-P">Sales Transformation</h3>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Challenge</div>
                  <p className="font-b text-[14px] leading-[1.65] text-P/80">
                    You've missed your revenue quota targets in consecutive quarters or years and it's not clear what the issue is exactly. You can't narrow it to any single root cause but your desire is to get back to consistent on-target performance.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you can expect</div>
                  <p className="font-b text-[14px] leading-[1.65] text-P/80">
                    Incisive diagnosis of the root causes behind the performance decline and data driven solutions you can implement with us standing with you all the way through.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Transformation */}
            <div className="border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15">
                <h3 className="font-h text-[20px] font-extrabold text-P">Product Transformation</h3>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Challenge</div>
                  <p className="font-b text-[14px] leading-[1.65] text-P/80">
                    Your product team is under immense pressure to ship a product customers love. But their rate of shipping innovative solutions is not what you want. You want to turn things around but it's unclear where to get started.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you can expect</div>
                  <p className="font-b text-[14px] leading-[1.65] text-P/80">
                    Incisive diagnosis of the underlying dynamics between product managers, engineering, UX/UI design, sales and other functions impeding efficiency at scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Talent */}
            <div className="border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15">
                <h3 className="font-h text-[20px] font-extrabold text-P">Talent</h3>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Challenge</div>
                  <p className="font-b text-[14px] leading-[1.65] text-P/80">
                    Your business environment is changing and this is putting pressure on your growth but you find it difficult to keep pace with existing talent.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you can expect</div>
                  <p className="font-b text-[14px] leading-[1.65] text-P/80">
                    A partner to help you make sense of the changes in the external environment and devise and implement a talent strategy that helps you stay ahead of the changes.
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Coaching */}
            <div className="border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15">
                <h3 className="font-h text-[20px] font-extrabold text-P">Executive Coaching</h3>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Challenge</div>
                  <p className="font-b text-[14px] leading-[1.65] text-P/80">
                    You and your leadership team are making consequential decisions at the speed of light, navigating organizational dynamics that leave you exhausted each day and often, you need a thought partner.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you can expect</div>
                  <p className="font-b text-[14px] leading-[1.65] text-P/80">
                    A credentialed coach who understands organizational dynamics partnering with you to build greater self-awareness, understand destructive thought patterns and find ways to operate at your best.
                  </p>
                </div>
              </div>
            </div>

          </CardGrid>
        </Container>
      </section>

      {/* Main Body */}
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
          
          {/* Sidebar Rail */}
          <aside className="lg:sticky lg:top-28 flex flex-col gap-6">
            <div className="border border-P/15 rounded-card bg-white p-5 shadow-sm">
              <h3 className="font-h text-[16px] font-extrabold mb-2">Choose your entry point</h3>
              <p className="text-[13px] text-P/70 mb-4 leading-[1.5]">
                We recommend starting with Diagnosis, or enter midstream if you already know what’s true.
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
                <p className="col-span-full font-b text-[14px] leading-[1.6] text-P/80 -mb-2">
                  Even the most well meaning and informed executive teams can miss the finer details behind performance failures.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">When this is the right fit</h3>
                    <SolutionCriteriaList 
                      items={[
                        "You’re seeing stalled execution, revenue decline, misalignment,",
                        "Multiple “fixes” have been tried, but problems return.",
                        "Leaders disagree on what the real problem is."
                      ]}
                    />
                  </div>
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">What you receive</h3>
                    <SolutionCriteriaList 
                      items={[
                        "A clear diagnostic narrative (“what’s happening and why”) using a proprietary, award-winning instrument.",
                        "Root-cause map (the few drivers that matter most).",
                        "Recommended interventions and sequencing implementation guidance"
                      ]}
                    />
                  </div>
                </div>
                <CaseStudyCard 
                  title="Elsevier Shared Tech"
                  summary="Diagnostic work revealed cross-functional bottlenecks, unclear decision rights, and incentive misalignment, leading to a practical operating reset."
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
                <p className="col-span-full font-b text-[14px] leading-[1.6] text-P/80 -mb-2">
                  Changing human systems is hard. We help you make it meaningful.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">When this is the right fit</h3>
                    <SolutionCriteriaList 
                      items={[
                        "You know the direction, but leaders aren’t aligned on the “how.”",
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
                <p className="col-span-full font-b text-[14px] leading-[1.6] text-P/80 -mb-2">
                  Implementation is what separates courageous leaders from the rest. Increase your chance of success.
                </p>
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
                <p className="col-span-full font-b text-[14px] leading-[1.6] text-P/80 -mb-2">
                  Leaders navigate complex decisions daily, especially in a change process. We are your thought partner.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="p-5 rounded-card bg-[#FAFAFA] border border-P/10">
                    <h3 className="font-h text-[14px] font-extrabold mb-3">When this is the right fit</h3>
                    <SolutionCriteriaList 
                      items={[
                        "Leaders are under pressure and need a trusted thinking partner.",
                        "You’re navigating conflict, decision fatigue, or a credibility gap.",
                        "You need development or behavior change, not just strategy."
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
