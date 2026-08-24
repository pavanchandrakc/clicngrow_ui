import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 h-[72px] w-full bg-[#060a15]/85 backdrop-blur-[18px] border-b border-white/10 flex items-center justify-between px-[7%] max-sm-custom:px-[5%]">
      {/* Brand Logo */}
      <Link to="/" className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-0.5">
        Click<span className="text-[#00f2fe] font-extrabold drop-shadow-[0_0_10px_#00f2fe]">n</span>Gro.
      </Link>

      {/* Nav Links - Hidden below 950px (lg-custom) */}
      <nav className="hidden lg-custom:flex items-center gap-8 text-[13px] font-medium text-slate-400">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-300 font-semibold transition-colors'
              : 'hover:text-slate-100 transition-colors'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/ai-solutions"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-300 font-semibold transition-colors'
              : 'hover:text-slate-100 transition-colors'
          }
        >
          AI Solutions
        </NavLink>
        <NavLink
          to="/mobile-apps"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-300 font-semibold transition-colors'
              : 'hover:text-slate-100 transition-colors'
          }
        >
          Mobile Apps
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-300 font-semibold transition-colors'
              : 'hover:text-slate-100 transition-colors'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-cyan-300 font-semibold transition-colors'
              : 'hover:text-slate-100 transition-colors'
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* CTA Button */}
      <Link to="/contact">
        <Button className="btn-grad text-slate-950 font-bold px-5 py-2.5 text-xs rounded-full flex items-center gap-2">
          <span>Start a Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </header>
  )
}
