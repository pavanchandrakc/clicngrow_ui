import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass, MessageSquareCode } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export const FeatureGrid: React.FC = () => {
  return (
    <section className="px-6 lg:px-12 py-20 w-full max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feature Card 1 */}
        <div className="relative rounded-2xl p-8 lg:p-10 bg-white border border-blue-100/90 shadow-sm shadow-blue-500/5 hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <Badge variant="secondary" className="gap-1.5 py-1 uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-blue-600" /> CLIENT JOURNEY
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 leading-tight">
              Your client should see their idea before it exists.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mt-1">
              Interactive prototypes eliminate miscommunication and speed up delivery.
            </p>
          </div>

          <Link to="/projects">
            <Button size="sm" className="gap-2 font-medium">
              <span>See Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Feature Card 2 */}
        <div className="relative rounded-2xl p-8 lg:p-10 bg-white border border-blue-100/90 shadow-sm shadow-blue-500/5 hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <Badge variant="secondary" className="gap-1.5 py-1 uppercase tracking-wider">
              <MessageSquareCode className="w-3.5 h-3.5 text-blue-600" /> START A CONVERSATION
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 leading-tight">
              Don&apos;t end with a boring contact form.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mt-1">
              Engage clients early with dynamic forms and direct visual contact options.
            </p>
          </div>

          <Link to="/contact">
            <Button size="sm" className="gap-2 font-medium">
              <span>Talk to GRO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
