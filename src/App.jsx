import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MusicPlayer from './components/MusicPlayer'
import Footer from './components/Footer'
import Particles from './components/Particles'
import Home from './pages/Home'
import UploadSong from './pages/UploadSong'
import AIDashboard from './pages/AIDashboard'
import Analytics from './pages/Analytics'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen" style={{ background: 'var(--color-bg)' }}>
        <Particles />
        <Navbar />
        <main className="pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadSong />} />
            <Route path="/dashboard" element={<AIDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MusicPlayer />
      </div>
    </BrowserRouter>
  )
}
