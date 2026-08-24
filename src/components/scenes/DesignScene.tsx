import React from 'react'
import { Palette, Layers, MoveUpLeft } from 'lucide-react'

export const DesignScene: React.FC = () => {
  return (
    <div className="relative w-full h-48 rounded-[18px] scene-bg-bento border border-[rgba(255,255,255,0.08)] overflow-hidden p-4 flex items-center justify-between group-hover:border-[#a855f7]/40 transition-colors">
      {/* Design Palette & Swatches Box */}
      <div className="flex flex-col gap-3 w-1/2">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-[#a855f7]" />
          <span className="text-xs font-semibold text-slate-200">Design System</span>
        </div>

        {/* Color Palette Swatch Dots */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#00f2fe] ring-2 ring-[#00f2fe]/30" />
          <div className="w-5 h-5 rounded-full bg-[#6366f1] ring-2 ring-[#6366f1]/30" />
          <div className="w-5 h-5 rounded-full bg-[#a855f7] ring-2 ring-[#a855f7]/30" />
          <div className="w-5 h-5 rounded-full bg-[#10b981] ring-2 ring-[#10b981]/30" />
        </div>

        <div className="text-[11px] font-mono text-slate-400">Tokens: 32 Custom Vars</div>
      </div>

      {/* Wireframe Preview Box with Floating Cursor */}
      <div className="relative w-2/5 h-32 rounded-xl bg-slate-950/80 border border-white/10 p-2.5 flex flex-col justify-between animate-design">
        <div className="flex items-center justify-between">
          <Layers className="w-4 h-4 text-[#818cf8]" />
          <span className="text-[10px] font-mono text-slate-500">Auto Layout</span>
        </div>

        {/* Animated Moving Cursor */}
        <div className="absolute top-4 left-4 text-cyan-400 animate-cursor pointer-events-none filter drop-shadow-[0_0_8px_#00f2fe]">
          <MoveUpLeft className="w-5 h-5" />
        </div>

        <div className="space-y-1.5 mt-2">
          <div className="w-full h-2 rounded bg-gradient-to-r from-[#00f2fe] to-[#6366f1]" />
          <div className="w-2/3 h-2 rounded bg-slate-800" />
        </div>
      </div>
    </div>
  )
}
