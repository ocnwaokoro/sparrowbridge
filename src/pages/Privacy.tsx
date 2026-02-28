import React, { useEffect } from 'react';
import { PageShell, SiteHeader, Footer, Container, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = 'SparrowBridge - Privacy Policy';
  }, []);

  return (
    <PageShell>
      <SiteHeader />
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="max-w-[720px]">
            <SectionTitle className="mb-2">Privacy Policy</SectionTitle>
            <p className="font-b text-[14px] text-P/60 mb-10">Last updated: February 28, 2026</p>

            <div className="flex flex-col gap-6 font-b text-[15px] leading-[1.7] text-P/90 [&_h2]:font-h [&_h2]:text-[18px] [&_h2]:font-extrabold [&_h2]:text-P [&_h2]:mt-6 [&_h2]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2 [&_li]:mb-1">
              <p>
                This Privacy Policy (“Policy”) describes how SparrowBridge Consulting (“SparrowBridge,” “we,” “us,” or “our”) collects, uses, and protects personal information when you use our website at sparrowbridgeconsulting.com (the “Site”) or when you contact us or apply for a role with us. We are committed to protecting your privacy. By using the Site or providing your information, you agree to this Policy. Our <Link to="/terms" className="text-A1 font-semibold no-underline hover:underline">Terms of Use</Link> also apply to your use of the Site.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Policy from time to time. The “Last updated” date at the top will change when we do. We encourage you to review this page periodically.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us and information that we obtain automatically when you use the Site.
              </p>
              <p>
                <strong>Information you provide:</strong> When you use our contact form, request information, subscribe to communications, or apply for a position, we may collect your name, email address, phone number, organization, role or title, message content, resume or CV, LinkedIn profile URL, and any other information you choose to provide.
              </p>
              <p>
                <strong>Information we collect automatically:</strong> When you visit the Site, we may collect certain information automatically, such as your IP address, browser type, device type, and how you navigate the Site (e.g., pages viewed, time spent). We may use cookies or similar technologies for this purpose; see the “Cookies” section below.
              </p>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Respond to your inquiries and provide the services or information you request</li>
                <li>Process and evaluate job applications and recruitment-related communications</li>
                <li>Send you newsletters or updates if you have opted in</li>
                <li>Improve the Site, our services, and how we communicate with you</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
              <p>
                We do not sell your personal information. We do not use your information for automated decision-making or profiling that produces legal or similarly significant effects.
              </p>

              <h2>How We May Share Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li><strong>Service providers</strong> who help us operate the Site or our business (e.g., hosting, email delivery, analytics), subject to confidentiality and use restrictions</li>
                <li><strong>Legal and regulatory authorities</strong> when required by law, court order, or to protect our rights, safety, or property</li>
                <li><strong>Professional advisors</strong> (e.g., lawyers, accountants) where necessary in the course of our business</li>
              </ul>
              <p>
                In the event of a merger, sale, or transfer of assets, we may share your information with the relevant third party, subject to this Policy. We do not share your information with third parties for their own marketing purposes.
              </p>

              <h2>Retention</h2>
              <p>
                We retain your personal information for as long as needed to fulfill the purposes described in this Policy, including to respond to your requests, manage recruitment, and comply with legal obligations. When we no longer need it, we will delete or anonymize it in accordance with our retention practices.
              </p>

              <h2>Cookies and Similar Technologies</h2>
              <p>
                The Site may use cookies and similar technologies to remember your preferences, understand how the Site is used, and improve your experience. A cookie is a small file stored on your device. You can control cookies through your browser settings (e.g., block or delete cookies). Note that some features of the Site may not work properly if you disable cookies. We do not use cookies for advertising or to track you across other websites.
              </p>

              <h2>Security</h2>
              <p>
                We use reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. No method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2>Links to Other Websites</h2>
              <p>
                The Site may contain links to third-party websites (e.g., LinkedIn, Calendly). We are not responsible for the privacy practices or content of those sites. We encourage you to read their privacy policies before providing any personal information.
              </p>

              <h2>Your Rights</h2>
              <p>
                Depending on where you live, you may have the right to:
              </p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Correct or update inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Receive a copy of your information in a portable format</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p>
                To exercise any of these rights, or if you have questions about how we handle your information, please contact us using the details in the “Contact Us” section below. We may need to verify your identity before responding. If you are a resident of California or other U.S. states with specific privacy laws, you may have additional rights (e.g., to opt out of certain “sales” or “sharing” of data as defined under state law). We do not sell personal information as commonly understood; to exercise any state-law rights, please contact us.
              </p>

              <h2>Children</h2>
              <p>
                The Site is not directed at children under 16. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us and we will take steps to delete it.
              </p>

              <h2>International Transfers</h2>
              <p>
                Your information may be processed in the United States or other countries where we or our service providers operate. Laws in those countries may differ from the laws where you live. By using the Site or providing your information, you consent to such transfer and processing.
              </p>

              <h2>Contact Us</h2>
              <p>
                For questions about this Privacy Policy or to exercise your privacy rights, please contact us via our <Link to="/contact" className="text-A1 font-semibold no-underline hover:underline">Contact</Link> page or the contact information provided there.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </PageShell>
  );
};

export default Privacy;
