import React from 'react'
import { Smartphone, Zap, Layers, Sparkles, CheckCircle2 } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const MobileApps: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="px-[7%] max-sm-custom:px-[5%] py-16 max-w-7xl mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold tracking-widest uppercase w-fit">
              <Smartphone className="w-3.5 h-3.5" />
              <span>CLICKNGRO MOBILE</span>
            </div>
            <h1 className="text-[clamp(44px,7vw,72px)] font-bold tracking-[-3px] leading-[0.98] text-slate-100">
              Mobile <span className="grad-text-cyan">Apps.</span>
            </h1>
            <p className="text-[17px] text-slate-400 leading-relaxed">
              Fluid, high-performance cross-platform mobile applications engineered for micro-interactions, offline synchronization, and 60 FPS animation.
            </p>
          </div>

          {/* Bento Grid Layout (3 Cards) */}
          <div className="grid grid-cols-1 lg-custom:grid-cols-3 gap-6">
            <div className="bento-card rounded-[26px] p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <Zap className="w-7 h-7 text-cyan-400" />
                <h3 className="text-xl font-bold text-slate-100">Native Performance</h3>
                <p className="text-slate-400 text-sm">Compiled directly to metal with 60fps gesture response and instantaneous touch feedback.</p>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-white/5 font-mono text-xs text-cyan-400 flex items-center justify-between">
                <span>FPS Benchmark</span>
                <span className="text-emerald-400 font-bold">60.0 FPS</span>
              </div>
            </div>

            <div className="bento-card rounded-[26px] p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <Layers className="w-7 h-7 text-indigo-400" />
                <h3 className="text-xl font-bold text-slate-100">Cross-Platform Sync</h3>
                <p className="text-slate-400 text-sm">Shared business logic across iOS and Android with zero code duplication.</p>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-white/5 font-mono text-xs text-slate-300 flex items-center justify-between">
                <span>Core Sharing</span>
                <span className="text-indigo-400 font-bold">94% Reuse</span>
              </div>
            </div>

            <div className="bento-card rounded-[26px] p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <Sparkles className="w-7 h-7 text-purple-400" />
                <h3 className="text-xl font-bold text-slate-100">Haptic Micro-Gestures</h3>
                <p className="text-slate-400 text-sm">Tactile feedback integrations that make every scroll, swipe, and tap feel physical.</p>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-white/5 font-mono text-xs text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Ready for iOS 18 & Android 15
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
