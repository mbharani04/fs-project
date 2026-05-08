import React from 'react';
import GenericPage from '../components/GenericPage';

const SimplePage = ({ title }) => {
  return (
    <GenericPage 
      title={title} 
      description={`Explore resources and information related to ${title}. This section is regularly updated with the latest announcements.`}
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Coming Soon</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          We are currently gathering the latest data from respective departments. Please check back later for updates on {title}.
        </p>
      </div>
    </GenericPage>
  );
};

export const JobOpportunities = () => <SimplePage title="Job Opportunities" />;
export const FreeEducationSchemes = () => <SimplePage title="Free Education Schemes" />;
export const Achievements = () => <SimplePage title="Government Achievements" />;
export const SafetyPurpose = () => <SimplePage title="Safety & Emergency Helplines" />;
export const MedicalFunds = () => <SimplePage title="Medical Funds & Support" />;
export const SocialServices = () => <SimplePage title="Social Services Contacts" />;
