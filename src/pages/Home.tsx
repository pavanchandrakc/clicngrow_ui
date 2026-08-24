import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { ServicesSection } from '../components/ServicesSection'
import { FeatureGrid } from '../components/FeatureGrid'
import { Footer } from '../components/Footer'

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
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
