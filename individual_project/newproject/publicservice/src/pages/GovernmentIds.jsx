import React, { useState } from 'react';
import GenericPage from '../components/GenericPage';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

const GovernmentIds = () => {
  const [selectedId, setSelectedId] = useState('aadhaar');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const idTypes = [
    { id: 'aadhaar', name: 'Aadhaar Card' },
    { id: 'pan', name: 'PAN Card' },
    { id: 'voter', name: 'Voter ID' },
    { id: 'driving', name: 'Driving License' },
    { id: 'ration', name: 'Ration Card' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      e.target.reset();
    }, 4000);
  };

  return (
    <GenericPage 
      title="Government ID Services" 
      description="Apply for new IDs, request corrections, or update your existing government identification documents easily."
    >
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">Select Document</h3>
            </div>
            <div className="p-2 space-y-1">
              {idTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedId(type.id)}
                  className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    selectedId === type.id 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {idTypes.find(t => t.id === selectedId)?.name} Services
              </h2>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-primary-600 text-white text-xs font-medium rounded-md">New Application</button>
                <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-50">Edit / Correction</button>
              </div>
            </div>

            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <p className="font-medium">Application submitted successfully! Reference ID: {Math.floor(Math.random() * 100000000)}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" required className="input-field mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input type="date" required className="input-field mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input type="text" required maxLength="10" className="input-field mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" required className="input-field mt-1" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Residential Address</label>
                  <textarea rows="3" required className="input-field mt-1"></textarea>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Supporting Proof (Address/DOB)</label>
                <div className="flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-8 hover:bg-gray-50 transition-colors">
                  <div className="text-center">
                    <UploadCloud className="mx-auto h-10 w-10 text-gray-300 mb-2" />
                    <div className="text-sm leading-6 text-gray-600">
                      <label className="relative cursor-pointer rounded-md font-semibold text-primary-600 hover:text-primary-500">
                        <span>Upload a file</span>
                        <input type="file" className="sr-only" required />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">PDF, JPG up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-100">
                <button type="submit" className="btn-primary px-8">Submit Application</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </GenericPage>
  );
};

export default GovernmentIds;
