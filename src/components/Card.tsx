import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export interface CardProps {
  title: string
  description: string
  hint: string
  pillLabel: string
  href?: string
  scene: React.ReactNode
  colSpan?: string
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  hint,
  pillLabel,
  href,
  scene,
  colSpan = 'col-span-1',
}) => {
  const CardContent = (
    <div className={`group relative w-full h-full rounded-[24px] p-6 bento-card flex flex-col justify-between cursor-pointer ${colSpan}`}>
      {/* Scene Upper Visual Block */}
      <div className="w-full mb-5">{scene}</div>

      {/* Info Lower Content Block */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
            {pillLabel}
          </span>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>

        <div className="pt-2 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-cyan-400 transition-colors font-medium">
          <span>{hint}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  )

  if (href) {
    return <Link to={href} className={`block h-full ${colSpan}`}>{CardContent}</Link>
  }

  return <div className={`h-full ${colSpan}`}>{CardContent}</div>
}
