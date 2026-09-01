import React from 'react'
import { Smartphone, Zap, Layers, Sparkles, CheckCircle2 } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Badge } from '../components/ui/badge'

export const MobileApps: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden noise-overlay bg-[#fafafa] text-slate-900 flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <Badge variant="secondary" className="gap-2 py-1 w-fit uppercase tracking-widest text-slate-700">
              <Smartphone className="w-3.5 h-3.5 text-slate-900" />
              <span>CLICKNGRO MOBILE</span>
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900">
              Mobile <span className="text-slate-500">Apps.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Fluid, high-performance cross-platform mobile applications engineered for micro-interactions, offline synchronization, and 60 FPS animation.
            </p>
          </div>

          {/* Bento Grid Layout (3 Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 w-fit">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900">Native Performance</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Compiled directly to metal with 60fps gesture response and instantaneous touch feedback.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 flex items-center justify-between">
                <span>FPS Benchmark</span>
                <span className="text-emerald-600 font-bold">60.0 FPS</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 w-fit">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900">Cross-Platform Sync</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Shared business logic across iOS and Android with zero code duplication.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 flex items-center justify-between">
                <span>Core Sharing</span>
                <span className="text-slate-900 font-bold">94% Reuse</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 w-fit">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900">Haptic Micro-Gestures</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Tactile feedback integrations that make every scroll, swipe, and tap feel physical.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-emerald-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ready for iOS 18 & Android 15
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
