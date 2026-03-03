import React, { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Insights = lazy(() => import("./pages/Insights"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const CaseStudyElsevier = lazy(() => import("./pages/CaseStudyElsevier"));
const CaseStudySaaS = lazy(() => import("./pages/CaseStudySaaS"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const lazyFallback = (
  <div className="min-h-screen flex items-center justify-center font-b text-P/70">
    Loading…
  </div>
);

// Lightweight scroll-to-top component
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={lazyFallback}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/solutions"
            element={
              <Suspense fallback={lazyFallback}>
                <Solutions />
              </Suspense>
            }
          />
          <Route
            path="/insights"
            element={
              <Suspense fallback={lazyFallback}>
                <Insights />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={lazyFallback}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/careers"
            element={
              <Suspense fallback={lazyFallback}>
                <Careers />
              </Suspense>
            }
          />
          <Route
            path="/case-studies/elsevier"
            element={
              <Suspense fallback={lazyFallback}>
                <CaseStudyElsevier />
              </Suspense>
            }
          />
          <Route
            path="/case-studies/saas"
            element={
              <Suspense fallback={lazyFallback}>
                <CaseStudySaaS />
              </Suspense>
            }
          />
          <Route
            path="/privacy"
            element={
              <Suspense fallback={lazyFallback}>
                <Privacy />
              </Suspense>
            }
          />
          <Route
            path="/terms"
            element={
              <Suspense fallback={lazyFallback}>
                <Terms />
              </Suspense>
            }
          />
          {/* Fallback for old .html links or mismatched routes */}
          <Route
            path="/about.html"
            element={
              <Suspense fallback={lazyFallback}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/solutions.html"
            element={
              <Suspense fallback={lazyFallback}>
                <Solutions />
              </Suspense>
            }
          />
          <Route
            path="/insights.html"
            element={
              <Suspense fallback={lazyFallback}>
                <Insights />
              </Suspense>
            }
          />
          <Route
            path="/contact.html"
            element={
              <Suspense fallback={lazyFallback}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/careers.html"
            element={
              <Suspense fallback={lazyFallback}>
                <Careers />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
