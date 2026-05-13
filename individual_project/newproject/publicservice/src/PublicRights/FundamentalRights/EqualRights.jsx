import React, { useState } from 'react';
import { Scale, ShieldBan, Briefcase, Handshake, Medal, ChevronDown, ChevronUp } from 'lucide-react';

const EqualRights = () => {
  const [showMore, setShowMore] = useState(false);

  const articles = [
    {
      id: 14,
      title: "Equality before law",
      description: "Equal protection of laws for all persons.",
      icon: <Scale className="w-8 h-8 text-blue-600" />
    },
    {
      id: 15,
      title: "Prohibition of discrimination",
      description: "No discrimination on religion, race, caste, sex, or place of birth.",
      icon: <ShieldBan className="w-8 h-8 text-indigo-600" />
    },
    {
      id: 16,
      title: "Equality of opportunity",
      description: "Equal opportunity in public employment.",
      icon: <Briefcase className="w-8 h-8 text-purple-600" />
    },
    {
      id: 17,
      title: "Abolition of untouchability",
      description: "Untouchability abolished and its practice forbidden.",
      icon: <Handshake className="w-8 h-8 text-pink-600" />
    },
    {
      id: 18,
      title: "Abolition of titles",
      description: "No title (except military/academic) shall be conferred by the State.",
      icon: <Medal className="w-8 h-8 text-rose-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 px-8 py-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
            <div className="relative z-10">
              <Scale className="w-20 h-20 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">Right to Equality</h1>
              <p className="text-xl md:text-2xl font-medium opacity-90 drop-shadow">Articles 14–18</p>
            </div>
          </div>
          
          <div className="px-8 py-10 max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-10">
              Ensures every person is treated equally before the law, with no discrimination on grounds like caste, religion, or gender. It is the foundational pillar of a democratic and just society.
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={() => setShowMore(!showMore)}
                className="group flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1"
              >
                <span className="text-lg">{showMore ? 'Show Less' : 'Learn More'}</span>
                {showMore ? (
                  <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Articles Section */}
        <div 
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            showMore ? "max-h-[2000px] opacity-100 mt-12" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div 
                key={article.id} 
                className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start group hover:-translate-y-1`}
              >
                <div className="bg-gray-50 p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {article.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">Article {article.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EqualRights;
