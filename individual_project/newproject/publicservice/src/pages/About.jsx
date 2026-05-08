import React from 'react';
import AboutSection from '../components/AboutSection';
import { Target, Shield, Eye, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-8">
      <AboutSection />
      
      {/* Additional Timeline or History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative border-l border-gray-200 ml-3 md:ml-0 md:pl-0 md:max-w-3xl mx-auto space-y-12">
            <div className="relative pl-8 md:pl-0">
              <div className="md:w-1/2 md:-ml-4 md:pr-12 md:text-right">
                <span className="text-primary-600 font-bold tracking-wider text-sm block mb-1">2023</span>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Foundation</h4>
                <p className="text-gray-600">The portal was conceptualized to solve the growing communication gap between citizens and local authorities.</p>
              </div>
              <div className="absolute top-0 left-0 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary-500 -translate-x-[11px] md:-translate-x-1/2 mt-1"></div>
            </div>
            
            <div className="relative pl-8 md:pl-0">
              <div className="md:w-1/2 md:ml-auto md:pl-12">
                <span className="text-primary-600 font-bold tracking-wider text-sm block mb-1">2024</span>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Digital Integration</h4>
                <p className="text-gray-600">Successfully integrated with 50+ government departments and launched the secure OTP-based authentication system.</p>
              </div>
              <div className="absolute top-0 left-0 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary-500 -translate-x-[11px] md:-translate-x-1/2 mt-1"></div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="md:w-1/2 md:-ml-4 md:pr-12 md:text-right">
                <span className="text-primary-600 font-bold tracking-wider text-sm block mb-1">2025</span>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Smart Governance</h4>
                <p className="text-gray-600">Introduced AI-based complaint routing and real-time tracking for citizens, resolving over 1 million complaints.</p>
              </div>
              <div className="absolute top-0 left-0 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary-500 -translate-x-[11px] md:-translate-x-1/2 mt-1"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
