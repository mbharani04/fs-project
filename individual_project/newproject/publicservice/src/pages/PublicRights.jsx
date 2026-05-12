import React from 'react';
import { Link } from 'react-router-dom';
import GenericPage from '../components/GenericPage';
import { ShieldCheck, Info } from 'lucide-react';

const PublicRights = () => {
  const rights = [
    { title: "Fundamental Rights", desc: "Equality before law and equal protection of laws.", link: "/equal-rights" },
    { title: "Women rights", desc: "Freedom of speech, expression, assembly, and movement.", link: "#" },
    { title: "Public Safety Rights", desc: "Prohibition of human trafficking and forced labor.", link: "#" },
    { title: "Politics information", desc: "Freedom of conscience and free profession of religion.", link: "#" },
    { title: "Right to Education (RTE)", desc: "Protection of interests of minorities.", link: "#" },
    { title: "Child Rights", desc: "Right to move courts for enforcement of fundamental rights.", link: "#" }
  ];

  return (
    <GenericPage
      title="Public Rights Awareness"
      description="Understand your fundamental rights as a citizen. Knowledge is your strongest shield."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rights.map((right, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group flex flex-col">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{right.title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-1">{right.desc}</p>
            <Link to={right.link} className="inline-block mt-auto">
              <button className="text-sm font-semibold text-purple-600 flex items-center gap-1 hover:text-purple-800 transition-colors">
                <Info className="w-4 h-4" /> Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </GenericPage>
  );
};

export default PublicRights;
