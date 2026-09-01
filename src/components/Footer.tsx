import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Solutions: [
    { name: 'Home', href: '/' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Mobile Apps', href: '/mobile-apps' },
    { name: 'Projects', href: '/projects' },
  ],
  Company: [
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/#services' },
  ],
}

const socialLinks = [
  { name: 'Twitter / X', href: 'https://twitter.com' },
  { name: 'GitHub', href: 'https://github.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
]

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-blue-100 bg-white pt-20 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-16 border-b border-blue-100">
          {/* Brand Column */}
          <div className="md:col-span-3 pr-4">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
              <span className="text-2xl font-display font-extrabold text-slate-900">
                Click<span className="text-blue-600 font-extrabold drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]">n</span>Gro.
              </span>
              <span className="text-xs text-blue-500 font-mono">TM</span>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-sm">
              Building interactive web platforms, AI solutions, mobile apps, and design systems for growing brands.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1 group font-mono"
                >
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-1">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 mb-6">
                {title}
              </h3>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Click n Gro. All rights reserved.</p>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-950 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
