import React from 'react'
import { Smartphone, Zap } from 'lucide-react'

export const AppScene: React.FC = () => {
  return (
    <div className="relative w-full h-48 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden p-4 flex items-center justify-center shadow-inner">
      {/* CSS Phone Frame */}
      <div className="relative w-24 h-36 rounded-[20px] border-2 border-slate-700 bg-slate-950 shadow-xl animate-phone p-2 flex flex-col justify-between items-center">
        {/* Top Notch */}
        <div className="w-8 h-1 rounded-full bg-slate-700" />

        {/* Screen Mockup Content */}
        <div className="w-full flex-1 my-1.5 rounded-xl bg-slate-900 p-2 flex flex-col gap-1.5 justify-center">
          <div className="flex items-center gap-1">
            <Smartphone className="w-3 h-3 text-sky-400" />
            <div className="w-10 h-1.5 rounded bg-sky-400/40" />
          </div>
          <div className="w-full h-2 rounded bg-slate-800 animate-pulse" />
          <div className="w-3/4 h-2 rounded bg-slate-800" />
        </div>

        {/* Home Indicator */}
        <div className="w-8 h-1 rounded-full bg-slate-700" />
      </div>

      {/* Floating Badge Widget */}
      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/90 border border-slate-800 text-[10px] font-mono font-semibold text-sky-400 flex items-center gap-1 tracking-wider uppercase">
        <Zap className="w-3 h-3 text-sky-400" /> 60 FPS MOTION
      </div>
    </div>
  )
}
