import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.mjs?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { PageShell, SiteHeader, Footer, Container } from "../components";

const PDF_URL = "/case-studies/saas-case-study.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const CaseStudySaaS: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "SparrowBridge - Case Study: SaaS Company";
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => setPageWidth(el.getBoundingClientRect().width);
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onDocumentLoadSuccess = ({ numPages: n }: { numPages: number }) => {
    setNumPages(n);
  };

  return (
    <PageShell>
      <SiteHeader />

      <section className="scroll-mt-28 bg-[#F8F9FA] py-6 lg:py-8 px-7 lg:px-20">
        <Container>
          <Link
            to="/#cases"
            className="font-b text-[14px] text-A1 no-underline hover:underline mb-3 inline-block"
          >
            ← Client Transformations
          </Link>
          <h1 className="font-h text-[22px] lg:text-[26px] font-extrabold text-P mb-1">
            Case Study: SaaS Company
          </h1>
          <p className="font-b text-[13px] text-P/70 mb-4">
            Full integration post-acquisition and global expansion
          </p>
        </Container>

        <Container>
          <div ref={containerRef} className="w-full bg-white">
            <Document
              file={PDF_URL}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <p className="font-b text-P/70 py-12 text-center">
                  Loading PDF…
                </p>
              }
              error={
                <p className="font-b text-P/70 py-12 text-center">
                  Failed to load PDF. You can{" "}
                  <a
                    href={PDF_URL}
                    className="text-A1 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    open it in a new tab
                  </a>
                  .
                </p>
              }
            >
              {numPages !== null &&
                Array.from(new Array(numPages), (_, i) => (
                  <Page
                    key={`page-${i + 1}`}
                    pageNumber={i + 1}
                    width={pageWidth}
                    className="!w-full !max-w-full mb-0"
                    renderTextLayer
                    renderAnnotationLayer
                  />
                ))}
            </Document>
          </div>
        </Container>
      </section>

      <Footer />
    </PageShell>
  );
};

export default CaseStudySaaS;
