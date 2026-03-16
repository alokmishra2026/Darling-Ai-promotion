import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Zap, TrendingUp, Share2, Film, Music2, Youtube,
  Instagram, Twitter, Facebook, ArrowRight, Star, Eye, Heart
} from 'lucide-react'

const features = [
  { icon: Film, title: 'AI Reel Generator', desc: 'Auto-detects best moments, cuts 15s/30s clips and creates viral reels', color: '#f72585' },
  { icon: Share2, title: 'Auto Social Post', desc: 'Schedules and posts content across Instagram, YouTube, Facebook & X', color: '#9b5de5' },
  { icon: Zap, title: 'Viral Hashtags', desc: 'AI generates trending hashtags and captions for maximum reach', color: '#f9c74f' },
  { icon: TrendingUp, title: 'Smart Analytics', desc: 'Real-time insights on views, engagement, viral score and audience', color: '#06d6a0' },
]

const stats = [
  { label: 'Total Views', value: '2.4M', icon: Eye, color: '#9b5de5' },
  { label: 'Viral Score', value: '94/100', icon: Zap, color: '#f9c74f' },
  { label: 'Likes', value: '182K', icon: Heart, color: '#f72585' },
  { label: 'Subscribers', value: '48K', icon: Star, color: '#06d6a0' },
]

const platforms = [
  { icon: Youtube, name: 'YouTube Shorts', color: '#ff0000', clips: '12 Clips' },
  { icon: Instagram, name: 'Instagram Reels', color: '#e1306c', clips: '8 Reels' },
  { icon: Facebook, name: 'Facebook Reels', color: '#1877f2', clips: '6 Clips' },
  { icon: Twitter, name: 'X / Twitter', color: '#1da1f2', clips: '24 Posts' },
]

function EqVisualizer() {
  const bars = [30, 50, 70, 45, 80, 55, 40, 65, 35, 60, 75, 50]
  return (
    <div className="flex items-end gap-1 h-20">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          animate={{ scaleY: [1, 1.5 + Math.random(), 0.5, 1.2, 1] }}
          transition={{ duration: 1.2 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
          className="flex-1 rounded-t-sm"
          style={{
            height: `${h}%`,
            background: `linear-gradient(to top, #9b5de5, #00b4d8)`,
            transformOrigin: 'bottom',
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  )
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveIndex(i => (i + 1) % platforms.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative z-10 pt-16">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #9b5de5, transparent)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #f72585, transparent)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'rgba(155,93,229,0.15)', border: '1px solid rgba(155,93,229,0.3)', color: '#9b5de5' }}>
              <Zap size={12} /> AI-Powered Music Promotion
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-white">Make Your</span>
              <br />
              <span style={{ background: 'linear-gradient(135deg, #9b5de5, #f72585)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Song Go
              </span>
              <br />
              <span className="text-white">VIRAL 🚀</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              AI automatically promotes your songs on Instagram, YouTube, Facebook & X. Creates reels, generates captions, schedules posts — all on autopilot.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/upload">
                <button className="btn-primary flex items-center gap-2">
                  <Music2 size={16} /> Start Promoting
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="btn-secondary flex items-center gap-2">
                  AI Dashboard <ArrowRight size={14} />
                </button>
              </Link>
            </div>

            {/* Live Stats */}
            <div className="flex gap-6 mt-10">
              {[['2.4M+', 'Total Views'], ['94%', 'Viral Score'], ['48K+', 'Subscribers']].map(([val, lab]) => (
                <div key={lab}>
                  <div className="text-xl font-bold neon-text font-display">{val}</div>
                  <div className="text-xs text-gray-500">{lab}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass-card p-6 float-card">
              {/* Channel Card */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-red-600 shadow-lg">
                  <Youtube size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-display text-white font-bold text-lg">mishraji.up36</div>
                  <div className="text-gray-400 text-sm">48,000 Subscribers</div>
                </div>
                <a href="https://youtube.com/@mishraji.up36" target="_blank" rel="noreferrer"
                  className="ml-auto text-xs px-3 py-1.5 rounded-full font-semibold text-white"
                  style={{ background: '#ff0000' }}>
                  Subscribe
                </a>
              </div>

              {/* Visualizer */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2 font-display tracking-wider">NOW PLAYING</div>
                <div className="text-white font-semibold text-sm mb-3">🎵 Darling – Main Song</div>
                <EqVisualizer />
              </div>

              {/* Platform Posts */}
              <div className="space-y-2">
                {platforms.map((p, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-2.5 rounded-xl transition-all duration-500 ${
                      i === activeIndex ? 'bg-purple-900/20 border border-purple-500/30' : 'opacity-50'
                    }`}
                  >
                    <p.icon size={16} style={{ color: p.color }} />
                    <span className="text-xs text-gray-300 flex-1">{p.name}</span>
                    <span className="text-xs font-semibold text-green-400">{p.clips} Posted ✓</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-6, 6] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute -top-4 -right-4 glass-card p-3 flex items-center gap-2"
            >
              <Zap size={14} className="text-yellow-400" />
              <span className="text-xs font-semibold text-white">AI Running</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-8 border-y" style={{ borderColor: 'rgba(155,93,229,0.1)', background: 'rgba(13,13,26,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ label, value, icon: Icon, color }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}22` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-display">{value}</div>
                  <div className="text-xs text-gray-500">{label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="section-title mb-4">AI Promotion Engine</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Everything runs on autopilot. Upload once, AI handles the rest.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${color}22` }}>
                <Icon size={24} style={{ color }} />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20" style={{ background: 'rgba(13,13,26,0.5)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="section-title mb-4">How It Works</h2>
            <p className="text-gray-500">3 simple steps to viral success</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px"
              style={{ background: 'linear-gradient(90deg, rgba(155,93,229,0.5), rgba(0,180,216,0.5))' }} />
            {[
              { step: '01', title: 'Upload Song', desc: 'Upload your audio or full video to the platform', emoji: '🎵' },
              { step: '02', title: 'AI Processes', desc: 'AI detects best moments, creates reels & generates captions', emoji: '🤖' },
              { step: '03', title: 'Auto Promote', desc: 'Content is auto-posted across all social platforms', emoji: '🚀' },
            ].map(({ step, title, desc, emoji }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-6 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-display"
                  style={{ background: 'linear-gradient(135deg, #9b5de5, #00b4d8)', color: 'white' }}>
                  {step}
                </div>
                <div className="text-4xl mb-3 mt-2">{emoji}</div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="glass-card p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5"
                style={{ background: 'radial-gradient(circle at center, #9b5de5, transparent)' }} />
              <div className="text-5xl mb-4">🎶</div>
              <h2 className="section-title mb-4">Ready to Go Viral?</h2>
              <p className="text-gray-400 mb-8">Upload your song and let AI do the promotion magic</p>
              <Link to="/upload">
                <button className="btn-primary text-base py-4 px-8 flex items-center gap-2 mx-auto">
                  <Music2 size={18} /> Upload Your Song Now
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
