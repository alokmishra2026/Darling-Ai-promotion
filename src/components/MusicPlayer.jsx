import { useState, useEffect, useRef } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Music2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const songs = [
  { 
    title: 'Darling – Official', 
    artist: 'mishraji.up36', 
    duration: '6:12',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' 
  },
  { 
    title: 'Darling (Remix)', 
    artist: 'mishraji.up36', 
    duration: '7:05',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
]

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentSong, setCurrentSong] = useState(0)
  const [volume, setVolume] = useState(60)
  const [expanded, setExpanded] = useState(false)
  const [interacted, setInteracted] = useState(false)
  const audioRef = useRef(null)

  // Handle Autoplay & Interaction
  useEffect(() => {
    const startAudio = () => {
      if (!interacted && audioRef.current) {
        audioRef.current.play().then(() => {
          setInteracted(true)
          setPlaying(true)
        }).catch((err) => {
          console.log("Autoplay blocked, waiting for click", err)
        })
      }
    }

    // Attempt immediately
    startAudio()

    // Listen for any click/key to start if blocked
    window.addEventListener('click', startAudio, { once: true })
    window.addEventListener('keydown', startAudio, { once: true })
    
    return () => {
      window.removeEventListener('click', startAudio)
      window.removeEventListener('keydown', startAudio)
    }
  }, [interacted])

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play().catch(e => console.log("Play failed", e))
      } else {
        audioRef.current.pause()
      }
    }
  }, [playing, currentSong])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  const onTimeUpdate = () => {
    if (audioRef.current) {
      const p = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(p)
    }
  }

  const next = () => {
    setCurrentSong((c) => (c + 1) % songs.length)
    setProgress(0)
  }
  const prev = () => {
    setCurrentSong((c) => (c - 1 + songs.length) % songs.length)
    setProgress(0)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <audio 
        ref={audioRef} 
        src={songs[currentSong].url} 
        onTimeUpdate={onTimeUpdate}
        onEnded={next}
      />
      
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : '64px' }}
        className="glass border-t"
        style={{ borderColor: 'rgba(155,93,229,0.2)' }}
      >
        {/* Main Bar */}
        <div className="flex items-center gap-3 px-4 h-16">
          {/* Album Art */}
          <button onClick={() => setExpanded(!expanded)} className="relative flex-shrink-0 group">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${playing ? 'animate-pulse' : ''}`}
              style={{ background: 'linear-gradient(135deg, #9b5de5, #f72585)' }}
            >
              <Music2 size={16} className={`text-white ${playing ? 'animate-bounce' : ''}`} />
            </div>
            {playing && (
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-ping" />
            )}
            {!interacted && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-neon-purple text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap animate-bounce shadow-lg">
                TAP TO PLAY 🎵
              </div>
            )}
          </button>

          {/* Song Info */}
          <div className="flex-shrink-0 min-w-0 hidden sm:block" style={{ width: '140px' }}>
            <div className={`text-sm font-semibold truncate ${playing ? 'neon-text' : 'text-white'}`}>
              {songs[currentSong].title}
            </div>
            <div className="text-xs text-gray-400 truncate">{songs[currentSong].artist}</div>
          </div>

          {/* Equalizer Bars */}
          <div className="hidden sm:flex items-end gap-0.5 h-8 flex-shrink-0">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="equalizer-bar"
                style={{ animationPlayState: playing ? 'running' : 'paused', opacity: playing ? 1 : 0.3 }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="flex-1 flex items-center gap-2">
            <span className="text-xs text-gray-500 hidden sm:block flex-shrink-0">
              {Math.floor(progress * 0.0432)}:{String(Math.floor((progress * 0.0432 % 1) * 60)).padStart(2, '0')}
            </span>
            <div
              className="flex-1 h-1.5 rounded-full cursor-pointer"
              style={{ background: 'rgba(155,93,229,0.2)' }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const newProgress = ((e.clientX - rect.left) / rect.width)
                if (audioRef.current) {
                  audioRef.current.currentTime = newProgress * audioRef.current.duration
                }
              }}
            >
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #9b5de5, #00b4d8)' }}
              />
            </div>
            <span className="text-xs text-gray-500 hidden sm:block flex-shrink-0">{songs[currentSong].duration}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <button onClick={prev} className="text-gray-400 hover:text-white transition-colors p-1">
              <SkipBack size={16} />
            </button>
            <button
              onClick={() => setPlaying(!playing)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{
                background: 'linear-gradient(135deg, #9b5de5, #7b2fd9)',
                boxShadow: playing ? '0 0 15px rgba(155,93,229,0.6)' : 'none',
              }}
            >
              {playing ? <Pause size={15} className="text-white" /> : <Play size={15} className="text-white ml-0.5" />}
            </button>
            <button onClick={next} className="text-gray-400 hover:text-white transition-colors p-1">
              <SkipForward size={16} />
            </button>
          </div>

          {/* Volume */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <Volume2 size={14} className="text-gray-400" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-20 h-1 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: '#9b5de5' }}
            />
          </div>
        </div>

        {/* Expanded Song List */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-4 pb-4 space-y-2"
            >
              {songs.map((song, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentSong(i); setProgress(0); setExpanded(false) }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                    i === currentSong ? 'bg-purple-900/30 border border-purple-500/30' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #9b5de5, #f72585)' }}>
                    <Music2 size={12} className="text-white" />
                  </div>
                  <div>
                    <div className={`text-sm font-medium ${i === currentSong ? 'neon-text' : 'text-white'}`}>{song.title}</div>
                    <div className="text-xs text-gray-500">{song.artist} • {song.duration}</div>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
