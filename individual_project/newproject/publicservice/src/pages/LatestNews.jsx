import React from 'react';
import GenericPage from '../components/GenericPage';
import { Newspaper } from 'lucide-react';

const LatestNews = () => {
  return (
    <GenericPage 
      title="Latest Government News" 
      description="Stay updated with the latest announcements, press releases, and notifications from various government departments."
    >
      <div className="space-y-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-6 hover:shadow-md transition-shadow">
            <div className="hidden sm:flex flex-col items-center justify-center bg-primary-50 rounded-lg p-4 text-primary-600 min-w-[100px]">
              <span className="text-2xl font-bold">1{item}</span>
              <span className="text-sm font-medium uppercase">May</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                <Newspaper className="w-4 h-4" /> Press Information Bureau
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 cursor-pointer transition-colors">
                New Digital Infrastructure Project Launched in Urban Areas
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                The government has announced a comprehensive plan to upgrade digital infrastructure across 50 major cities to support seamless public service delivery and smart city initiatives...
              </p>
              <button className="text-sm font-semibold text-primary-600">Read Full Article &rarr;</button>
            </div>
          </div>
        ))}
      </div>
    </GenericPage>
  );
};

export default LatestNews;
