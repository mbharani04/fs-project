import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Mail, Phone, MapPin, ArrowRight, Globe, Code, ExternalLink } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Services', to: '/services' },
    { label: 'About Us', to: '/about' },
    { label: 'Submit Complaint', to: '/reports' },
    { label: 'Gov Schemes', to: '/government-schemes' },
  ],
  Resources: [
    { label: 'ID Services', to: '/government-ids' },
    { label: 'Emergency Helplines', to: '/safety-purpose' },
    { label: 'Govt Jobs', to: '/job-opportunities' },
    { label: 'Information Cards', to: '/cards' },
  ],
};

const ContactSection = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">

      {/* CTA Banner */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to connect with your government?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join over 2 million citizens who are getting faster, transparent responses through PublicService Portal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              Create free account <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-all duration-200">
              Learn more
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                <Landmark className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-base text-white">PublicService</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              A secure and transparent platform for citizens to raise complaints and access government services easily.
            </p>
            <div className="flex gap-3">
              {[Globe, Code, ExternalLink].map((Icon, i) => (
                <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-slate-500 hover:text-slate-200 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                <MapPin className="h-4 w-4 text-slate-600 mt-0.5 flex-shrink-0" />
                Central Gov Complex, Block B, New Delhi 110001
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-500">
                <Phone className="h-4 w-4 text-slate-600 flex-shrink-0" />
                1800-11-2233 (Toll Free)
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-500">
                <Mail className="h-4 w-4 text-slate-600 flex-shrink-0" />
                support@publicservice.gov.in
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} PublicService Portal. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
