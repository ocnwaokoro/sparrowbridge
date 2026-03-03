import React, { useEffect } from 'react';
import flowersGreenery from '../assets/solutions-hero.jpg';
import { 
  PageShell, 
  SiteHeader, 
  Hero, 
  SectionTitle, 
  Button, 
  Footer, 
  Container,
  SolutionCriteriaList,
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
        backgroundImage={flowersGreenery}
        backgroundImagePosition="top"
        actions={
          <>
            <Button href="/contact" variant="primary">Start the Conversation</Button>
            <Button href="#org-change" variant="inverse">Explore Solutions</Button>
          </>
        }
      />

      {/* Solutions Overview: Challenge / Expect */}
      <section className="bg-[#F8F9FA] py-[48px] lg:py-[64px]">
        <Container className="flex flex-col gap-10">
          <SectionTitle className="lg:text-[28px]">Selective Service Offerings</SectionTitle>
          <p className="font-b text-[17px] leading-[1.65] text-P/80 max-w-[780px]">
            In any change program, leaders often have to attend to multiple solutions to help the organization perform at its peak again. We draw from two decades of experience driving meaningful change in a corporate environment and Ivy League training to help clients in areas such as:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-[1fr_1fr] gap-8">
            {/* Row 1: 2 cards (same size as row 2 — each spans 2 cols, centered) */}
            {/* Organization Change */}
            <div id="org-change" className="scroll-mt-28 col-span-1 md:col-span-2 md:col-start-2 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15">
                <h3 className="font-h text-[20px] font-extrabold text-P">Organization Change</h3>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Challenge</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    Stakeholders are unhappy with results; growth has stalled and the root cause is unclear. Tactics haven't moved the organization forward.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you can expect</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    A partner to co-diagnose the problem and then co-design and implement the solutions that get you back on track.
                  </p>
                </div>
              </div>
            </div>

            {/* Sales Transformation */}
            <div id="sales" className="scroll-mt-28 col-span-1 md:col-span-2 md:col-start-4 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15">
                <h3 className="font-h text-[20px] font-extrabold text-P">Sales Transformation</h3>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Challenge</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    You've missed revenue targets and can't pinpoint the cause. You want to get back to consistent performance.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you can expect</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    Incisive diagnosis of root causes and data-driven solutions, with us alongside you through implementation.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: 3 cards (each spans 2 cols) */}
            {/* Product Transformation */}
            <div id="product" className="scroll-mt-28 col-span-1 md:col-span-2 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15">
                <h3 className="font-h text-[20px] font-extrabold text-P">Product Transformation</h3>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Challenge</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    Your product team is under pressure to ship; innovation rate lags and the path forward is unclear.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you can expect</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    Diagnosis of dynamics between product, engineering, UX, sales and other functions impeding efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Talent */}
            <div id="talent" className="scroll-mt-28 col-span-1 md:col-span-2 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15">
                <h3 className="font-h text-[20px] font-extrabold text-P">Talent</h3>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Challenge</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    Your environment is changing and growth is under pressure; existing talent can't keep pace.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you can expect</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    A partner to make sense of change and implement a talent strategy that keeps you ahead.
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Coaching */}
            <div id="coaching" className="scroll-mt-28 col-span-1 md:col-span-2 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15">
                <h3 className="font-h text-[20px] font-extrabold text-P">Executive Coaching</h3>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Challenge</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    Leaders make high-stakes decisions daily and navigate exhausting dynamics. You need a thought partner.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you can expect</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    A credentialed coach who understands organizational dynamics—building self-awareness and helping you operate at your best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Body - Our Process */}
      <section className="bg-white py-16 lg:py-20">
        <Container className="flex flex-col gap-10">
          <SectionTitle className="lg:text-[28px]">Our Process</SectionTitle>
          <p className="font-b text-[17px] leading-[1.65] text-P/80 max-w-[780px]">
            Whether you already know the problem, challenge or opportunity you want to tackle or you're not sure where to start, we employ our process rooted in organization development research and practice to get from where you are to where you want to be.
          </p>
          {/* Solutions Content: 6 steps — 3+3 layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-8">
            {/* Row 1: 01, 02, 03 */}
            {/* 01 - Exploration */}
            <div id="exploration" className="scroll-mt-28 col-span-1 md:col-span-2 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15 flex justify-between items-center gap-2">
                <h3 className="font-h text-[20px] font-extrabold text-P">Exploration</h3>
                <span className="font-h text-[12px] font-extrabold tracking-[1px] text-P/50">01</span>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Overview</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    We listen, clarify the problem or opportunity, and align on scope and readiness.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you receive</div>
                  <SolutionCriteriaList 
                    items={[
                      "Clarity on scope and readiness.",
                      "A path to the next phase: diagnosis or co-design."
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* 02 - Diagnosis */}
            <div id="diagnosis" className="scroll-mt-28 col-span-1 md:col-span-2 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15 flex justify-between items-center gap-2">
                <h3 className="font-h text-[20px] font-extrabold text-P">Diagnosis</h3>
                <span className="font-h text-[12px] font-extrabold tracking-[1px] text-P/50">02</span>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Overview</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    Executive teams can miss the finer details behind performance failures.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you receive</div>
                    <SolutionCriteriaList 
                      items={[
                        "A clear diagnostic narrative (“what’s happening and why”) using a proprietary, award-winning instrument.",
                        "Root-cause map (the few drivers that matter most).",
                        "Recommended interventions and sequencing implementation guidance"
                      ]}
                    />
                </div>
              </div>
            </div>

            {/* 03 - Co-design & Alignment */}
            <div id="codesign" className="scroll-mt-28 col-span-1 md:col-span-2 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15 flex justify-between items-center gap-2">
                <h3 className="font-h text-[20px] font-extrabold text-P">Co-design & Alignment</h3>
                <span className="font-h text-[12px] font-extrabold tracking-[1px] text-P/50">03</span>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Overview</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    Changing human systems is hard. We help you make it meaningful.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you receive</div>
                  <SolutionCriteriaList 
                    items={[
                      "Shared language and commitments across leadership.",
                      "Co-created roadmap with roles, responsibilities, and cadence.",
                      "Decision rights and operating norms that reduce friction."
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Row 2: 04, 05, 06 */}
            {/* 04 - Implementation & Integration */}
            <div id="implement" className="scroll-mt-28 col-span-1 md:col-span-2 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15 flex justify-between items-center gap-2">
                <h3 className="font-h text-[20px] font-extrabold text-P">Implementation & Integration</h3>
                <span className="font-h text-[12px] font-extrabold tracking-[1px] text-P/50">04</span>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Overview</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    Implementation is what separates courageous leaders from the rest.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you receive</div>
                    <SolutionCriteriaList 
                      items={[
                        "Implementation rhythms (cadence, accountability, feedback loops).",
                        "Integration into day-to-day operating practices.",
                        "Measurement: what changed, what held, what didn’t."
                      ]}
                    />
                </div>
              </div>
            </div>

            {/* 05 - Executive & Org Coaching */}
            <div id="coaching-process" className="scroll-mt-28 col-span-1 md:col-span-2 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15 flex justify-between items-center gap-2">
                <h3 className="font-h text-[20px] font-extrabold text-P">Executive & Org Coaching</h3>
                <span className="font-h text-[12px] font-extrabold tracking-[1px] text-P/50">05</span>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Overview</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    Leaders navigate complex decisions daily, especially in a change process. We are your thought partner.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you receive</div>
                    <SolutionCriteriaList 
                      items={[
                        "Executive coaching grounded in real organizational context.",
                        "Tools for decision-making, accountability, and conflict.",
                        "Support that reinforces the change you’re implementing."
                      ]}
                    />
                </div>
              </div>
            </div>

            {/* 06 - Assess */}
            <div id="assess" className="scroll-mt-28 col-span-1 md:col-span-2 row-span-1 border border-P/15 rounded-card bg-white overflow-hidden shadow-sm flex flex-col h-full min-h-0">
              <div className="px-5 py-4 bg-P/5 border-b border-P/15 flex justify-between items-center gap-2">
                <h3 className="font-h text-[20px] font-extrabold text-P">Assess</h3>
                <span className="font-h text-[12px] font-extrabold tracking-[1px] text-P/50">06</span>
              </div>
              <div className="p-5 flex flex-col gap-5 flex-1 min-h-0">
                <div className="flex flex-col gap-2 min-h-[72px]">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A1">Overview</div>
                  <p className="font-b text-[15px] lg:text-[14px] leading-[1.65] text-P/80">
                    We measure progress, learn, and iterate so your change holds.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-h text-[11px] font-extrabold tracking-[1px] uppercase text-A2">What you receive</div>
                  <SolutionCriteriaList 
                    items={[
                      "Alignment on progress metrics",
                      "After action review sessions",
                      "Refined action steps"
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </PageShell>
  );
};

export default Solutions;
