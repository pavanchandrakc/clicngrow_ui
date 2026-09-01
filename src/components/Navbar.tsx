import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'AI Solutions', href: '#' },
  { name: 'Mobile Apps', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
]

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? 'top-4 left-4 right-4' : 'top-0 left-0 right-0'
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/90 backdrop-blur-xl border border-blue-100/90 rounded-2xl shadow-sm max-w-[1200px]'
            : 'bg-transparent max-w-[1400px]'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? 'h-14' : 'h-20'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-1.5 group cursor-default"
          >
            <span
              className={`font-display tracking-tight text-slate-900 font-extrabold transition-all duration-500 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}
            >
              Click<span className="text-blue-600 font-extrabold drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]">n</span>Gro.
            </span>
            <span
              className={`text-blue-500 font-mono transition-all duration-500 ${
                isScrolled ? 'text-[10px] mt-0.5' : 'text-xs mt-1'
              }`}
            >
              TM
            </span>
          </a>

          {/* Desktop Navigation - White & Blue Styling */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab(link.name)
                }}
                className={`text-sm font-medium transition-colors duration-300 relative group cursor-pointer ${
                  activeTab === link.name ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                    activeTab === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            
            <Button
              size="sm"
              onClick={(e) => e.preventDefault()}
              className={`rounded-full transition-all duration-500 ${
                isScrolled ? 'px-4 h-8 text-xs' : 'px-6 h-10 text-sm'
              }`}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Backdrop Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white/98 backdrop-blur-2xl z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab(link.name)
                  setIsMobileMenuOpen(false)
                }}
                className={`text-4xl font-display font-bold text-slate-900 hover:text-blue-600 transition-all duration-500 ${
                  isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : '0ms' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div
            className={`flex gap-4 pt-8 border-t border-blue-100 transition-all duration-500 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}
          >
            <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full rounded-full h-14 text-base">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
