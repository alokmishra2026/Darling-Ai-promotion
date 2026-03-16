import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp, Users, Eye, Zap, Globe, Clock,
  ArrowUpRight, BarChart3, PieChart as PieChartIcon, Monitor, Smartphone
} from 'lucide-react'
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell
} from 'recharts'

const data = [
  { name: 'Day 1', views: 4000, viral: 24 },
  { name: 'Day 2', views: 7000, viral: 45 },
  { name: 'Day 3', views: 12000, viral: 67 },
  { name: 'Day 4', views: 25000, viral: 89 },
  { name: 'Day 5', views: 48000, viral: 94 },
  { name: 'Day 6', views: 92000, viral: 98 },
  { name: 'Day 7', views: 145000, viral: 99 },
]

const platformData = [
  { name: 'Instagram', value: 45, color: '#e1306c' },
  { name: 'YouTube', value: 30, color: '#ff0000' },
  { name: 'Facebook', value: 15, color: '#1877f2' },
  { name: 'X / Twitter', value: 10, color: '#1da1f2' },
]

const locations = [
  { country: 'India', traffic: '65%', flag: '🇮🇳' },
  { country: 'United States', traffic: '12%', flag: '🇺🇸' },
  { country: 'Nepal', traffic: '8%', flag: '🇳🇵' },
  { country: 'UAE', traffic: '5%', flag: '🇦🇪' },
]

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d')

  return (
    <div className="relative z-10 pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="section-title text-3xl font-bold mb-2">Performance Analytics</h1>
            <p className="text-gray-400">Deep insights into your song's viral journey</p>
          </motion.div>

          <div className="flex bg-dark-900/80 p-1 rounded-xl border border-white/5">
            {['24h', '7d', '30d', 'All'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  timeRange === range ? 'bg-neon-purple text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Impressions', shadow: 'purple', value: '2,482,104', icon: Eye, change: '+12.5%', color: '#9b5de5' },
            { label: 'Engagement Rate', shadow: 'blue', value: '14.2%', icon: Users, change: '+2.1%', color: '#00b4d8' },
            { label: 'Viral Propensity', shadow: 'pink', value: '94/100', icon: Zap, change: '+4.8%', color: '#f72585' },
            { label: 'Avg. Retention', shadow: 'gold', value: '1:45s', icon: Clock, change: '-0.3%', color: '#f9c74f' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 border-b-2"
              style={{ borderBottomColor: stat.color }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg" style={{ background: `${stat.color}15` }}>
                  <stat.icon size={20} style={{ color: stat.color }} />
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  <TrendingUp size={10} /> {stat.change}
                </div>
              </div>
              <div className="text-2xl font-black text-white font-display mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Growth Chart */}
          <div className="lg:col-span-2 glass-card p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white font-bold flex items-center gap-2">
                <TrendingUp size={18} className="text-neon-purple" /> Growth Trajectory
              </h3>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Views vs Time</div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b5de5" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#9b5de5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="name" stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0d0d1a', border: '1px solid #ffffff10', borderRadius: '12px', fontSize: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="views" stroke="#9b5de5" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Platform Distribution */}
          <div className="glass-card p-6">
            <h3 className="text-white font-bold mb-8 flex items-center gap-2">
              <PieChartIcon size={18} className="text-neon-blue" /> Social Breakdown
            </h3>
            <div className="h-[200px] w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={platformData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" stroke="#6b7280" fontSize={11} axisLine={false} tickLine={false} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={12}>
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {platformData.map((p) => (
                <div key={p.name} className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{p.name}</span>
                  <span className="text-white font-bold">{p.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Audience Location */}
          <div className="glass-card p-6">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <Globe size={18} className="text-neon-green" /> Top Countries
            </h3>
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.country} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300 flex items-center gap-2">
                      <span className="text-lg">{loc.flag}</span> {loc.country}
                    </span>
                    <span className="text-white font-semibold">{loc.traffic}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: loc.traffic }}
                      className="h-full bg-neon-green/60"
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="lg:col-span-2 glass-card p-6">
            <h3 className="text-white font-bold mb-8">Channel Health</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Mobile Views', icon: Smartphone, val: '88%', color: '#9b5de5' },
                { label: 'Desktop Views', icon: Monitor, val: '12%', color: '#00b4d8' },
                { label: 'Sub Growth', icon: Users, val: '+1.2k', color: '#06d6a0' },
                { label: 'Re-shares', icon: Zap, val: '4.5k', color: '#f72585' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 bg-white/5 border border-white/5">
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <div className="text-lg font-bold text-white">{item.val}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-tighter">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
