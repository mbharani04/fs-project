// ServicesSection.jsx

import React, { useState } from 'react'
import { servicesData } from '../data/servicesData'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-gray-500 text-xs ml-1">{rating}</span>
    </div>
  )
}

const CATEGORY_ICONS = {
  core: '⚙️',
  info: '📖',
  support: '🛠️',
  emergency: '🚨',
}

export default function ServicesSection() {
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'core', 'info', 'support', 'emergency']

  const filtered = filter === 'all' ? servicesData : servicesData.filter((s) => s.category === filter)

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="font-display text-4xl font-bold text-navy-900 mt-2">Our Services</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Comprehensive digital services designed to connect citizens with the right government departments quickly and securely.</p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                filter === cat
                  ? 'bg-navy-800 text-white shadow-lg'
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat === 'all' ? 'All Services' : `${CATEGORY_ICONS[cat]} ${cat}`}
            </button>
          ))}
        </div>

        {/* Service cards — Amazon-style grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              {/* Card header */}
              <div className="bg-gradient-to-br from-navy-800 to-navy-950 p-6 text-center">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  service.available ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {service.available ? '● Available' : '● Unavailable'}
                </span>
              </div>

              {/* Card body */}
              <div className="p-4">
                <h3 className="font-semibold text-navy-900 text-sm leading-tight mb-2">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-3">{service.description}</p>

                <StarRating rating={service.rating} />

                <button className="w-full mt-4 bg-navy-800 hover:bg-orange-500 text-white text-xs font-semibold py-2.5 rounded-lg transition-all duration-200 group-hover:bg-orange-500">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}