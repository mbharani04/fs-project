import React from 'react';
import { Star } from 'lucide-react';

const Card = ({ title, description, icon: Icon, rating, reviews, availability }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 card-hover flex flex-col h-full group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
          {Icon && <Icon className="w-6 h-6 text-primary-600" />}
        </div>
        <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
          {availability}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-semibold text-gray-900">{rating}</span>
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>
        <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
          Read More &rarr;
        </button>
      </div>
    </div>
  );
};

export default Card;
