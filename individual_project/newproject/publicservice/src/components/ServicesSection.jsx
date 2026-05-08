import React from 'react';
import Card from './Card';
import { servicesData } from '../data/servicesData';

const ServicesSection = () => {
  // Show only first 6 services on the landing page
  const displayServices = servicesData.slice(0, 6);

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-20 h-1.5 bg-primary-600 rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl">
              A comprehensive suite of digital services designed to make your interaction with government departments seamless, secure, and transparent.
            </p>
          </div>
          <a href="/services" className="hidden md:inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 mt-4 md:mt-0">
            View All Services &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <Card key={service.id} {...service} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a href="/services" className="btn-secondary w-full">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
