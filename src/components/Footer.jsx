import { Link } from 'react-router-dom'
import { Music2, Youtube, Instagram, Github, Facebook } from 'lucide-react'

const socialLinks = [
  { icon: Youtube, color: '#ff0000', href: 'https://youtube.com/@mishraji.up36' },
  { icon: Instagram, color: '#e1306c', href: 'https://instagram.com/mishraji.up36' },
  { icon: Github, color: '#ffffff', href: 'https://github.com/alokmishra2026' },
  { icon: Facebook, color: '#1877f2', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t" style={{ borderColor: 'rgba(155,93,229,0.15)', background: 'rgba(8,8,16,0.9)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #9b5de5, #f72585)' }}>
                <Music2 size={18} className="text-white" />
              </div>
              <div>
                <div className="font-display text-sm font-bold neon-text">DARLING AI</div>
                <div className="text-xs text-gray-500">Promotion Platform</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI-powered music promotion for the next generation of artists. Auto-post, create reels, and go viral.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, color, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 12px ${color}66`}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  <Icon size={16} style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-display text-sm tracking-wider">NAVIGATION</h4>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['Upload Song', '/upload'],
                ['AI Dashboard', '/dashboard'],
                ['Analytics', '/analytics'],
                ['About', '/about'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-gray-500 text-sm hover:text-purple-400 transition-colors flex items-center gap-1">
                    <span className="text-purple-600">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channel */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-display text-sm tracking-wider">YOUTUBE CHANNEL</h4>
            <a
              href="https://youtube.com/@mishraji.up36"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-4 flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600">
                <Youtube size={18} className="text-white" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">@mishraji.up36</div>
                <div className="text-gray-500 text-xs">Subscribe for music 🎵</div>
              </div>
            </a>
            <div className="mt-4 text-gray-600 text-xs">
              Founders: <span className="text-purple-400">Aditya Pandit</span> & <span className="text-blue-400">Alok Pandit</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderColor: 'rgba(155,93,229,0.1)' }}>
          <div className="text-gray-600 text-xs">
            © 2026 Darling AI Promotion. All rights reserved.
          </div>
          <div className="text-gray-600 text-xs">
            Built with ❤️ for <span className="neon-text">mishraji.up36</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
