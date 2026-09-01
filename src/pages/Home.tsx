import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { ServicesSection } from '../components/ServicesSection'
import { FeatureGrid } from '../components/FeatureGrid'
import { Footer } from '../components/Footer'

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden noise-overlay bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <div>
        <Navbar />
        <main>
          <Hero />
          <ServicesSection />
          <FeatureGrid />
        </main>
      </div>
      <Footer />
    </div>
  )
}
