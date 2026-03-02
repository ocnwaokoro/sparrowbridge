import React, { useEffect } from 'react';
import founderImg from '../assets/founder-kelechi-okereke.jpg';
import aboutLandscape from '../assets/about-landscape.jpg';
import { 
  PageShell, 
  SiteHeader, 
  Hero, 
  SectionTitle, 
  BodyText, 
  Button, 
  Footer, 
  Container,
  ValueCard,
  FounderBio,
  HeroKickerStyle
} from '../components';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'SparrowBridge - About';
  }, []);

  return (
    <PageShell>
      <SiteHeader />
      
      {/* About Hero */}
      <Hero
        kicker={<HeroKickerStyle prefix="About" />}
        title="We help leaders diagnose what’s real, and create lasting change."
        variant="dark"
        backgroundImage={aboutLandscape}
        actions={
          <>
            <Button href="/contact" variant="primary">Work With Us</Button>
            <Button href="#who" variant="inverse">Who We Are</Button>
          </>
        }
        rightSlot={
          <aside aria-label="What we stand for" className="w-full p-[18px] bg-white/80 border border-P/15 rounded-card flex flex-col gap-3">
            <div className="font-h text-[14px] font-extrabold tracking-[.2px] text-P/90">
              What SparrowBridge is built on
            </div>
            <div className="flex flex-col gap-3">
              <div className="p-3 bg-white/70 border border-P/15 rounded-card flex flex-col gap-1.5">
                <div className="font-b text-[14px] font-bold text-P">Truth over theater</div>
                <div className="font-b text-[15px] lg:text-[12px] leading-[1.4] text-P/75">
                  No performative strategy. We name the bottlenecks and the real constraints.
                </div>
              </div>
              <div className="p-3 bg-white/70 border border-P/15 rounded-card flex flex-col gap-1.5">
                <div className="font-b text-[14px] font-bold text-P">Integrity in the work</div>
                <div className="font-b text-[15px] lg:text-[12px] leading-[1.4] text-P/75">
                  We align action with values so change is sustainable, not cosmetic.
                </div>
              </div>
              <div className="p-3 bg-white/70 border border-P/15 rounded-card flex flex-col gap-1.5">
                <div className="font-b text-[14px] font-bold text-P">Durable capability</div>
                <div className="font-b text-[15px] lg:text-[12px] leading-[1.4] text-P/75">
                  We build internal capacity so progress holds after we leave.
                </div>
              </div>
            </div>
          </aside>
        }
      />

      {/* WHO WE ARE */}
      <section id="who" className="scroll-mt-28 bg-white py-16 lg:py-20">
        <Container>
          <div className="border border-P/15 rounded-card bg-white overflow-hidden">
            <div className="px-[18px] py-4 border-b border-P/15 bg-P/[0.03] flex items-center justify-between gap-2.5">
              <SectionTitle className="lg:text-[34px]">Who We Are</SectionTitle>
            </div>

            <div className="p-[18px] md:p-6 grid gap-6">
              <div className="grid gap-4">
                <BodyText>
                  SparrowBridge is an organization development and leadership advisory firm. We help organizations solve the challenges that prevent growth, with integrity, insight, and lasting impact.
                </BodyText>
                <BodyText>
                  Our approach blends incisive diagnostics, data-informed insight, and collaborative, human-centered solution design. Whether navigating
                  a merger/acquisition integration, strengthening a leadership team, reinvigorating a sales or product organization, or restoring a fractured
                  culture, we guide clients through honest conversations and systemic solutions that cultivate resilience, trust, and sustainable growth.
                  We bring decades of global experience in business and rigorous academic training to our clients’ challenges. We feel called to do this work;
                  therefore, we approach every client with zeal and care.
                </BodyText>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ValueCard 
                  title="Vision" 
                  variant="outline"
                  description={<i>We envision a world where every organization’s work provides a meaningful answer to the question: “Why are we here?”</i>} 
                />
                <ValueCard 
                  title="Mission" 
                  variant="outline"
                  description="We exist to help our clients unlock and amplify their value to all stakeholders." 
                />
              </div>

              <ValueCard 
                title="Purpose" 
                variant="outline"
                className="text-center"
                description={<b>We do this work in service of a higher calling, guided by faith, integrity, and care.</b>} 
              />

              <Button href="#founder" variant="primary" className="w-fit">
                Meet our founder →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FOUNDER STORY */}
      <section id="founder" className="scroll-mt-28 bg-[#F8F9FA] py-16 lg:py-20">
        <Container>
          <div className="border border-P/15 rounded-card bg-white overflow-hidden shadow-sm">
            <div className="px-[18px] py-4 border-b border-P/15 bg-P/[0.03]">
              <SectionTitle className="lg:text-[34px]">Founder & Managing Principal’s Story</SectionTitle>
            </div>

            <div className="p-[18px] md:p-6">
              <FounderBio 
                name="Kelechi"
                title="Founder & Managing Principal"
                imagePlaceholder={
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-card">
                    <img
                      src={founderImg}
                      alt="Kelechi Okereke, Founder and Managing Principal, SparrowBridge"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      width={600}
                      height={800}
                    />
                  </div>
                }
                paragraphs={[
                  "Kelechi is a seasoned strategist with over two decades of experience navigating difficult organizational shifts at Elsevier. Since founding SparrowBridge, he has brought that same discipline and insight in high impact business turnarounds to guide other institutions in identifying and shepherding lasting change.",
                  "He specializes in seeing what’s broken, restoring alignment and fostering a culture of shared ownership to drive consequential business impact. His deep faith in God fuels a calm, principled confidence, allowing him to serve as a wise guide for leaders facing their most pressing challenges."
                ]}
                details={[
                  { 
                    label: "Career Highlights", 
                    content: <>SparrowBridge Consulting, Founder & Managing Principal<br/>Elsevier, Global Sales, Special Projects, Product Management</> 
                  },
                  { 
                    label: "Certifications", 
                    content: <>Columbia University: Executive & Organizational Coaching Certification (Summer 2026)<br/>Hogan Assessment</> 
                  },
                  { 
                    label: "Education", 
                    content: <>Teachers College, Columbia University: MA Organizational Psychology<br/>Rutgers University: MA English<br/>Rutgers University: BA Psychology</> 
                  }
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="bg-P py-[48px] lg:py-[64px] text-center">
        <Container className="flex flex-col items-center gap-8">
          <SectionTitle variant="light" align="center" className="max-w-[700px] lg:text-[40px]">
            Ready to start?
          </SectionTitle>
          <BodyText variant="light" align="center" className="max-w-[600px] text-[18px]">
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

export default About;
