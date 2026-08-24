import React from 'react'
import { Sparkles, FolderKanban, ArrowRight, ExternalLink } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="px-[7%] max-sm-custom:px-[5%] py-16 max-w-7xl mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold tracking-widest uppercase w-fit">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>SELECTED CASE STUDIES</span>
            </div>
            <h1 className="text-[clamp(44px,7vw,72px)] font-bold tracking-[-3px] leading-[0.98] text-slate-100">
              Featured <span className="grad-text-cyan">Projects.</span>
            </h1>
            <p className="text-[17px] text-slate-400 leading-relaxed">
              Explore our curated portfolio of bespoke web applications, interactive visual systems, and digital product designs.
            </p>
          </div>

          {/* Bento Grid Showcase */}
          <div className="grid grid-cols-1 lg-custom:grid-cols-2 gap-6">
            <div className="bento-card rounded-[26px] p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">FINTECH PLATFORM</span>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  Quantum Financial Terminal
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Real-time stock analytics engine with canvas WebGL chart visualization rendering 50,000 data points at 60 FPS.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Stack: React + WebGL + Tailwind</span>
                <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Demo <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="bento-card rounded-[26px] p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">AI STUDIO</span>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  Aether Generative Workspace
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Multi-modal AI creative studio allowing designers to prompt vector shapes and code layouts using natural voice.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Stack: Vite + WebSockets + Lucide</span>
                <span className="text-xs font-semibold text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Demo <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
