import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap, Share2, Calendar, Hash, Type, Image as ImageIcon,
  Film, Music2, CheckCircle, Clock, Play, Instagram,
  Youtube, Facebook, Twitter, ChevronRight, Settings, ExternalLink
} from 'lucide-react'

const campaignPlatforms = [
  { id: 'insta', name: 'Instagram', icon: Instagram, color: '#e1306c', status: 'Running', posts: 12, engagement: '14.2%' },
  { id: 'yt', name: 'YouTube', icon: Youtube, color: '#ff0000', status: 'Running', posts: 8, engagement: '8.5%' },
  { id: 'fb', name: 'Facebook', icon: Facebook, color: '#1877f2', status: 'Scheduled', posts: 4, engagement: '3.1%' },
  { id: 'x', name: 'X / Twitter', icon: Twitter, color: '#1da1f2', status: 'Paused', posts: 0, engagement: '0%' },
]

const aiTools = [
  { id: 'caption', name: 'AI Caption Generator', icon: Type, desc: 'Generate viral captions based on song mood' },
  { id: 'hashtag', name: 'AI Hashtag Generator', icon: Hash, desc: 'Detect trending hashtags for your genre' },
  { id: 'thumb', name: 'AI Thumbnail Generator', icon: ImageIcon, desc: 'Create eye-catching covers and thumbnails' },
  { id: 'reels', name: 'AI Reel Generator', icon: Film, desc: 'Extract best 15s/30s moments from video' },
]

export default function AIDashboard() {
  const [autoPost, setAutoPost] = useState(true)
  const [liveLog, setLiveLog] = useState([
    { id: 1, time: '2 mins ago', msg: 'Reel posted to Instagram: "Darling - Official Hook"', status: 'success' },
    { id: 2, time: '15 mins ago', msg: 'AI detected trending hashtag #mishraji_darling', status: 'info' },
    { id: 3, time: '1 hour ago', msg: 'YouTube Short scheduled for 8:00 PM', status: 'pending' },
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      const logs = [
        'AI is generating new hashtags...',
        'Checking viral trends for "@mishraji.up36"...',
        'Optimizing post schedule for Instagram...',
        'Syncing analytics with Facebook...',
      ]
      const randomMsg = logs[Math.floor(Math.random() * logs.length)]
      setLiveLog(prev => [{ id: Date.now(), time: 'Just now', msg: randomMsg, status: 'info' }, ...prev.slice(0, 4)])
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative z-10 pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="section-title text-3xl font-bold mb-2">AI Promotion Dashboard</h1>
            <p className="text-gray-400">Managing campaign for : <span className="neon-text font-semibold">Darling (Official)</span></p>
          </motion.div>

          {/* Master Control */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="glass-card px-6 py-4 flex items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${autoPost ? 'bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]' : 'bg-gray-600'}`} />
              <span className="text-sm font-semibold text-white">{autoPost ? 'AUTO-PILOT ACTIVE' : 'MANUAL MODE'}</span>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" checked={autoPost} onChange={() => setAutoPost(!autoPost)} />
              <span className="toggle-slider"></span>
            </label>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Platform Status */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {campaignPlatforms.map((p, i) => (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <p.icon size={80} style={{ color: p.color }} />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg" style={{ background: `${p.color}22` }}>
                        <p.icon size={20} style={{ color: p.color }} />
                      </div>
                      <h3 className="text-white font-bold">{p.name}</h3>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold tracking-wider ${
                      p.status === 'Running' ? 'bg-green-400/10 text-green-400 border border-green-400/20' : 
                      p.status === 'Scheduled' ? 'bg-blue-400/10 text-blue-400 border border-blue-400/20' : 
                      'bg-gray-400/10 text-gray-400 border border-gray-400/20'
                    }`}>
                      {p.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-dark-900/50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Posts</div>
                      <div className="text-lg font-bold text-white">{p.posts}</div>
                    </div>
                    <div className="bg-dark-900/50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Eng. Rate</div>
                      <div className="text-lg font-bold text-neon-blue">{p.engagement}</div>
                    </div>
                  </div>

                  <button className="w-full mt-4 flex items-center justify-center gap-2 text-xs font-semibold py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                    View Details <ChevronRight size={14} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* AI Tools Grid */}
            <div>
              <h2 className="text-white font-display text-sm font-bold tracking-widest mb-4 opacity-50">AI MARKETING SUITE</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aiTools.map((tool, i) => (
                  <motion.div 
                    key={tool.id}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-5 cursor-pointer border-l-4 border-l-transparent hover:border-l-neon-purple"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-purple-900/20 text-neon-purple">
                        <tool.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">{tool.name}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{tool.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Feed & Settings */}
          <div className="space-y-6">
            {/* Live Feed */}
            <div className="glass-card overflow-hidden">
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-purple animate-ping" />
                  Live AI Promotion Log
                </h3>
              </div>
              <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
                <AnimatePresence>
                  {liveLog.map((log) => (
                    <motion.div 
                      key={log.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-xs space-y-1"
                    >
                      <div className="flex justify-between">
                        <span className={`font-bold ${
                          log.status === 'success' ? 'text-green-400' : 
                          log.status === 'pending' ? 'text-blue-400' : 'text-neon-purple'
                        }`}>
                          {log.status.toUpperCase()}
                        </span>
                        <span className="text-gray-600 italic">{log.time}</span>
                      </div>
                      <p className="text-gray-300 leading-normal">{log.msg}</p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Settings */}
            <div className="glass-card p-5">
              <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <Settings size={16} className="text-gray-400" /> Promotion Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Peak Hour Optimization</span>
                  <div className="w-8 h-4 bg-neon-purple/20 rounded-full flex items-center px-1">
                    <div className="w-2 h-2 bg-neon-purple rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Audience Retargeting</span>
                  <div className="w-8 h-4 bg-neon-purple/20 rounded-full flex items-center px-1">
                    <div className="w-2 h-2 bg-neon-purple rounded-full" />
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <a href="https://youtube.com/@mishraji.up36" target="_blank" rel="noreferrer" 
                    className="flex items-center justify-between text-xs text-neon-blue hover:underline">
                    Connected: @mishraji.up36 <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
