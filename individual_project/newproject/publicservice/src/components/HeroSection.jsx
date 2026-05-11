import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-gradient-to-b from-primary-50 to-white rounded-b-[100%] z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6 animate-fade-in">
          <ShieldCheck className="w-4 h-4" /> Secure & Transparent Digital Governance
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 animate-fade-in animate-delay-100">
          Empowering Citizens for a <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
            Better Tomorrow
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 animate-fade-in animate-delay-200">
          A unified portal for secure public complaint registration, rapid government action, and transparent access to welfare schemes and rights.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-300">
          <Link to="/services" className="w-full sm:w-auto btn-secondary px-8 py-3.5 text-base group">
            Explore Services 
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500 animate-fade-in animate-delay-300">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> OTP Verified</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> End-to-End Encrypted</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Real-time Tracking</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
