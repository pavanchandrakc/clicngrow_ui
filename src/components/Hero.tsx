import React from 'react'
import { ChevronDown, Sparkles, Activity, ShieldCheck } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] px-[7%] max-sm-custom:px-[5%] py-16 flex items-center justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg-custom:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Left Column - Headline & Copy */}
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          {/* Bento Status Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>INTERACTIVE DIGITAL EXPERIENCES</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(44px,7vw,82px)] font-bold tracking-[-3px] leading-[0.98] text-slate-100">
            Every service should feel like a{' '}
            <span className="grad-text-cyan">mini digital world.</span>
          </h1>

          {/* Subcopy */}
          <p className="text-[17px] text-slate-400 leading-relaxed max-w-xl">
            We convert static products into dynamic visual environments. Experience live interactions, floating interfaces, and software in motion.
          </p>

          {/* Interactive Metric Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-300">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>99.9% Interactive Velocity</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Static Pages</span>
            </div>
          </div>

          {/* Action Button */}
          <a
            href="#services"
            className="btn-grad inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-950 mt-2"
          >
            <span>Explore Experiences</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Right Column - Bento Interactive Visual (Orbit & Cyber Core) */}
        <div className="relative w-full aspect-square max-w-[480px] justify-self-center flex items-center justify-center">
          {/* Cyan Glow Field */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-full blur-3xl" />

          {/* Outer Rotating Orbit Ring */}
          <div className="absolute w-[80%] h-[80%] rounded-full border border-cyan-500/20 animate-spin-slow flex items-center justify-center">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00f2fe] shadow-[0_0_18px_#00f2fe]" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#6366f1] shadow-[0_0_14px_#6366f1]" />
          </div>

          {/* Inner Counter Orbit Ring */}
          <div className="absolute w-[55%] h-[55%] rounded-full border border-dashed border-slate-700 animate-[spin_18s_linear_infinite_reverse]" />

          {/* Central Cyber Sphere */}
          <div className="relative w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-slate-950 via-cyan-950 to-indigo-950 shadow-[0_0_50px_rgba(0,242,254,0.4)] animate-float flex flex-col items-center justify-center border border-cyan-500/30">
            <Sparkles className="w-8 h-8 text-cyan-300 filter drop-shadow-[0_0_10px_#00f2fe]" />
            <span className="text-[10px] font-mono text-cyan-400 mt-1">CLICKNGRO</span>
          </div>
        </div>
      </div>
    </section>
  )
}
