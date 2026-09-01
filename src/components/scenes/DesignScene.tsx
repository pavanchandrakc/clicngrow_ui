import React from 'react'
import { Palette, Layers, MoveUpLeft } from 'lucide-react'

export const DesignScene: React.FC = () => {
  return (
    <div className="relative w-full h-48 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden p-4 flex items-center justify-between shadow-inner">
      {/* Design Palette & Swatches Box */}
      <div className="flex flex-col gap-3 w-1/2">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-semibold text-slate-200 font-mono">Design System</span>
        </div>

        {/* Color Palette Swatch Dots */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-sky-400 ring-2 ring-sky-400/30" />
          <div className="w-5 h-5 rounded-full bg-indigo-500 ring-2 ring-indigo-500/30" />
          <div className="w-5 h-5 rounded-full bg-purple-500 ring-2 ring-purple-500/30" />
          <div className="w-5 h-5 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30" />
        </div>

        <div className="text-[11px] font-mono text-slate-400">Tokens: 32 Custom Vars</div>
      </div>

      {/* Wireframe Preview Box with Floating Cursor */}
      <div className="relative w-2/5 h-32 rounded-xl bg-slate-950 border border-slate-800 p-2.5 flex flex-col justify-between animate-design">
        <div className="flex items-center justify-between">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span className="text-[10px] font-mono text-slate-500">Auto Layout</span>
        </div>

        {/* Animated Moving Cursor */}
        <div className="absolute top-4 left-4 text-sky-400 animate-cursor pointer-events-none filter drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
          <MoveUpLeft className="w-5 h-5" />
        </div>

        <div className="space-y-1.5 mt-2">
          <div className="w-full h-2 rounded bg-gradient-to-r from-sky-400 to-indigo-500" />
          <div className="w-2/3 h-2 rounded bg-slate-800" />
        </div>
      </div>
    </div>
  )
}
