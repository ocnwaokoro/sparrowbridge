import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Lightweight scroll-to-top component
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
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
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Fallback for old .html links or mismatched routes */}
          <Route path="/about.html" element={<About />} />
          <Route path="/solutions.html" element={<Solutions />} />
          <Route path="/insights.html" element={<Insights />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/careers.html" element={<Careers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
