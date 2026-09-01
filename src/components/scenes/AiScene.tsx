import React from 'react'
import { Bot, Cpu, Sparkles } from 'lucide-react'

export const AiScene: React.FC = () => {
  return (
    <div className="relative w-full h-48 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden p-4 flex flex-col justify-between shadow-inner">
      {/* AI Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
            <Cpu className="w-4 h-4 text-indigo-400" />
          </div>
          <span className="text-xs font-semibold text-slate-200 font-mono">Neural Agent Hub</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded-full font-mono border border-sky-500/30">
          <Sparkles className="w-3 h-3 text-sky-300" /> Live Execution
        </div>
      </div>

      {/* Center AI Interactive Box */}
      <div className="flex items-center justify-center gap-4 py-2">
        <div className="p-3 rounded-2xl bg-indigo-950/50 border border-indigo-500/40 animate-talk shadow-[0_0_20px_rgba(99,102,241,0.25)]">
          <Bot className="w-8 h-8 text-indigo-400" />
        </div>

        {/* 5 Audio Wave Bars */}
        <div className="flex items-center gap-1.5 h-8">
          <div className="w-1 bg-sky-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
          <div className="w-1 bg-indigo-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.1s' }} />
          <div className="w-1 bg-purple-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 bg-sky-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }} />
          <div className="w-1 bg-indigo-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      {/* AI Prompt Output Status */}
      <div className="bg-slate-950/80 rounded-xl p-2 border border-slate-800 flex items-center justify-between text-[11px] font-mono">
        <span className="text-slate-400 truncate max-w-[180px]">prompt: &quot;generate UI scene...&quot;</span>
        <span className="text-emerald-400 font-semibold">2.4ms</span>
      </div>
    </div>
  )
}
