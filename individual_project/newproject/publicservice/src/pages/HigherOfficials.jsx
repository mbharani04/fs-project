import React from 'react';
import GenericPage from '../components/GenericPage';
import OfficialCard from '../components/OfficialCard';
import { officialsData } from '../data/officialsData';

const HigherOfficials = () => {
  return (
    <GenericPage 
      title="Higher Officials Directory" 
      description="Find contact details of department heads and higher officials for escalations and direct queries."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {officialsData.map(official => (
          <OfficialCard key={official.id} official={official} />
        ))}
      </div>
    </GenericPage>
  );
};

export default HigherOfficials;
