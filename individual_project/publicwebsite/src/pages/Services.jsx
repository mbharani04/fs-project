// Services.jsx

import React from 'react'
import NavBar from '../components/NavBar'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <NavBar />
      <div className="pt-16">
        <div className="bg-gradient-to-r from-navy-900 to-navy-700 py-16 text-center">
          <h1 className="font-display text-4xl font-bold text-white">Our Services</h1>
          <p className="text-gray-300 mt-2">15+ citizen services for transparent digital governance</p>
        </div>
        <ServicesSection />
      </div>
      <Footer />
    </>
  )
}