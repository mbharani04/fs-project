import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Shield } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Public Rights', to: '/services' },
    { label: 'Education Schemes', to: '/services' },
    { label: 'Emergency Support', to: '/services' },
    { label: 'Farmer Support', to: '/services' },
    { label: 'Government Schemes', to: '/services' },
  ],
  Platform: [
    { label: 'Home', to: '/home' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms of Service', to: '#' },
    { label: 'Cookie Policy', to: '#' },
    { label: 'Disclaimer', to: '#' },
  ],
};



const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">

      {/* ── Decorative top-glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-8">

        {/* ── Top row ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700/60">

          {/* Brand block */}
          <div className="lg:col-span-2 flex flex-col gap-5">


            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Your one-stop civic gateway — raising complaints, accessing government schemes, and connecting citizens with the services they deserve.
            </p>

            {/* Contact info */}
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-default">
                <Mail className="h-4 w-4 flex-shrink-0 text-blue-500" />
                support@publicportal.gov
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-default">
                <Phone className="h-4 w-4 flex-shrink-0 text-blue-500" />
                1800-000-PORTAL (toll-free)
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-default">
                <MapPin className="h-4 w-4 flex-shrink-0 text-blue-500" />
                New Delhi, India — 110001
              </li>
            </ul>


          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>



        {/* ── Bottom bar ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} PublicPortal. All rights reserved. A civic initiative for the people of India.</p>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            All systems operational
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
