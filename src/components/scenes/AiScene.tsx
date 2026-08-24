import React from 'react'
import { Bot, Cpu, Sparkles } from 'lucide-react'

export const AiScene: React.FC = () => {
  return (
    <div className="relative w-full h-48 rounded-[18px] scene-bg-bento border border-[rgba(255,255,255,0.08)] overflow-hidden p-4 flex flex-col justify-between group-hover:border-[#6366f1]/40 transition-colors">
      {/* AI Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
            <Cpu className="w-4 h-4 text-[#818cf8]" />
          </div>
          <span className="text-xs font-semibold text-slate-200">Neural Agent Hub</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full font-mono">
          <Sparkles className="w-3 h-3" /> Live Execution
        </div>
      </div>

      {/* Center AI Interactive Box */}
      <div className="flex items-center justify-center gap-4 py-2">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-slate-900/60 border border-indigo-500/30 animate-talk shadow-[0_0_20px_rgba(99,102,241,0.25)]">
          <Bot className="w-8 h-8 text-[#818cf8]" />
        </div>

        {/* 5 Audio Wave Bars */}
        <div className="flex items-center gap-1.5 h-8">
          <div className="w-1 bg-[#38bdf8] rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
          <div className="w-1 bg-[#6366f1] rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.1s' }} />
          <div className="w-1 bg-[#a855f7] rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 bg-[#00f2fe] rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }} />
          <div className="w-1 bg-[#818cf8] rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      {/* AI Prompt Output Status */}
      <div className="bg-slate-950/60 rounded-xl p-2 border border-white/5 flex items-center justify-between text-[11px] font-mono">
        <span className="text-slate-400 truncate max-w-[180px]">prompt: "generate UI scene..."</span>
        <span className="text-emerald-400 font-semibold">2.4ms</span>
      </div>
    </div>
  )
}
