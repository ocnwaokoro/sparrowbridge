import React, { useEffect } from 'react';
import heroBgHome from '../assets/hero-bg-home.jpg';
import { 
  PageShell, 
  SiteHeader, 
  Hero, 
  HeroValueList,
  ValuePropCard, 
  SectionTitle, 
  BodyText, 
  AnimatedComparisonSlider,

  CTAInline, 
  Testimonial,
  ProcessStep,
  ConsultingProcessDiagram,
  CardGrid,
  CaseStudyCard,
  Button,
  Footer,
  Container
} from '../components';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'SparrowBridge - Home';
  }, []);

  return (
    <PageShell>
      <SiteHeader />
      
      {/* Hero Section */}
      <Hero
        title="Leading Through Complexity"
        subtitle="We help organizations solve the challenges that impede growth, with integrity, insight, and lasting impact."
        kicker={<HeroValueList values={["lead", "align", "challenge", "build", "decide", "grow"]} />}
        variant="dark"
        backgroundImage={heroBgHome}
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
            Every organization faces natural cycles of decline. It is the law of entropy. We partner with you to name the root causes,
            restore your momentum, and build a culture of growth that outlasts the struggle.
          </BodyText>
          
          <h3 className="font-h text-[22px] lg:text-[28px] font-semibold text-center text-P">
            Let us help you go from where you are to where you want to be…
          </h3>

          <div className="w-[1000px] max-w-full">
            <AnimatedComparisonSlider
              slides={[
              {
                from: "Creating a growth strategy that meets resistance and stalls…",
                to: "Execution with the right people and culture",
              },
              {
                from: "Inability to stem a declining sales revenue trend…",
                to: "Hitting key performance indicators with our revenue enablement program and ARC Framework™",
              },
              {
                from: "A dysfunctional leadership team",
                to: "A formidable force that implements your vision.",
              },
            ]}
            />
          </div>

          <CTAInline 
            text="Where are you in your journey? Let's build what lasts."
            ctaText="Contact us"
            href="/contact"
          />

        </Container>
      </section>

      {/* How We Work Section */}
      <section id="approach" className="scroll-mt-28 bg-P py-[48px] lg:py-[64px] flex flex-col items-center">
        <Container className="flex flex-col items-center gap-6">
          <SectionTitle variant="light" align="center">How We Work Together</SectionTitle>
          <BodyText variant="light" align="center" size="lg" className="max-w-[900px]">
            Strategy development? Culture transformation? Leadership development? Talent assessments? Sales transformation?
            Yeah, we can help you with that. But let's not treat the symptoms. We encourage you to do the deeper work
            of discovering root causes instead of tackling symptoms.
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
              <div className="font-h text-[16px] font-extrabold text-P">Our Process</div>
              <ConsultingProcessDiagram />
            </div>
          </div>

          <Testimonial 
            variant="light"
            quote="SparrowBridge worked with us to help identify ways to improve staff engagement and communication in our business, which is a legacy family hospital. We were impressed with how SparrowBridge built trust amongst the employees and drew very meaningful insights, which helped us make clear strategic decisions to improve patient and staff satisfaction. Working with SparrowBridge was very stress-free. We constantly felt they listened to the issues we brought up without judging, was very clear and direct when communicating, never losing sight of what we needed to achieve."
            author="Dotun Akinrinade"
            role="Executive Director, St. Emmanuel Hospital"
          />

        </Container>
      </section>

      {/* Client Transformations */}
      <section id="cases" className="scroll-mt-28 bg-[#F8F9FA] py-[48px] lg:py-[64px]">
        <Container className="flex flex-col items-center gap-9">
          <div className="text-center flex flex-col gap-4">
            <SectionTitle align="center" className="lg:text-[40px] font-semibold">Client Transformations</SectionTitle>
            <BodyText align="center" className="text-[18px] text-P/80">Real results from organizations that chose to do the deeper work</BodyText>
          </div>

          <CardGrid columns={2}>
            <CaseStudyCard 
              title="SaaS Company"
              summary="SaaS company struggling with full integration post-acquisition and global expansion of customer base. Through our diagnostic and strategy co-design processes, the company achieved full integration and global expansion."
              tags={["Leadership", "Culture", "Sales", "GTM Strategy"]}
              accentColor="bg-P"
            />
            <CaseStudyCard 
              title="Global Product Team"
              summary="A global shared technology product team at a large information company navigating expansion in scope."
              tags={["Strategy", "Operations"]}
              accentColor="bg-A2"
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
            Ready to start?
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
