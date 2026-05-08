import React from 'react';
import { mainCardsData } from '../data/cardsData';
import FeatureCard from '../components/FeatureCard';

const Cards = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Information Hub</h1>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access essential government resources, track public data, and stay informed about your rights and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mainCardsData.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
