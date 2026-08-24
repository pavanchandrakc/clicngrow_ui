import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Button } from '../components/ui/button'
import { Send, MessageSquareCode, Mail, User } from 'lucide-react'

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="px-[7%] max-sm-custom:px-[5%] py-16 max-w-5xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold tracking-widest uppercase w-fit">
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-[clamp(44px,7vw,72px)] font-bold tracking-[-3px] leading-[0.98] text-slate-100">
              Talk to <span className="grad-text-cyan">GRO.</span>
            </h1>
            <p className="text-[17px] text-slate-400 max-w-2xl leading-relaxed">
              Have an ambitious digital experience in mind? Let's turn your vision into an interactive visual reality.
            </p>
          </div>

          {/* Bento Form Card */}
          <div className="bento-card p-8 sm-custom:p-10 rounded-[28px] max-w-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> Your Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00f2fe] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00f2fe] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquareCode className="w-3.5 h-3.5" /> Project Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00f2fe] transition-colors resize-none"
                />
              </div>

              <Button type="submit" className="btn-grad text-slate-950 font-bold py-3.5 text-sm rounded-xl mt-2 flex items-center justify-center gap-2">
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
