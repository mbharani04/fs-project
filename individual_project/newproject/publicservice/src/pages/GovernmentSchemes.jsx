import React from 'react';
import GenericPage from '../components/GenericPage';
import { schemesData } from '../data/schemesData';
import { Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';

const GovernmentSchemes = () => {
  return (
    <GenericPage 
      title="Government Schemes" 
      description="Explore various central and state government welfare schemes designed for citizen empowerment and financial security."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {schemesData.map(scheme => (
          <div key={scheme.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 card-hover">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-green-50 rounded-lg text-green-600">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{scheme.title}</h3>
                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {scheme.category}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6">{scheme.description}</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium text-gray-800">Eligibility:</span> {scheme.eligibility}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium text-gray-800">Benefits:</span> {scheme.benefits}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-red-600">
                Deadline: {scheme.deadline}
              </span>
              <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 group">
                View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </GenericPage>
  );
};

export default GovernmentSchemes;
