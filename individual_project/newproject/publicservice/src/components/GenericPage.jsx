import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GenericPage = ({ title, description, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/cards" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Cards
        </Link>
        
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <div className="w-20 h-1.5 bg-primary-600 rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl">
            {description}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default GenericPage;
