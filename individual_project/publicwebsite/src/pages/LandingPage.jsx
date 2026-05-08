// LandingPage.jsx — Main landing page

import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import Cards from './Cards'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Cards embedded />
      <Footer />
    </>
  )
}