import React from 'react'
import { Card } from './Card'
import { WebScene } from './scenes/WebScene'
import { AppScene } from './scenes/AppScene'
import { AiScene } from './scenes/AiScene'
import { DesignScene } from './scenes/DesignScene'

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="px-[7%] max-sm-custom:px-[5%] py-20 w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            EXPLORE CLICKNGRO
          </span>
          <h2 className="text-[45px] max-sm-custom:text-3xl font-bold tracking-tight text-slate-100">
            Hover. Watch.{' '}
            <span className="grad-text-cyan">Interact.</span>
          </h2>
          <p className="text-[17px] text-slate-400 max-w-lg">
            Every Bento block features real-time code widgets and interactive previews.
          </p>
        </div>

        {/* Bento Grid (Asymmetrical Layout) */}
        <div className="grid grid-cols-1 lg-custom:grid-cols-3 gap-6">
          {/* Bento Box 1 - Web Experiences (2 Cols) */}
          <Card
            title="Web Experiences"
            description="Fast, custom web applications built with modern frontend architectures and live reactive components."
            hint="Interactive demo"
            pillLabel="WEB"
            scene={<WebScene />}
            colSpan="lg-custom:col-span-2"
          />

          {/* Bento Box 2 - AI Solutions (1 Col) */}
          <Card
            title="AI Solutions"
            description="Interactive AI workflows, generative agents, and speech integration."
            hint="Try AI Demo"
            pillLabel="AI"
            href="/ai-solutions"
            scene={<AiScene />}
            colSpan="lg-custom:col-span-1"
          />

          {/* Bento Box 3 - Mobile App Development (1 Col) */}
          <Card
            title="Mobile App Development"
            description="Sleek, fluid mobile apps designed for real-time interaction and touch."
            hint="Explore Mobile"
            pillLabel="MOBILE"
            href="/mobile-apps"
            scene={<AppScene />}
            colSpan="lg-custom:col-span-1"
          />

          {/* Bento Box 4 - UI / UX Design (2 Cols) */}
          <Card
            title="UI / UX Design"
            description="Pixel-perfect design systems, tokenized color palettes, and motion-first interactive layouts."
            hint="View Systems"
            pillLabel="DESIGN"
            scene={<DesignScene />}
            colSpan="lg-custom:col-span-2"
          />
        </div>
      </div>
    </section>
  )
}
