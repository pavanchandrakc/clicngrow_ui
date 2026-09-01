import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

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
    <div className={`group relative w-full h-full rounded-2xl p-6 bg-white border border-blue-100/90 shadow-sm shadow-blue-500/5 hover:shadow-md hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between cursor-pointer ${colSpan}`}>
      {/* Scene Upper Visual Block */}
      <div className="w-full mb-5">{scene}</div>

      {/* Info Lower Content Block */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <Badge variant="secondary">{pillLabel}</Badge>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>

        <div className="pt-1">
          <Button size="sm" className="gap-2">
            <span>{hint}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  )

  if (href) {
    return <Link to={href} className={`block h-full ${colSpan}`}>{CardContent}</Link>
  }

  return <div className={`h-full ${colSpan}`}>{CardContent}</div>
}

