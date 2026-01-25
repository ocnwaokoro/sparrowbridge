import React from 'react';
import { 
  PageShell, 
  SiteHeader, 
  Hero, 
  HeroValueList, 
  ValuePropCard, 
  SectionTitle, 
  BodyText, 
  ComparisonTable, 
  CTAInline, 
  Testimonial,
  ProcessStep,
  ProcessDiagramNode,
  ProcessConnector,
  CardGrid,
  CaseStudyCard,
  Button,
  Footer,
  Container
} from '../components';

const Home: React.FC = () => {
  return (
    <PageShell>
      <SiteHeader activeLink="/" />
      
      {/* Hero Section */}
      <Hero
        title="Leading Through Complexity to Build What Lasts"
        subtitle="We help organizations solve the challenges that prevent growth—with integrity, insight, and lasting impact."
        kicker="The courage to lead · align · change · grow · rebuild · flourish"
        variant="dark"
        actions={
          <>
            <Button href="/contact" variant="primary">Start the Conversation</Button>
            <Button href="#approach" variant="inverse">Read Our Approach</Button>
          </>
        }
        rightSlot={
          <aside className="w-full p-[18px] bg-white/80 border border-P/15 rounded-card flex flex-col gap-3">
            <div className="font-h text-[14px] font-extrabold tracking-[0.2px] text-P/90">
              What leaders come to SparrowBridge for
            </div>
            <div className="flex flex-col gap-3">
              <ValuePropCard 
                title="Root-cause diagnosis" 
                description="Clarify what's actually blocking performance." 
              />
              <ValuePropCard 
                title="Alignment & culture" 
                description="Restore momentum across teams and functions." 
              />
              <ValuePropCard 
                title="Leadership capacity" 
                description="Strengthen decision-making under complexity." 
              />
              <ValuePropCard 
                title="Change that holds" 
                description="Implement and integrate durable practices." 
              />
            </div>
          </aside>
        }
      />

      {/* Override kicker for Homepage Hero specific style */}
      {/* Note: In a real implementation, I'd pass HeroValueList to Hero's kicker prop if needed, 
          but the componentized Hero already handles the standard kicker. 
          The homepage has a very specific kicker with dots. */}

      {/* Challenges Section */}
      <section className="bg-white py-[48px] lg:py-[64px] flex flex-col items-center">
        <Container className="flex flex-col items-center gap-6">
          <SectionTitle align="center">Challenges We Help You Navigate</SectionTitle>
          <BodyText align="center" size="lg" className="max-w-[900px]">
            Every organization faces natural cycles of decline—it is the law of entropy. We partner with you to name the root causes,
            restore your momentum, and build a culture of growth that outlasts the struggle.
          </BodyText>
          
          <h3 className="font-h text-[22px] lg:text-[28px] font-semibold text-center text-P">
            Let us help you go from:
          </h3>

          <ComparisonTable 
            rows={[
              { 
                from: "Creating a great growth strategy and then asking \"now what?\"", 
                to: "Execution with the right culture and people." 
              },
              { 
                from: "Inability to stem a declining sales revenue trend", 
                to: "Hitting key performance indicators with our ARC Framework™" 
              },
              { 
                from: "Dysfunctional team(s) unable to align with other key functions", 
                to: "Empowering team members with clear vision and a culture of support" 
              },
              { 
                from: "A barely effective leadership team", 
                to: "A formidable force that implements your vision." 
              }
            ]}
          />

          <CTAInline 
            text="Where are you in your journey? Let's build what lasts—together."
            ctaText="Contact us"
            href="/contact"
          />

          <Testimonial 
            quote="SparrowBridge helped us identify the root causes of our organizational challenges and guided us through a transformation that has fundamentally changed how we operate."
            author="Client"
            role="ISN Medical"
          />
        </Container>
      </section>

      {/* How We Work Section */}
      <section id="approach" className="scroll-mt-28 bg-P py-[48px] lg:py-[64px] flex flex-col items-center">
        <Container className="flex flex-col items-center gap-6">
          <SectionTitle variant="light" align="center">How We Work Together</SectionTitle>
          <BodyText variant="light" align="center" size="lg" className="max-w-[900px]">
            Strategy development? Culture transformation? Leadership development? Talent assessments? Sales transformation?
            Yeah, we can help you with that. But let's not treat the symptoms. Let's do the deeper work of discovering the root cause
            of your performance issues.
          </BodyText>

          <div className="flex flex-col lg:flex-row gap-[20px] justify-center items-stretch w-full">
            {/* Process card */}
            <div className="w-full lg:w-[550px] p-[18px] bg-white border border-P/15 rounded-card flex flex-col gap-[14px]">
              <div className="font-h text-[16px] font-extrabold text-P">Engagement Phases</div>
              <div className="flex flex-col gap-1.5">
                <ProcessStep number={1} title="Exploration" description="Initial consultation to learn about, clarify, and confirm your problem, challenge, or opportunity." />
                <ProcessStep number={2} title="Diagnostic Phase" description="In-depth data collection and analysis." />
                <ProcessStep number={3} title="Strategy Phase" description="Co-created transformation roadmaps." />
                <ProcessStep number={4} title="Implementation Phase" description="Coaching & change facilitation." />
                <ProcessStep number={5} title="Integration Phase" description="Embedding sustainable practices." />
                <ProcessStep number={6} title="Assess" description="Measure progress, learn, and reinforce what will last." />
              </div>
            </div>

            {/* Diagram card */}
            <div className="w-full lg:w-[400px] p-[18px] bg-white border border-P/15 rounded-card flex flex-col gap-[14px]">
              <div className="font-h text-[16px] font-extrabold text-P">Process Diagram</div>
              <div className="flex flex-col gap-1.5">
                <ProcessDiagramNode title="Diagnose" description="Reveal hidden dynamics and bottlenecks." />
                <ProcessConnector />
                <ProcessDiagramNode title="Co-design" description="Build alignment through participation." />
                <ProcessConnector />
                <ProcessDiagramNode title="Coaching (Center)" description="Wise guidance for leaders under pressure." isAccent />
                <ProcessConnector />
                <ProcessDiagramNode title="Implement" description="Move through resistance with clarity." />
                <ProcessConnector />
                <ProcessDiagramNode title="Assess" description="Measure what changed—and what will last." />
              </div>
            </div>
          </div>

          <Testimonial 
            variant="light"
            quote="SparrowBridge brought clarity to our leadership challenges and helped us build a cohesive team that now drives results together."
            author="Client"
            role="St. Emmanuel Hospital"
          />

          <div className="w-full max-w-[800px] p-[14px] bg-white/10 border border-white/10 rounded-btn">
            <div className="font-b text-[14px] font-semibold text-white">Case study example: Elsevier Shared Tech</div>
          </div>
        </Container>
      </section>

      {/* Client Transformations */}
      <section id="cases" className="scroll-mt-28 bg-[#F8F9FA] py-[48px] lg:py-[64px]">
        <Container className="flex flex-col items-center gap-9">
          <div className="text-center flex flex-col gap-4">
            <SectionTitle align="center" className="lg:text-[40px] font-semibold">Client Transformations</SectionTitle>
            <BodyText align="center" className="text-[18px] text-P/80">Real results from organizations that chose to do the deeper work</BodyText>
          </div>

          <CardGrid columns={3}>
            <CaseStudyCard 
              title="Pure"
              summary="A SaaS company struggling with leadership alignment and declining team morale. Through our diagnostic process, we uncovered systemic communication breakdowns and implemented a sustainable leadership development program."
              tags={["Leadership", "Culture"]}
              accentColor="bg-P"
            />
            <CaseStudyCard 
              title="Elsevier Shared Tech"
              summary="A technology division navigating complex cross-functional dependencies and integration challenges. We facilitated alignment workshops and established sustainable collaboration frameworks."
              tags={["Strategy", "Operations"]}
              accentColor="bg-A2"
            />
            <CaseStudyCard 
              title="Healthcare System"
              summary="A regional healthcare provider facing post-merger integration challenges and cultural misalignment. We designed and facilitated a comprehensive integration strategy that honored both legacy cultures."
              tags={["Culture", "M&A"]}
              accentColor="bg-A1"
            />
          </CardGrid>
        </Container>
      </section>

      {/* Featured Insights */}
      <section className="bg-white py-[48px] lg:py-[64px]">
        <Container className="flex flex-col items-center gap-9">
          <div className="text-center flex flex-col gap-4">
            <SectionTitle align="center" className="lg:text-[40px] font-semibold">Featured Insights</SectionTitle>
            <BodyText align="center" className="text-[18px] text-P/80">Wisdom in Practice</BodyText>
          </div>

          <CardGrid columns={3}>
            <div className="p-6 bg-white border border-P/15 rounded-card flex flex-col gap-4">
              <div className="font-b text-[12px] font-bold tracking-[1px] text-A1">LEADERSHIP</div>
              <h3 className="font-h text-[20px] font-semibold leading-[1.3] text-P">The Myth of the One Big Move in Organizational Change</h3>
              <p className="font-b text-[14px] leading-[1.5] text-P/80">Why incremental, sustained effort beats grand transformation every time.</p>
              <a href="#" className="font-b text-[14px] font-semibold text-A1 no-underline">Read more →</a>
            </div>
            <div className="p-6 bg-white border border-P/15 rounded-card flex flex-col gap-4">
              <div className="font-b text-[12px] font-bold tracking-[1px] text-A2">FAITH & BUSINESS</div>
              <h3 className="font-h text-[20px] font-semibold leading-[1.3] text-P">Leading with Soul in a Systems World</h3>
              <p className="font-b text-[14px] leading-[1.5] text-P/80">How faith-informed leadership creates more resilient organizations.</p>
              <a href="#" className="font-b text-[14px] font-semibold text-A1 no-underline">Read more →</a>
            </div>
            <div className="p-6 bg-white border border-P/15 rounded-card flex flex-col gap-4">
              <div className="font-b text-[12px] font-bold tracking-[1px] text-P">CULTURE</div>
              <h3 className="font-h text-[20px] font-semibold leading-[1.3] text-P">Why Smart People Fail at Culture Transformation</h3>
              <p className="font-b text-[14px] leading-[1.5] text-P/80">The hidden dynamics that derail even the best-intentioned change efforts.</p>
              <a href="#" className="font-b text-[14px] font-semibold text-A1 no-underline">Read more →</a>
            </div>
          </CardGrid>

          <Button href="/insights" variant="secondary" className="px-8 py-4 text-[16px] border-2">
            View All Insights
          </Button>
        </Container>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="scroll-mt-28 bg-P py-[48px] lg:py-[64px] text-center">
        <Container className="flex flex-col items-center gap-8">
          <SectionTitle variant="light" align="center" className="max-w-[700px] lg:text-[40px]">
            Ready to Build What Lasts — Together?
          </SectionTitle>
          <BodyText variant="light" className="max-w-[600px] text-[18px]">
            Let's start a conversation about your organization's challenges and opportunities.
          </BodyText>
          <div className="flex flex-col md:flex-row gap-3">
            <Button href="/contact" variant="primary" className="px-8 py-4 text-[16px]">Contact Us</Button>
            <Button href="/contact" variant="inverse" className="px-8 py-4 text-[16px] border-2">Schedule a Call</Button>
          </div>
        </Container>
      </section>

      <Footer />
    </PageShell>
  );
};

export default Home;
