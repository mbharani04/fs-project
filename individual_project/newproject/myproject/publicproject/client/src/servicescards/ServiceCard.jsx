import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BorderGlow from './BorderGlow';

const ServiceCard = ({ title, description, buttonText, image, path }) => {
  const isKnowYourRights = buttonText === 'Know Your Rights';

  return (
    <BorderGlow
      backgroundColor="#ffffff"
      glowColor="220 80 65"
      borderRadius={24}
      glowRadius={36}
      glowIntensity={1.1}
      edgeSensitivity={28}
      coneSpread={22}
      animated={false}
      colors={['#818cf8', '#38bdf8', '#a78bfa']}
      fillOpacity={0.25}
      className="h-full"
    >
      <article className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden">

        {/* ── Card Image ── */}
        {image && (
          <div className="relative w-full h-48 overflow-hidden bg-slate-100 flex-shrink-0">
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                isKnowYourRights ? 'object-top' : 'object-center'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {/* ── No Image Fallback ── */}
        {!image && (
          <div className="flex items-center justify-center w-full h-24 bg-gradient-to-br from-blue-50 to-blue-100 flex-shrink-0">
            <span className="text-4xl font-extrabold text-blue-400 select-none">
              {title?.charAt(0) ?? 'S'}
            </span>
          </div>
        )}

        {/* ── Card Body ── */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="mb-2 text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors duration-200">
            {title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-slate-500 flex-1">
            {description}
          </p>

          {/* ── Know Your Rights: Wavy UIverse button ── */}
          {isKnowYourRights && path && (
            <Link to={path} className="btn-know-rights">
              <span>{buttonText}</span>
              <ArrowRight size={16} />
            </Link>
          )}

          {/* ── All other buttons with path ── */}
          {!isKnowYourRights && path && (
            <Link
              to={path}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-blue-300/50 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              {buttonText || 'Learn More'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}

          {/* ── No path: plain button ── */}
          {!path && (
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200">
              {buttonText || 'Learn More'}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </article>
    </BorderGlow>
  );
};

export default ServiceCard;
