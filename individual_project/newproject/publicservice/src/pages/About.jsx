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

          <div className="relative border-r border-gray-200 mr-3 md:mr-auto md:ml-auto md:max-w-3xl mx-auto space-y-12">
            <div className="relative pr-8 md:pr-12 text-left">
              <span className="text-primary-600 font-bold tracking-wider text-sm block mb-1">2026</span>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Foundation</h4>
              <p className="text-gray-600">The portal was conceptualized to solve the growing communication gap between citizens and local authorities.</p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
