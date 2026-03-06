import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import caseStudyImage from "../assets/case-studies/home-case-study-saas.jpg";
import {
  PageShell,
  SiteHeader,
  Footer,
  Container,
  SectionTitle,
  BodyText,
  Button,
} from "../components";

const CaseStudySaaS: React.FC = () => {
  useEffect(() => {
    document.title = "SparrowBridge - Case Study: Breaking the Plateau";
  }, []);

  return (
    <PageShell>
      <SiteHeader />

      <section className="scroll-mt-28 bg-[#F8F9FA] py-16 lg:py-20">
        <Container className="max-w-[720px]">
          <Link
            to="/#cases"
            className="font-b text-[14px] text-A1 no-underline hover:underline mb-6 inline-block"
          >
            ← Client Transformations
          </Link>

          <SectionTitle className="lg:text-[34px] mb-1.5">
            Breaking the Plateau: How a SaaS Pivot Fueled Global Growth
          </SectionTitle>
          <p className="font-b text-[14px] text-P/70 mb-2">
            Technology Solution Case Study
          </p>
          <a
            href="/case-studies/sparrowbridge-saas-case-study.pdf"
            download="Breaking the Plateau – SparrowBridge Case Study.pdf"
            className="font-b text-[14px] text-A1 no-underline hover:underline inline-flex items-center gap-1.5 mb-6"
          >
            Download case study (PDF) ↓
          </a>

          <figure className="mb-10 h-[400px] -mt-2 w-full overflow-hidden rounded-card">
            <img
              src={caseStudyImage}
              alt=""
              className="h-full w-full object-cover object-bottom"
            />
          </figure>

          <div className="space-y-10">
            <div>
              <h2 className="font-h text-[20px] font-extrabold text-P mb-3">
                The Challenge
              </h2>
              <BodyText>
                A recently acquired software product—built on a one-off,
                on-premise business model—had hit a wall. With $11.5M in revenue
                concentrated mostly in Northern Europe, growth had stalled.
                Product and sales teams were pulling in different directions.
                The sales team and organization felt that the product was
                difficult to sell. Internally, it was a "high burnout, low
                progress" environment, where frustration and quiet fears of a
                permanent plateau were taking root.
              </BodyText>
            </div>

            <div>
              <h2 className="font-h text-[20px] font-extrabold text-P mb-3">
                Our Approach: Truth, Care, and Real Change
              </h2>
              <BodyText>
                We refused to chase symptoms. Sustainable transformation
                requires understanding the entire system.
              </BodyText>
              <BodyText className="mt-4">
                Our engagement began with deep listening—facilitating
                cross-functional workshops and candid conversations to surface
                what was hidden: a misaligned business model that no longer fit
                market realities, outdated pricing structures, and dysfunction
                between the product, sales, and marketing teams.
              </BodyText>
              <BodyText className="mt-4">
                We guided the organization through a strategic pivot—transitioning
                to a cloud-based model, modernizing pricing, adding critical
                global talent, and co-creating a purposeful go-to-market
                strategy. This wasn't just about hitting revenue targets—it was
                about building organizational health and resilience.
              </BodyText>
            </div>

            <div>
              <h2 className="font-h text-[20px] font-extrabold text-P mb-3">
                The Transformation: Building What Lasts
              </h2>
              <BodyText>
                In just 4.5 years, the product's trajectory shifted from flat
                to flourishing:
              </BodyText>
              <ul className="font-b text-[15px] text-P mt-4 space-y-2 list-disc pl-6">
                <li>
                  <strong>Global Market Expansion:</strong> Entered 15+ new
                  markets, establishing a strong international footprint.
                </li>
                <li>
                  <strong>Sales Force Growth:</strong> Expanded from 5 to 19 team
                  members—attracting and retaining top performers.
                </li>
                <li>
                  <strong>Cross-Functional Collaboration:</strong> Created
                  lasting alignment between sales, product, and marketing to
                  drive both customer value and revenue goals.
                </li>
                <li>
                  <strong>Support & Implementation Team Growth:</strong> Grew to
                  provide global coverage—Europe, North America and APAC.
                </li>
                <li>
                  <strong>Revenue Surge:</strong> Achieved a 9.07% CAGR over 4.5
                  years.
                </li>
                <li>
                  <strong>Customer Trust:</strong> Added 32 new customers
                  annually on average, now serving over 500.
                </li>
                <li>
                  <strong>Business Impact:</strong> Created a successful SaaS
                  sales engine.
                </li>
                <li>
                  <strong>Star Performer:</strong> Transformed into the
                  portfolio's star performer.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/#cases" variant="secondary">
              View all case studies
            </Button>
            <Button href="/contact" variant="primary">
              Start the conversation
            </Button>
            <a
              href="/case-studies/sparrowbridge-saas-case-study.pdf"
              download="Breaking the Plateau – SparrowBridge Case Study.pdf"
              className="font-b text-[14px] text-A1 no-underline hover:underline inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-[var(--color-A1)] hover:bg-A1/5 transition-colors"
            >
              Download PDF ↓
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </PageShell>
  );
};

export default CaseStudySaaS;
