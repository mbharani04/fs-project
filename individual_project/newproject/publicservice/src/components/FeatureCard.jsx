import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, description, icon: Icon, path, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover group">
      <div className={`h-2 w-full ${color}`}></div>
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gray-50 group-hover:scale-110 transition-transform duration-300`}>
          {Icon && <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 h-10">{description}</p>
        <Link 
          to={path}
          className={`inline-flex items-center text-sm font-semibold ${color.replace('bg-', 'text-')} hover:opacity-80`}
        >
          Explore <span aria-hidden="true" className="ml-1">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
