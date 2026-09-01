import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Badge } from '../components/ui/badge'
import { Send, MessageSquareCode, Mail, User } from 'lucide-react'

export const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden noise-overlay bg-[#fafafa] text-slate-900 flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="px-6 lg:px-12 py-24 max-w-4xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Badge variant="secondary" className="gap-2 py-1 w-fit uppercase tracking-widest text-slate-700">
              <MessageSquareCode className="w-3.5 h-3.5 text-slate-900" />
              <span>GET IN TOUCH</span>
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900">
              Talk to <span className="text-slate-500">GRO.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Have an ambitious digital experience in mind? Let&apos;s turn your vision into an interactive visual reality.
            </p>
          </div>

          {/* Bento Form Card */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 lg:p-10 max-w-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-900" /> Your Name
                </label>
                <Input
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-900" /> Email Address
                </label>
                <Input
                  type="email"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquareCode className="w-3.5 h-3.5 text-slate-900" /> Project Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="flex w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 transition-colors resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full font-bold mt-2 flex items-center justify-center gap-2">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
