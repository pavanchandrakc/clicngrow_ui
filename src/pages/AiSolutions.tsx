import React from 'react'
import { Bot, Cpu, Sparkles, Workflow, Terminal, BrainCircuit, CheckCircle2, ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

export const AiSolutions: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="px-[7%] max-sm-custom:px-[5%] py-16 max-w-7xl mx-auto flex flex-col gap-12">
          {/* Header Section */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold tracking-widest uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NEURAL AI PLATFORM</span>
            </div>
            <h1 className="text-[clamp(44px,7vw,72px)] font-bold tracking-[-3px] leading-[0.98] text-slate-100">
              AI <span className="grad-text-cyan">Solutions.</span>
            </h1>
            <p className="text-[17px] text-slate-400 leading-relaxed">
              Build autonomous visual agents, real-time voice synthesis, and intelligent LLM workflows embedded directly into your digital products.
            </p>
          </div>

          {/* Bento Grid Architecture (4 Asymmetrical Cards) */}
          <div className="grid grid-cols-1 lg-custom:grid-cols-3 gap-6">
            {/* Bento Box 1 - Wide Hero 2-Col Span: Autonomous AI Agents */}
            <div className="lg-custom:col-span-2 bento-card rounded-[26px] p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Agent Active
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  Autonomous Visual Agents
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Generative UI bots that construct dynamic interface elements and execute multi-step user tasks on the fly.
                </p>
              </div>

              {/* Code Terminal Micro-Widget */}
              <div className="w-full bg-slate-950/90 rounded-2xl border border-white/10 p-4 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-white/5">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Terminal className="w-3.5 h-3.5" /> agent-executor.ts
                  </span>
                  <span className="text-[10px] text-slate-400">Latency: 1.2ms</span>
                </div>
                <div className="pt-3 space-y-1.5">
                  <div><span className="text-purple-400">await</span> agent.<span className="text-cyan-300">parseIntent</span>(<span className="text-emerald-300">"Build dynamic analytics widget"</span>);</div>
                  <div><span className="text-slate-500">&gt; Generated 4 reactive components with 0 errors</span></div>
                </div>
              </div>
            </div>

            {/* Bento Box 2 - 1-Col Span: Real-Time Neural Speech */}
            <div className="lg-custom:col-span-1 bento-card rounded-[26px] p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  Speech & Voice Models
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sub-100ms conversational audio synthesis for real-time voice interaction.
                </p>
              </div>

              {/* Audio Wave Visualizer Widget */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Audio Stream</span>
                  <span className="text-cyan-400">24kHz / 16-bit</span>
                </div>
                <div className="flex items-center gap-1.5 h-8 justify-center">
                  <div className="w-1 bg-cyan-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
                  <div className="w-1 bg-indigo-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.15s' }} />
                  <div className="w-1 bg-purple-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }} />
                  <div className="w-1 bg-cyan-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.45s' }} />
                  <div className="w-1 bg-indigo-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }} />
                </div>
              </div>
            </div>

            {/* Bento Box 3 - 1-Col Span: Custom Workflow Builder */}
            <div className="lg-custom:col-span-1 bento-card rounded-[26px] p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                  Pipeline Workflows
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Chain multi-model reasoning nodes into fault-tolerant execution pipelines.
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-between text-cyan-300">
                  <span>Node 01: Prompt Parse</span>
                  <span className="text-emerald-400">✓</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-indigo-500/30 flex items-center justify-between text-indigo-300">
                  <span>Node 02: RAG Vector Fetch</span>
                  <span className="text-emerald-400">✓</span>
                </div>
              </div>
            </div>

            {/* Bento Box 4 - Wide 2-Col Span: Enterprise RAG Architecture */}
            <div className="lg-custom:col-span-2 bento-card rounded-[26px] p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  Enterprise RAG & Knowledge Systems
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Secure vector embedding stores and private document grounding with enterprise compliance and zero data leaks.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Accuracy</div>
                    <div className="text-lg font-bold text-slate-100">99.98%</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Vector Dim</div>
                    <div className="text-lg font-bold text-slate-100">1536d</div>
                  </div>
                </div>

                <Link to="/contact">
                  <button className="btn-grad text-slate-950 font-bold px-5 py-2.5 text-xs rounded-full flex items-center gap-2">
                    <span>Deploy AI Sandbox</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
