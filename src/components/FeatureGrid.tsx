import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass, MessageSquareCode } from 'lucide-react'

export const FeatureGrid: React.FC = () => {
  return (
    <section className="px-[7%] max-sm-custom:px-[5%] py-16 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg-custom:grid-cols-2 gap-8">
        {/* Bento Feature Card 1 */}
        <div className="relative rounded-[26px] p-8 lg-custom:p-10 bento-card flex flex-col justify-between items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" /> CLIENT JOURNEY
            </div>
            <h2 className="text-[28px] font-bold text-slate-100 leading-tight">
              Your client should see their idea before it exists.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mt-1">
              Interactive prototypes eliminate miscommunication and speed up delivery.
            </p>
          </div>

          <Link
            to="/projects"
            className="btn-grad inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-950 mt-4"
          >
            <span>See Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Bento Feature Card 2 */}
        <div className="relative rounded-[26px] p-8 lg-custom:p-10 bento-card flex flex-col justify-between items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <MessageSquareCode className="w-3.5 h-3.5" /> START A CONVERSATION
            </div>
            <h2 className="text-[28px] font-bold text-slate-100 leading-tight">
              Don't end with a boring contact form.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mt-1">
              Engage clients early with dynamic forms and direct visual contact options.
            </p>
          </div>

          <Link
            to="/contact"
            className="btn-grad inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-950 mt-4"
          >
            <span>Talk to GRO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
