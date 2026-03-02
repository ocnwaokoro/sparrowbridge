import React, { useEffect } from 'react';
import heroBgHome from '../assets/hero-bg-home.jpg';
import caseStudySaas from '../assets/case-study-saas.jpg';
import caseStudyGlobalProduct from '../assets/case-study-global-product.jpg';
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
      <section className="bg-white py-8 lg:py-[48px] xl:py-[64px] flex flex-col items-center">
        <Container className="flex flex-col items-center gap-4 lg:gap-6 w-full">
          <SectionTitle align="center">Challenges We Help You Navigate</SectionTitle>
          <BodyText align="center" size="lg" className="max-w-[900px]">
            Every organization faces natural cycles of decline. It is the law of entropy. We partner with you to name the root causes,
            restore your momentum, and build a culture of growth that outlasts the struggle.
          </BodyText>
          
          <h3 className="font-h text-[20px] lg:text-[28px] font-semibold text-center text-P px-2">
            Let us help you go from where you are to where you want to be…
          </h3>

          <div className="w-full max-w-4xl">
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
            text="Where are you in your journey? Together we build what lasts."
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

          <div className="w-full max-w-xl mx-auto">
            <div className="p-3 bg-white border border-P/15 rounded-card flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-h text-[18px] lg:text-[20px] font-extrabold text-P">Our Process</div>
                <p className="font-b text-[13px] text-P/70 whitespace-nowrap">Hover over each step for more</p>
              </div>
              <div className="flex-1 min-h-[320px] flex items-center justify-center">
                <ConsultingProcessDiagram />
              </div>
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
              href="https://drive.google.com/file/d/17Dda_qUn8pyZucjsxVkDaLPYult5PZmL/view"
              imagePlaceholder={<img src={caseStudySaas} alt="" className="w-full h-full object-cover object-center" />}
            />
            <CaseStudyCard 
              title="Global Product Team"
              summary="A global shared technology product team at a large information company navigating expansion in scope."
              tags={["Strategy", "Operations"]}
              accentColor="bg-A2"
              href="/case-studies/elsevier"
              imagePlaceholder={<img src={caseStudyGlobalProduct} alt="" className="w-full h-full object-cover object-center" />}
            />
          </CardGrid>
        </Container>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="scroll-mt-28 bg-P py-[48px] lg:py-[64px]">
        <Container className="flex flex-col items-center justify-center gap-8 text-center w-full max-w-3xl mx-auto">
          <SectionTitle variant="light" align="center" className="max-w-[700px] lg:text-[40px]">
            Ready to start?
          </SectionTitle>
          <BodyText variant="light" align="center" className="max-w-[600px] text-[18px]">
            Let's start a conversation about your organization's challenges and opportunities.
          </BodyText>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
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
