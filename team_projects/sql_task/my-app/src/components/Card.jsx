import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full">
      <div className="text-5xl mb-4 text-center">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link
        to={link}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 text-center"
      >
        Explore {title}
      </Link>
    </div>
  );
};

export default Card;
