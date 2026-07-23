import React, { createContext, useState } from 'react';

import publicRightsImg  from '../assets/servicesimg/public_rights_card.png';
import educationImg     from '../assets/servicesimg/education_card.png';
import emergencyImg     from '../assets/servicesimg/emergency_card.png';
import farmerImg        from '../assets/servicesimg/farmarcardpic.png';
import govtSchemeImg    from '../assets/servicesimg/govt_scheme_card.png';
import electricityImg   from '../assets/servicesimg/electricity_card.png';
import waterImg         from '../assets/servicesimg/water_card.png';
import roadImg          from '../assets/servicesimg/road_card.png';

export const ServicesContext = createContext(null);

const services = [
  {
    id: 1,
    title: 'Public Rights Awareness',
    description: 'Understand your civic rights and learn how to submit complaints or requests effectively.',
    buttonText: 'Know Your Rights',
    path: '/public-rights',
    image: publicRightsImg,
  },
  {
    id: 2,
    title: 'Education Scheme Support',
    description: 'Find welfare programs for students, scholarships, and educational assistance in one place.',
    buttonText: 'Discover Plans',
    image: educationImg,
  },
  {
    id: 3,
    title: 'Emergency Public Support',
    description: 'Report urgent safety and health issues so authorities can respond quickly.',
    buttonText: 'Get Help',
    image: emergencyImg,
  },
  {
    id: 4,
    title: 'Farmer Support Services',
    description: 'Access schemes and support for agriculture, crop relief, and rural development.',
    buttonText: 'View Support',
    image: farmerImg,
  },
  {
    id: 5,
    title: 'Government Scheme Info',
    description: 'Browse the latest public welfare programs, subsidies, and eligibility details.',
    buttonText: 'See Schemes',
    image: govtSchemeImg,
  },
  {
    id: 6,
    title: 'Electricity Complaint',
    description: 'Submit power outage reports and track issue resolution with clear updates.',
    buttonText: 'Report Now',
    image: electricityImg,
  },
  {
    id: 7,
    title: 'Water Problem Reporting',
    description: 'Report water supply problems or leaks and follow progress until the issue is fixed.',
    buttonText: 'Report Issue',
    image: waterImg,
  },
  {
    id: 8,
    title: 'Road Damage Reporting',
    description: 'Notify authorities about damaged roads and infrastructure for faster repairs.',
    buttonText: 'Report Damage',
    image: roadImg,
  },
];

export const ServicesProvider = ({ children }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <ServicesContext.Provider value={{ services, showAll, setShowAll }}>
      {children}
    </ServicesContext.Provider>
  );
};
