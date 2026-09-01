import React from 'react'
import { Terminal, Code2, CheckCircle2 } from 'lucide-react'

export const WebScene: React.FC = () => {
  return (
    <div className="relative w-full h-48 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden p-4 flex flex-col justify-between shadow-inner">
      {/* Code Window Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 ml-2 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-sky-400" /> App.tsx
          </span>
        </div>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full font-mono border border-emerald-500/30">
          <CheckCircle2 className="w-3 h-3" /> Compiled
        </span>
      </div>

      {/* Code Snippet Box */}
      <div className="font-mono text-[11px] space-y-1 my-2 text-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-slate-600">1</span>
          <span className="text-purple-400">const</span>{' '}
          <span className="text-sky-300">World</span> = () =&gt; &#123;
        </div>
        <div className="flex items-center gap-2 pl-4">
          <span className="text-slate-600">2</span>
          <span className="text-purple-400">return</span> &lt;<span className="text-amber-300">InteractiveStudio</span> <span className="text-sky-400">mode</span>=<span className="text-emerald-300">&quot;live&quot;</span> /&gt;
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-600">3</span>
          &#125;
        </div>
      </div>

      {/* Footer Status Pill */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800">
        <div className="flex items-center gap-2 text-xs text-sky-400 font-mono">
          <Code2 className="w-4 h-4" />
          <span className="font-semibold text-[11px] tracking-wide uppercase">Vite + React 18 Engine</span>
        </div>
        <span className="text-[10px] font-mono text-slate-400">60 FPS</span>
      </div>
    </div>
  )
}
