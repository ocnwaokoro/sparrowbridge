import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/sparrowbridge-logo.svg';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  
  const linkClasses = "font-b text-[13px] text-white/60 no-underline hover:text-white transition-colors";

  return (
    <footer className={`bg-[#1E2D3D] px-7 lg:px-20 py-12 flex flex-col gap-8 ${className}`}>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="max-w-[300px] flex flex-col gap-4">
          <Link to="/" className="flex items-center no-underline">
            <img src={logo} alt="SparrowBridge" className="h-9 w-auto brightness-0 invert" />
          </Link>
          <p className="font-b text-[13px] leading-[1.4] text-white/60">
            Leading Through Complexity to Build What Lasts
          </p>
        </div>

        <div className="flex gap-10 lg:gap-20 flex-wrap">
          <div className="flex flex-col gap-3">
            <div className="font-h text-[13px] font-bold text-white">Company</div>
            <div className="flex flex-col gap-2">
              <Link className={linkClasses} to="/about">About Us</Link>
              <Link className={linkClasses} to="/#approach">Our Approach</Link>
              <Link className={linkClasses} to="/careers">Careers</Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="font-h text-[13px] font-bold text-white">Solutions</div>
            <div className="flex flex-col gap-2">
              <Link className={linkClasses} to="/solutions#diagnosis">Incisive Diagnosis</Link>
              <Link className={linkClasses} to="/solutions#implement">Co-design & Implement</Link>
              <Link className={linkClasses} to="/solutions#coaching">Executive Coaching</Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="font-h text-[13px] font-bold text-white">Resources</div>
            <div className="flex flex-col gap-2">
              <Link className={linkClasses} to="/insights">Insights</Link>
              <Link className={linkClasses} to="/#cases">Case Studies</Link>
              <Link className={linkClasses} to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-white/20"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
        <div className="font-b text-[13px] text-white/40">© {currentYear} SparrowBridge. All rights reserved.</div>
        <div className="flex gap-6 flex-wrap justify-center">
          <a className="font-b text-[13px] text-white/40 no-underline hover:text-white transition-colors" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <Link className="font-b text-[13px] text-white/40 no-underline hover:text-white transition-colors" to="/privacy">Privacy</Link>
          <Link className="font-b text-[13px] text-white/40 no-underline hover:text-white transition-colors" to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
};
