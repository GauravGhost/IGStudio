import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'
import LawSection from './components/LawSection/LawSection'
import TestimonialSection from './components/TestimonialSection/TestimonialSection'
import OurTeamSection from './components/OurTeamSection/OurTeamSection'
import FaqSection from './components/FaqSection/FaqSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LawSection />
      <TestimonialSection />
      <OurTeamSection />
      <FaqSection />
    </>
  )
}

export default App
