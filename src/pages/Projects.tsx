import React from 'react'
import { FolderKanban, ExternalLink } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'

export const Projects: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden noise-overlay bg-[#fafafa] text-slate-900 flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <Badge variant="secondary" className="gap-2 py-1 w-fit uppercase tracking-widest text-slate-700">
              <FolderKanban className="w-3.5 h-3.5 text-slate-900" />
              <span>SELECTED CASE STUDIES</span>
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900">
              Featured <span className="text-slate-500">Projects.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore our curated portfolio of bespoke web applications, interactive visual systems, and digital product designs.
            </p>
          </div>

          {/* Bento Grid Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-blue-100/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 rounded-2xl p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">FINTECH PLATFORM</span>
                <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Quantum Financial Terminal
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Real-time stock analytics engine with canvas WebGL chart visualization rendering 50,000 data points at 60 FPS.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Stack: React + WebGL + Tailwind</span>
                <Button size="sm" className="gap-1.5">
                  <span>View Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            <div className="bg-white border border-blue-100/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 rounded-2xl p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">AI STUDIO</span>
                <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Aether Generative Workspace
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Multi-modal AI creative studio allowing designers to prompt vector shapes and code layouts using natural voice.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Stack: Vite + WebSockets + Lucide</span>
                <Button size="sm" className="gap-1.5">
                  <span>View Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
