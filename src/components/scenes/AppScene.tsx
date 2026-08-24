import React from 'react'
import { Smartphone, Zap } from 'lucide-react'

export const AppScene: React.FC = () => {
  return (
    <div className="relative w-full h-48 rounded-[18px] scene-bg-bento border border-[rgba(255,255,255,0.08)] overflow-hidden p-4 flex items-center justify-center group-hover:border-[#00f2fe]/40 transition-colors">
      {/* CSS Phone Frame */}
      <div className="relative w-24 h-36 rounded-[20px] border-2 border-slate-700/80 bg-slate-950/90 shadow-[0_10px_30px_rgba(0,0,0,0.6)] animate-phone p-2 flex flex-col justify-between items-center">
        {/* Top Notch */}
        <div className="w-8 h-1 rounded-full bg-slate-700" />

        {/* Screen Mockup Content */}
        <div className="w-full flex-1 my-1.5 rounded-xl bg-gradient-to-b from-cyan-950/40 to-slate-900/60 p-2 flex flex-col gap-1.5 justify-center">
          <div className="flex items-center gap-1">
            <Smartphone className="w-3 h-3 text-[#38bdf8]" />
            <div className="w-10 h-1.5 rounded bg-cyan-400/30" />
          </div>
          <div className="w-full h-2 rounded bg-slate-800 animate-pulse" />
          <div className="w-3/4 h-2 rounded bg-slate-800/80" />
        </div>

        {/* Home Indicator */}
        <div className="w-8 h-1 rounded-full bg-slate-700" />
      </div>

      {/* Floating Badge Widget */}
      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/90 border border-white/10 text-[10px] font-semibold text-cyan-300 flex items-center gap-1 tracking-wider uppercase">
        <Zap className="w-3 h-3 text-cyan-400" /> 60 FPS MOTION
      </div>
    </div>
  )
}
