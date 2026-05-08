import React from 'react';
import { IndianRupee, CalendarDays, CheckCircle2 } from 'lucide-react';

const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 card-hover relative overflow-hidden">
      {scholarship.status === 'Open' && (
        <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
          Active
        </div>
      )}
      
      <h3 className="font-bold text-lg text-gray-900 mb-1 pr-16">{scholarship.title}</h3>
      <p className="text-sm text-gray-500 mb-4 font-medium">{scholarship.department}</p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <CheckCircle2 className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
          <span><span className="font-medium text-gray-800">Eligibility:</span> {scholarship.eligibility}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <IndianRupee className="w-4 h-4 text-primary-500 flex-shrink-0" />
          <span><span className="font-medium text-gray-800">Amount:</span> {scholarship.amount}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <CalendarDays className="w-4 h-4 text-primary-500 flex-shrink-0" />
          <span><span className="font-medium text-gray-800">Deadline:</span> {scholarship.deadline}</span>
        </div>
      </div>
      
      <button className="w-full btn-primary">
        Apply Now
      </button>
    </div>
  );
};

export default ScholarshipCard;
