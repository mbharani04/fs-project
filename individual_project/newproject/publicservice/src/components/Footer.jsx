import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="h-8 w-8 text-primary-400" />
              <span className="font-bold text-xl text-white">PublicService</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              A secure and transparent platform for citizens to raise complaints and access government services easily.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Facebook">
                <span className="font-medium">FB</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Twitter">
                <span className="font-medium">TW</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
                <span className="font-medium">IG</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/cards" className="text-sm hover:text-primary-400 transition-colors">Information Cards</Link></li>
              <li><Link to="/reports" className="text-sm hover:text-primary-400 transition-colors">Submit Complaint</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Important Services</h3>
            <ul className="space-y-2">
              <li><Link to="/government-schemes" className="text-sm hover:text-primary-400 transition-colors">Gov Schemes</Link></li>
              <li><Link to="/government-ids" className="text-sm hover:text-primary-400 transition-colors">ID Services</Link></li>
              <li><Link to="/safety-purpose" className="text-sm hover:text-primary-400 transition-colors">Emergency Helplines</Link></li>
              <li><Link to="/job-opportunities" className="text-sm hover:text-primary-400 transition-colors">Govt Jobs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">Central Gov Complex, Block B, New Delhi, 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">1800-11-2233 (Toll Free)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm">support@publicservice.gov.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PublicService Portal. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
