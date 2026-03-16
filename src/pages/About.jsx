import { motion } from 'framer-motion'
import { Instagram, Youtube, Github, Facebook, ExternalLink, Music2, Brain, Rocket, Award } from 'lucide-react'

const founders = [
  {
    name: 'Aditya Pandit',
    role: 'Founder & CEO',
    desc: 'Visionary behind Darling AI, specializing in viral marketing systems and artist growth strategies.',
    insta: 'mishraji.up36',
    github: 'alokmishra2026',
    color: '#9b5de5'
  },
  {
    name: 'Alok Pandit',
    role: 'Founder & CTO',
    desc: 'Expert in AI video synthesis and automated promotion engines that power the platform.',
    insta: 'alok_mishra85',
    github: 'alokmishra2026',
    color: '#00b4d8'
  }
]

export default function About() {
  return (
    <div className="relative z-10 pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Intro */}
        <section className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'rgba(155,93,229,0.15)', border: '1px solid rgba(155,93,229,0.3)', color: '#9b5de5' }}>
              <Brain size={12} /> The Brains Behind the AI
            </div>
            <h1 className="section-title mb-6 leading-tight">Empowering Independent Artists with AI</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Darling AI Promotion was founded with a single mission: to use cutting-edge artificial intelligence to give every artist a chance to go viral.
            </p>
            <div className="flex justify-center gap-8 border-t border-white/5 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-display">2026</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Founded</div>
              </div>
              <div className="text-center cursor-pointer group">
                <a href="https://youtube.com/@mishraji.up36" target="_blank" rel="noreferrer">
                  <div className="text-2xl font-bold text-neon-purple font-display group-hover:scale-110 transition-transform">mishraji.up36</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Base Channel</div>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Founders */}
        <section className="mb-32">
          <h2 className="font-display text-center text-xl font-bold text-white mb-12 tracking-widest uppercase opacity-60">Meet the Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, i) => (
              <motion.div 
                key={founder.name}
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="glass-card p-8 group relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-20 transition-opacity group-hover:opacity-40" 
                  style={{ background: founder.color }} />
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-3xl bg-dark-900 border-2 border-white/5 mb-6 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 opacity-20 animate-pulse" style={{ background: `linear-gradient(45deg, ${founder.color}, transparent)` }} />
                    <Music2 size={40} style={{ color: founder.color }} />
                  </div>
                  
                  <h3 className="text-2xl font-display font-black text-white mb-1">{founder.name.toUpperCase()}</h3>
                  <div className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: founder.color }}>{founder.role}</div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {founder.desc}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <a href={`https://instagram.com/${founder.insta}`} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all text-xs font-bold border border-white/5">
                      <Instagram size={14} className="text-neon-pink" /> @{founder.insta}
                    </a>
                    <a href={`https://github.com/${founder.github}`} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all text-xs font-bold border border-white/5">
                      <Github size={14} className="text-neon-blue" /> @{founder.github}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink" />
            <Award size={48} className="mx-auto text-neon-gold mb-6" />
            <h2 className="text-3xl font-display font-black text-white mb-6">The Darling AI Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              We believe that promotion should not be a barrier to creativity. By automating the hardest part of the music business—social marketing—we allow artists, like the creators on <span className="text-white font-bold italic">mishraji.up36</span>, to focus solely on their sound.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neon-purple/20 text-neon-purple"><Rocket size={20} /></div>
                <div className="text-left">
                  <div className="text-white font-bold text-sm">Real Efficiency</div>
                  <div className="text-xs text-gray-500">10x faster growth</div>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neon-blue/20 text-neon-blue"><Brain size={20} /></div>
                <div className="text-left">
                  <div className="text-white font-bold text-sm">Smart Targeting</div>
                  <div className="text-xs text-gray-500">AI-driven audiences</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
