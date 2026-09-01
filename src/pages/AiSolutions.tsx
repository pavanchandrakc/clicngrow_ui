import React from 'react'
import { Bot, Cpu, Sparkles, Workflow, Terminal, BrainCircuit, CheckCircle2, ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'

export const AiSolutions: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden noise-overlay bg-[#fafafa] text-slate-900 flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto flex flex-col gap-12">
          {/* Header Section */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <Badge variant="secondary" className="gap-2 py-1 w-fit uppercase tracking-widest text-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              <span>NEURAL AI PLATFORM</span>
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900">
              AI <span className="text-slate-500">Solutions.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Build autonomous visual agents, real-time voice synthesis, and intelligent LLM workflows embedded directly into your digital products.
            </p>
          </div>

          {/* Bento Grid Architecture (4 Asymmetrical Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Bento Box 1 - Wide Hero 2-Col Span: Autonomous AI Agents */}
            <div className="lg:col-span-2 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900">
                    <Bot className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="gap-1.5 bg-emerald-50 text-emerald-700 border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Agent Active
                  </Badge>
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                  Autonomous Visual Agents
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Generative UI bots that construct dynamic interface elements and execute multi-step user tasks on the fly.
                </p>
              </div>

              {/* Code Terminal Micro-Widget */}
              <div className="w-full bg-slate-900 rounded-xl border border-slate-800 p-4 font-mono text-xs text-slate-200 shadow-inner">
                <div className="flex items-center justify-between text-slate-400 pb-2.5 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 text-sky-400">
                    <Terminal className="w-3.5 h-3.5" /> agent-executor.ts
                  </span>
                  <span className="text-[10px] text-slate-500">Latency: 1.2ms</span>
                </div>
                <div className="pt-3 space-y-1.5">
                  <div><span className="text-purple-400">await</span> agent.<span className="text-sky-300">parseIntent</span>(<span className="text-emerald-300">&quot;Build dynamic analytics widget&quot;</span>);</div>
                  <div><span className="text-slate-500">&gt; Generated 4 reactive components with 0 errors</span></div>
                </div>
              </div>
            </div>

            {/* Bento Box 2 - 1-Col Span: Real-Time Neural Speech */}
            <div className="lg:col-span-1 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 w-fit">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                  Speech & Voice Models
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sub-100ms conversational audio synthesis for real-time voice interaction.
                </p>
              </div>

              {/* Audio Wave Visualizer Widget */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Audio Stream</span>
                  <span className="text-sky-400">24kHz / 16-bit</span>
                </div>
                <div className="flex items-center gap-1.5 h-8 justify-center">
                  <div className="w-1 bg-sky-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
                  <div className="w-1 bg-indigo-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.15s' }} />
                  <div className="w-1 bg-purple-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }} />
                  <div className="w-1 bg-sky-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.45s' }} />
                  <div className="w-1 bg-indigo-400 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }} />
                </div>
              </div>
            </div>

            {/* Bento Box 3 - 1-Col Span: Custom Workflow Builder */}
            <div className="lg:col-span-1 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 w-fit">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                  Pipeline Workflows
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Chain multi-model reasoning nodes into fault-tolerant execution pipelines.
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-800">
                  <span>Node 01: Prompt Parse</span>
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-800">
                  <span>Node 02: RAG Vector Fetch</span>
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
              </div>
            </div>

            {/* Bento Box 4 - Wide 2-Col Span: Enterprise RAG Architecture */}
            <div className="lg:col-span-2 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-8 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 w-fit">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                  Enterprise RAG & Knowledge Systems
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Secure vector embedding stores and private document grounding with enterprise compliance and zero data leaks.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Accuracy</div>
                    <div className="text-lg font-bold text-slate-900">99.98%</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Vector Dim</div>
                    <div className="text-lg font-bold text-slate-900">1536d</div>
                  </div>
                </div>

                <Link to="/contact">
                  <Button size="sm" className="gap-2 font-medium">
                    <span>Deploy AI Sandbox</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
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
