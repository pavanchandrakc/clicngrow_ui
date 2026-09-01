import React from 'react'
import { Card } from './Card'
import { WebScene } from './scenes/WebScene'
import { AiScene } from './scenes/AiScene'
import { AppScene } from './scenes/AppScene'
import { DesignScene } from './scenes/DesignScene'

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col gap-16">
        {/* Section Header with White & Blue Theme */}
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-3 text-xs font-mono text-blue-600 font-semibold uppercase tracking-widest">
            <span className="w-8 h-px bg-blue-300" />
            Capabilities & Services
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight font-extrabold text-slate-900">
            Hover. Watch.{' '}
            <span className="text-blue-600">Interact.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl">
            Every Bento block features real-time code widgets and interactive previews.
          </p>
        </div>

        {/* Bento Grid (Asymmetrical Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bento Box 1 - Web Experiences (2 Cols) */}
          <Card
            title="Web Experiences"
            description="Fast, custom web applications built with modern frontend architectures and live reactive components."
            hint="Interactive demo"
            pillLabel="WEB"
            scene={<WebScene />}
            colSpan="lg:col-span-2"
          />

          {/* Bento Box 2 - AI Solutions (1 Col) */}
          <Card
            title="AI Solutions"
            description="Interactive AI workflows, generative agents, and speech integration."
            hint="Try AI Demo"
            pillLabel="AI"
            href="/ai-solutions"
            scene={<AiScene />}
            colSpan="lg:col-span-1"
          />

          {/* Bento Box 3 - Mobile App Development (1 Col) */}
          <Card
            title="Mobile App Development"
            description="Sleek, fluid mobile apps designed for real-time interaction and touch."
            hint="Explore Mobile"
            pillLabel="MOBILE"
            href="/mobile-apps"
            scene={<AppScene />}
            colSpan="lg:col-span-1"
          />

          {/* Bento Box 4 - UI / UX Design (2 Cols) */}
          <Card
            title="UI / UX Design"
            description="Pixel-perfect design systems, tokenized color palettes, and motion-first interactive layouts."
            hint="View Systems"
            pillLabel="DESIGN"
            scene={<DesignScene />}
            colSpan="lg:col-span-2"
          />
        </div>
      </div>
    </section>
  )
}
