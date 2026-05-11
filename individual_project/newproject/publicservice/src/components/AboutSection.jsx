import React from 'react';
import { Target, Eye, Shield, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-3 bg-gray-80" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About PublicService Portal</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5  items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bridging the Gap Between Citizens and Government</h3>
            <div className="space-y-2 text-gray-600 text-lg leading-relaxed">
              <p>
                Our platform was created to bridge the gap between citizens and government authorities by providing a safe, simple, and transparent way for people
                to raise complaints and access important public services. Many public issues such as road damage, water supply problems, electricity failures, women’s safety concerns, farmer-related issues, education support, scholarship assistance, medical fund requests, 
                and social service donations are often delayed because of poor communication and lack of transparency. This website helps citizens directly connect with the concerned government departments for faster response and better accountability.
              </p>
              <p>
              In addition to complaint management, the platform also supports government-related services such as applying for forms, correcting errors in government IDs like Aadhaar, PAN, voter ID, ration card, and driving license details through an easy online process.
              Our main goal is to ensure quick attention, secure communication, transparency, and efficient action from responsible authorities while building trust between the public and the government.  
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-sm text-gray-500">To build trust among citizens through a transparent, safe, and easy-to-use digital platform.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center translate-y-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
              <p className="text-sm text-gray-500">Encouraging accountability, public participation, and smart governance for a better future.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Safe & Secure</h4>
              <p className="text-sm text-gray-500">OTP verified authentication and secure data handling for peace of mind.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center translate-y-8">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Public Trust</h4>
              <p className="text-sm text-gray-500">Directly connecting millions of citizens to actionable government support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
