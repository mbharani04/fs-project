import React from 'react';
import GenericPage from '../components/GenericPage';
import ScholarshipCard from '../components/ScholarshipCard';
import { scholarshipsData } from '../data/scholarshipsData';

const Scholarships = () => {
  return (
    <GenericPage 
      title="Scholarship Programs" 
      description="Find and apply for merit and need-based financial aid provided by the government to support your education."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarshipsData.map(scholarship => (
          <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
        ))}
      </div>
    </GenericPage>
  );
};

export default Scholarships;
