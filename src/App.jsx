import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'
import LawSection from './components/LawSection/LawSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LawSection />
    </>
  )
}

export default App
