import React from 'react'
import { Terminal, Code2, CheckCircle2 } from 'lucide-react'

export const WebScene: React.FC = () => {
  return (
    <div className="relative w-full h-48 rounded-[18px] scene-bg-bento border border-[rgba(255,255,255,0.08)] overflow-hidden p-4 flex flex-col justify-between group-hover:border-[#00f2fe]/40 transition-colors">
      {/* Code Window Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 ml-2 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-[#00f2fe]" /> App.tsx
          </span>
        </div>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono">
          <CheckCircle2 className="w-3 h-3" /> Compiled
        </span>
      </div>

      {/* Code Snippet Box */}
      <div className="font-mono text-[11px] space-y-1 my-2 text-slate-300">
        <div className="flex items-center gap-2">
          <span className="text-slate-600">1</span>
          <span className="text-purple-400">const</span>{' '}
          <span className="text-cyan-300">World</span> = () =&gt; &#123;
        </div>
        <div className="flex items-center gap-2 pl-4">
          <span className="text-slate-600">2</span>
          <span className="text-purple-400">return</span> &lt;<span className="text-amber-300">InteractiveStudio</span> <span className="text-cyan-400">mode</span>=<span className="text-emerald-300">"live"</span> /&gt;
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-600">3</span>
          &#125;
        </div>
      </div>

      {/* Footer Status Pill */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5">
        <div className="flex items-center gap-2 text-xs text-[#00f2fe]">
          <Code2 className="w-4 h-4" />
          <span className="font-semibold text-[11px] tracking-wide uppercase">Vite + React 18 Engine</span>
        </div>
        <span className="text-[10px] font-mono text-slate-400">60 FPS</span>
      </div>
    </div>
  )
}
