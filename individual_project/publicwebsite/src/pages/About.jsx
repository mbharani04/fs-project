// About.jsx

import React from 'react'
import NavBar from '../components/NavBar'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <NavBar />
      <div className="pt-16">
        <div className="bg-gradient-to-r from-navy-900 to-navy-700 py-16 text-center">
          <h1 className="font-display text-4xl font-bold text-white">About JanSampark</h1>
          <p className="text-gray-300 mt-2">Our mission, vision, and the journey so far</p>
        </div>
        <AboutSection />
      </div>
      <Footer />
    </>
  )
}