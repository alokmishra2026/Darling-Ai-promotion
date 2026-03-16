import { motion } from 'framer-motion'
import { 
  Phone, Mail, Instagram, Youtube, Twitter, Facebook, 
  MapPin, Send, MessageSquare, Music2 
} from 'lucide-react'

export default function Contact() {
  return (
    <div className="relative z-10 pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="section-title mb-4">Connect With AI Experts</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Have questions about your song promotion or need custom marketing solutions? Reach out to the Darling AI support team.
            </p>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass-card p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 blur-[60px]" />
              <h2 className="text-2xl font-display font-black text-white mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-900/20 border border-purple-500/20 flex items-center justify-center text-neon-purple transition-all group-hover:scale-110 group-hover:bg-purple-900/40">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Call Support</h4>
                    <p className="text-white text-lg font-bold">+91 87951 12276</p>
                    <p className="text-white text-lg font-bold">+91 78000 19720</p>
                    <p className="text-gray-600 text-xs italic mt-1">Founders Available: 10AM - 8PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center text-neon-blue transition-all group-hover:scale-110 group-hover:bg-blue-900/40">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email Queries</h4>
                    <p className="text-white text-lg font-bold">promo@darlingai.com</p>
                    <p className="text-gray-600 text-xs mt-1">Average response time: 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-pink-900/20 border border-pink-500/20 flex items-center justify-center text-neon-pink transition-all group-hover:scale-110 group-hover:bg-pink-900/40">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">DM on Instagram</h4>
                    <a href="https://instagram.com/mishraji.up36" target="_blank" rel="noreferrer" className="text-white text-lg font-bold hover:text-neon-pink transition-colors">@mishraji.up36</a>
                    <div className="flex gap-2 mt-2">
                       <a href="https://instagram.com/alok_mishra85" target="_blank" rel="noreferrer" className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white">Alok Mishra</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Strip */}
              <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
                {[
                  { icon: Youtube, color: '#ff0000', href: 'https://youtube.com/@mishraji.up36' },
                  { icon: Facebook, color: '#1877f2', href: '#' },
                  { icon: Twitter, color: '#1da1f2', href: '#' },
                ].map((social, idx) => (
                  <a key={idx} href={social.href} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 transition-transform" style={{ color: social.color }}>
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10"
          >
            <h2 className="text-2xl font-display font-black text-white mb-6">Send Message</h2>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-dark-900/50 border border-white/10 rounded-xl p-3.5 text-white focus:border-neon-purple outline-none transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-dark-900/50 border border-white/10 rounded-xl p-3.5 text-white focus:border-neon-purple outline-none transition-all" />
                </div>
              </div>
              
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Select Topic</label>
                <select className="w-full bg-dark-900/50 border border-white/10 rounded-xl p-3.5 text-white focus:border-neon-purple outline-none transition-all appearance-none cursor-pointer">
                  <option className="bg-dark-900">Song Promotion Help</option>
                  <option className="bg-dark-900">AI Tool Error</option>
                  <option className="bg-dark-900">YouTube Strategy</option>
                  <option className="bg-dark-900">Collaboration</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Your Message</label>
                <textarea rows="4" placeholder="How can we help your song go viral?" className="w-full bg-dark-900/50 border border-white/10 rounded-xl p-3.5 text-white focus:border-neon-purple outline-none transition-all resize-none"></textarea>
              </div>

              <button className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-base">
                <Send size={18} /> Send Message to AI Team
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
