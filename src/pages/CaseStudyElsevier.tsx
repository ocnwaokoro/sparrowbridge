import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PageShell,
  SiteHeader,
  Footer,
  Container,
  SectionTitle,
  BodyText,
  Button,
} from "../components";

const CaseStudyElsevier: React.FC = () => {
  useEffect(() => {
    document.title = "SparrowBridge - Case Study: Elsevier Shared Tech";
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

          <SectionTitle className="lg:text-[34px] mb-2">
            Case Study: Guiding a Product Team Through Strategic Growth
          </SectionTitle>
          <p className="font-b text-[14px] text-P/70 mb-10">
            Global Product Team
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="font-h text-[20px] font-extrabold text-P mb-3">
                The Challenge
              </h2>
              <BodyText>
                Our work began with an Identity and Access Management (IAM) team
                in a state of deep dysfunction. They were a team of brilliant
                people in a pattern of chaos—four leadership transitions in
                three years, no clear roadmap, and most critically, their
                platforms mainly served two of three company divisions, leaving
                a key $1 billion division as a complete "black box" with no
                relationship to the team. They were in motion, but they lacked
                momentum.
              </BodyText>
            </div>

            <div>
              <h2 className="font-h text-[20px] font-extrabold text-P mb-3">
                The Strategy
              </h2>
              <BodyText>
                Rather than imposing a solution, we started with a foundation of
                collaboration and deep listening. We guided the new leadership
                team to first understand the root of the dysfunction through a
                team-wide workshop. Next, we opened up the "black box" by
                conducting over 30 interviews with leaders in the underserved
                division. This wasn't about quick fixes; it was about surfacing
                the truth and building a strategy for engagement and service
                from the ground up. The final step was to formalize a process
                for engaging product, sales, customer support and marketing
                teams for efficient go-to-market outcomes.
              </BodyText>
            </div>

            <div>
              <h2 className="font-h text-[20px] font-extrabold text-P mb-3">
                The Transformation
              </h2>
              <BodyText>
                The outcomes were not just positive; they were redemptive. The
                team, once stalled, helped launch a first-to-market AI product
                in a record four months. That single success unlocked a 400%
                increase in products onboarding to the new identity platform. We
                helped the team expand their mandate to include API and privacy
                platforms, transforming them into a truly shared service team
                serving a global, multi-billion dollar business. The team itself
                grew by 200-300%, adding more people to critical roles like UX
                designers and researchers. This wasn't just a project; it was a
                journey from fragmentation to wholeness.
              </BodyText>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/#cases" variant="secondary">
              View all case studies
            </Button>
            <Button href="/contact" variant="primary">
              Start the conversation
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </PageShell>
  );
};

export default CaseStudyElsevier;
