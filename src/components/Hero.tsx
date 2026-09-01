import React, { useEffect, useState } from 'react'
import { Sparkles, ChevronDown, Activity, ShieldCheck } from 'lucide-react'
import { AnimatedSphere } from './AnimatedSphere'

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 lg:pt-36 pb-20 bg-[#f8fafc]">
      {/* Optimus Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] lg:w-[750px] lg:h-[750px] opacity-70 pointer-events-none z-0">
        <AnimatedSphere />
      </div>

      {/* Soft Blue background grid lines overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-blue-100/60"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-blue-100/60"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-blue-600 font-semibold">
            <span className="w-8 h-px bg-blue-300" />
            <Sparkles className="w-4 h-4 text-blue-600" />
            Interactive Digital Experiences
          </span>
        </div>

        {/* Main Headline */}
        <div className="mb-10 max-w-4xl">
          <h1
            className={`text-[clamp(2.8rem,7vw,6.5rem)] font-display leading-[0.95] tracking-tight font-extrabold text-slate-900 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We Build Digital Solutions That{' '}
            <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">
              Click & Grow.
            </span>
          </h1>
        </div>

        {/* Subtitle & Highlights */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          <p
            className={`text-xl lg:text-2xl text-slate-600 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            High-conversion web platforms, AI solutions, mobile apps, and design systems designed to captivate users and scale seamlessly.
          </p>

          {/* Action Buttons & Badges */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >

            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-3 px-8 h-14 bg-blue-600 border border-blue-600 text-white rounded-full text-base font-semibold transition-all duration-300 ease-in-out group shadow-md shadow-blue-500/20 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/15"
              >
                <span>Explore Experiences</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
