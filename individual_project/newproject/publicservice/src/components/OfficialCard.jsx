import React from 'react';
import { Mail, Phone, Building } from 'lucide-react';

const OfficialCard = ({ official }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={official.image} 
            alt={official.name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-primary-100"
          />
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{official.name}</h3>
            <p className="text-primary-600 font-medium text-sm">{official.position}</p>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Building className="w-4 h-4 text-gray-400" />
            <span>{official.department}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-gray-400" />
            <span>{official.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-gray-400" />
            <span>{official.email}</span>
          </div>
        </div>
        
        <button className="w-full btn-secondary text-sm">
          Register Direct Complaint
        </button>
      </div>
    </div>
  );
};

export default OfficialCard;
