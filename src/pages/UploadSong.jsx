import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, Music2, Film, CheckCircle, Loader2, X, Instagram, Youtube, Facebook, Twitter } from 'lucide-react'

const steps = [
  { id: 1, label: 'Detecting best moments...', color: '#9b5de5' },
  { id: 2, label: 'Cutting 15s / 30s clips...', color: '#00b4d8' },
  { id: 3, label: 'Adding captions & effects...', color: '#f72585' },
  { id: 4, label: 'Converting to Reels/Shorts...', color: '#f9c74f' },
  { id: 5, label: 'Scheduling posts...', color: '#06d6a0' },
]

const platforms = [
  { id: 'youtube', icon: Youtube, name: 'YouTube Shorts', color: '#ff0000', checked: true },
  { id: 'instagram', icon: Instagram, name: 'Instagram Reels', color: '#e1306c', checked: true },
  { id: 'facebook', icon: Facebook, name: 'Facebook Reels', color: '#1877f2', checked: false },
  { id: 'twitter', icon: Twitter, name: 'X / Twitter', color: '#1da1f2', checked: false },
]

export default function UploadSong() {
  const [file, setFile] = useState(null)
  const [dragging, setDragging] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [done, setDone] = useState(false)
  const [selectedPlatforms, setSelectedPlatforms] = useState({ youtube: true, instagram: true, facebook: false, twitter: false })
  const fileRef = useRef()

  const handleFile = (f) => {
    if (!f) return
    setFile(f)
    setDone(false)
    setCurrentStep(0)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    handleFile(e.dataTransfer.files[0])
  }

  const startProcess = () => {
    setProcessing(true)
    setCurrentStep(0)
    const interval = setInterval(() => {
      setCurrentStep((s) => {
        if (s >= steps.length - 1) {
          clearInterval(interval)
          setProcessing(false)
          setDone(true)
          return s
        }
        return s + 1
      })
    }, 1200)
  }

  return (
    <div className="relative z-10 pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4"
            style={{ background: 'rgba(155,93,229,0.15)', border: '1px solid rgba(155,93,229,0.3)', color: '#9b5de5' }}>
            <Music2 size={12} /> Upload & Promote
          </div>
          <h1 className="section-title mb-3">Upload Your Song</h1>
          <p className="text-gray-500">Drop your audio or video file — AI handles everything else</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Zone */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            {!file ? (
              <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileRef.current.click()}
                className={`glass-card h-64 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                  dragging ? 'border-purple-400 bg-purple-900/20' : ''
                }`}
                style={dragging ? { borderColor: '#9b5de5', boxShadow: '0 0 30px rgba(155,93,229,0.3)' } : {}}
              >
                <input
                  ref={fileRef}
                  type="file"
                  accept="audio/*,video/*"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files[0])}
                />
                <motion.div animate={{ y: dragging ? -10 : 0 }} transition={{ duration: 0.3 }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(155,93,229,0.15)', border: '2px dashed rgba(155,93,229,0.4)' }}>
                    <Upload size={24} style={{ color: '#9b5de5' }} />
                  </div>
                </motion.div>
                <p className="text-white font-semibold mb-1">Drop your file here</p>
                <p className="text-gray-500 text-sm">or click to browse</p>
                <p className="text-gray-600 text-xs mt-3">Supports MP3, MP4, WAV, MOV, AVI</p>
              </div>
            ) : (
              <div className="glass-card p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: file.type.includes('video') ? 'rgba(247,37,133,0.15)' : 'rgba(155,93,229,0.15)' }}>
                    {file.type.includes('video') ? <Film size={20} style={{ color: '#f72585' }} /> : <Music2 size={20} style={{ color: '#9b5de5' }} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold truncate">{file.name}</p>
                    <p className="text-gray-500 text-xs mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB • {file.type.split('/')[1]?.toUpperCase()}</p>
                  </div>
                  <button onClick={() => { setFile(null); setDone(false); setProcessing(false) }}
                    className="text-gray-500 hover:text-red-400 transition-colors">
                    <X size={18} />
                  </button>
                </div>

                {/* Fake waveform */}
                <div className="flex items-center gap-0.5 h-12 mb-6">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="flex-1 rounded-sm"
                      style={{
                        height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 20}%`,
                        background: `linear-gradient(to top, #9b5de5, #00b4d8)`,
                        opacity: 0.7,
                      }} />
                  ))}
                </div>

                {/* Processing Steps */}
                {(processing || done) && (
                  <div className="space-y-2 mb-4">
                    {steps.map((step, i) => (
                      <div key={step.id} className={`flex items-center gap-3 transition-all duration-300 ${i <= currentStep ? 'opacity-100' : 'opacity-30'}`}>
                        {i < currentStep || done ? (
                          <CheckCircle size={16} style={{ color: '#06d6a0' }} />
                        ) : i === currentStep && processing ? (
                          <Loader2 size={16} className="animate-spin" style={{ color: step.color }} />
                        ) : (
                          <div className="w-4 h-4 rounded-full border" style={{ borderColor: step.color }} />
                        )}
                        <span className="text-sm" style={{ color: i <= currentStep ? step.color : '#6b7280' }}>{step.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {done ? (
                  <div className="text-center py-3 rounded-xl"
                    style={{ background: 'rgba(6,214,160,0.1)', border: '1px solid rgba(6,214,160,0.3)' }}>
                    <div className="text-green-400 font-semibold text-sm">✅ Processing Complete! Clips ready to post.</div>
                  </div>
                ) : processing ? null : (
                  <button onClick={startProcess} className="btn-primary w-full flex items-center justify-center gap-2">
                    <Zap size={16} /> Process with AI
                  </button>
                )}
              </div>
            )}

            {/* Upload tips */}
            <div className="glass-card p-4 mt-4">
              <p className="text-xs font-semibold text-gray-400 mb-2">💡 Best Results Tips</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Upload full song video for best clip detection</li>
                <li>• HD video (1080p) produces better reels</li>
                <li>• Min 1 minute audio for AI to find best moments</li>
              </ul>
            </div>
          </motion.div>

          {/* Platform Selection + Settings */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="neon-text">🌐</span> Target Platforms
              </h3>
              <div className="space-y-3">
                {platforms.map((p) => (
                  <label key={p.id} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    selectedPlatforms[p.id] ? 'bg-purple-900/20 border border-purple-500/20' : 'hover:bg-white/5'
                  }`}>
                    <input
                      type="checkbox"
                      checked={selectedPlatforms[p.id]}
                      onChange={(e) => setSelectedPlatforms(prev => ({ ...prev, [p.id]: e.target.checked }))}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${
                      selectedPlatforms[p.id] ? 'bg-purple-600' : 'border border-gray-600'
                    }`}>
                      {selectedPlatforms[p.id] && <span className="text-white text-xs">✓</span>}
                    </div>
                    <p.icon size={18} style={{ color: p.color }} />
                    <span className="text-sm text-gray-300 flex-1">{p.name}</span>
                    {selectedPlatforms[p.id] && <span className="text-xs text-green-400">Selected</span>}
                  </label>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">🎬 Clip Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-400 block mb-2">Clip Duration</label>
                  <div className="flex gap-2">
                    {['15s', '30s', '60s'].map((d) => (
                      <button key={d}
                        className="flex-1 py-2 rounded-lg text-sm font-medium border transition-all"
                        style={d === '30s' ? {
                          background: 'rgba(155,93,229,0.2)', borderColor: '#9b5de5', color: '#9b5de5'
                        } : {
                          background: 'transparent', borderColor: 'rgba(155,93,229,0.2)', color: '#6b7280'
                        }}>
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-2">Auto-post Schedule</label>
                  <select className="w-full bg-transparent border rounded-lg p-2.5 text-sm text-gray-300"
                    style={{ borderColor: 'rgba(155,93,229,0.3)' }}>
                    <option value="now" className="bg-gray-900">Post Immediately</option>
                    <option value="morning" className="bg-gray-900">Morning (9 AM)</option>
                    <option value="evening" className="bg-gray-900">Evening (7 PM)</option>
                    <option value="peak" className="bg-gray-900">Peak Hours (AI Decides)</option>
                  </select>
                </div>
              </div>
            </div>

            {done && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-base"
              >
                🚀 Post to {Object.values(selectedPlatforms).filter(Boolean).length} Platforms
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Zap(props) {
  return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
}
