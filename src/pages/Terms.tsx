import React, { useEffect } from 'react';
import { PageShell, SiteHeader, Footer, Container, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = 'SparrowBridge - Terms of Use';
  }, []);

  return (
    <PageShell>
      <SiteHeader />
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="max-w-[720px]">
            <SectionTitle className="mb-2">Terms of Use</SectionTitle>
            <p className="font-b text-[14px] text-P/60 mb-10">Last updated: February 28, 2026</p>

            <div className="flex flex-col gap-6 font-b text-[15px] leading-[1.7] text-P/90 [&_h2]:font-h [&_h2]:text-[18px] [&_h2]:font-extrabold [&_h2]:text-P [&_h2]:mt-6 [&_h2]:mb-2 [&_p]:mb-3">
              <p>
                SparrowBridge Consulting (“SparrowBridge,” “we,” or “us”) provides the content on this website (the “Site”) subject to the following terms and conditions (the “Terms”). We may update these Terms from time to time without prior notice; the “Last updated” date above will change when we do. By accessing or using the Site, you agree to these Terms. For how we collect, use, and protect your information, please see our <Link to="/privacy" className="text-A1 font-semibold no-underline hover:underline">Privacy Policy</Link>.
              </p>

              <h2>1. Copyrights</h2>
              <p>
                All content and functionality on the Site, including text, graphics, logos, images, and the selection and arrangement of such content, is the property of SparrowBridge or its licensors and is protected by applicable copyright laws. You may not copy, reproduce, modify, distribute, or create derivative works from any Site content without our prior written permission, except as allowed in Section 3. All rights not expressly granted are reserved.
              </p>

              <h2>2. Trademarks</h2>
              <p>
                The SparrowBridge name, logo, and any other marks used on the Site are our trademarks or those of our licensors. You may not use these marks without our written permission, including in a way that suggests endorsement or affiliation with SparrowBridge.
              </p>

              <h2>3. Use of Site Content</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable right to access and view the Site and its content for your personal, non-commercial use. You may not: (a) scrape, crawl, or use automated means to collect data from the Site without our permission; (b) mirror or frame the Site or any part of it; (c) use the Site or its content in violation of any applicable law or in a way that infringes our or any third party’s rights. This license ends automatically if you breach these Terms.
              </p>

              <h2>4. User Submissions</h2>
              <p>
                If you submit information through the Site (for example, via a contact form or application), you grant SparrowBridge a non-exclusive, royalty-free license to use that information to respond to you and to operate our business. You agree not to submit anything that is unlawful, misleading, defamatory, or that infringes anyone else’s rights. We are not obligated to publish or retain any submission and may remove content at our discretion.
              </p>

              <h2>5. Disclaimers</h2>
              <p>
                The Site and its content are provided “as is.” We do not guarantee that the Site will be error-free or uninterrupted. Nothing on the Site is intended as professional advice (including legal, tax, or investment advice). You are solely responsible for how you use the Site and any reliance on its content. To the fullest extent permitted by law, SparrowBridge disclaims all warranties, express or implied, and shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Site.
              </p>

              <h2>6. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless SparrowBridge and its officers, directors, and employees from any claims, losses, or costs arising from your use of the Site or your breach of these Terms.
              </p>

              <h2>7. Third-Party Links</h2>
              <p>
                The Site may link to third-party websites. We are not responsible for the content or practices of those sites. Use of third-party sites is at your own risk and subject to their terms and policies.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the United States and the State of New York, without regard to conflict-of-laws principles. Any dispute relating to the Site or these Terms shall be resolved in the courts of New York.
              </p>

              <h2>9. Contact</h2>
              <p>
                Questions about these Terms may be sent to us via the <Link to="/contact" className="text-A1 font-semibold no-underline hover:underline">Contact</Link> page or to the contact information provided there.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </PageShell>
  );
};

export default Terms;
