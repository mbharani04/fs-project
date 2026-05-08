// Cards.jsx — Info Hub with all cards

import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { cardsData } from '../data/cardsData'

export default function Cards({ embedded = false }) {
  const content = (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!embedded && (
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Information Hub</span>
            <h2 className="font-display text-4xl font-bold text-navy-900 mt-2">Explore Services & Resources</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Access government schemes, scholarships, safety helplines, ID services, and much more — all in one place.</p>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        {embedded && (
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Quick Access</span>
            <h2 className="font-display text-3xl font-bold text-navy-900 mt-2">Explore All Resources</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cardsData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  )

  if (embedded) return content

  return (
    <>
      <NavBar />
      <div className="pt-16">
        <div className="bg-gradient-to-r from-navy-900 to-navy-700 py-16 text-center">
          <h1 className="font-display text-4xl font-bold text-white">Information Hub</h1>
          <p className="text-gray-300 mt-2">All citizen services and resources in one place</p>
        </div>
        {content}
      </div>
      <Footer />
    </>
  )
}