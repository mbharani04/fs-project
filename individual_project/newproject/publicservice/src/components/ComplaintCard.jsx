import React from 'react';
import { MapPin, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ComplaintCard = ({ complaint }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved': return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Resolved': return <CheckCircle className="w-4 h-4 mr-1" />;
      case 'In Progress': return <Clock className="w-4 h-4 mr-1" />;
      default: return <AlertCircle className="w-4 h-4 mr-1" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">
            ID: {complaint.id}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 mt-2">{complaint.problemType}</h3>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(complaint.status)}`}>
          {getStatusIcon(complaint.status)}
          {complaint.status}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{complaint.description}</p>
      
      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
        <div className="flex items-center">
          <MapPin className="w-3.5 h-3.5 mr-1" />
          {complaint.area}, {complaint.district}
        </div>
        <div className="flex items-center">
          <Calendar className="w-3.5 h-3.5 mr-1" />
          {new Date(complaint.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default ComplaintCard;
