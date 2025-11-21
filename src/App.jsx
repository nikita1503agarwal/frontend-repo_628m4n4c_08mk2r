import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Branding from './components/Branding'
import Contact from './components/Contact'
import Social from './components/Social'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight" style={{ color: '#1B5E20' }}>
            MFS
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-gray-900" style={{ color: '#2E7D32' }}>About</a>
            <a href="#skills" className="hover:text-gray-900" style={{ color: '#2E7D32' }}>Skills</a>
            <a href="#experience" className="hover:text-gray-900" style={{ color: '#2E7D32' }}>Experience</a>
            <a href="#portfolio" className="hover:text-gray-900" style={{ color: '#2E7D32' }}>Portfolio</a>
            <a href="#branding" className="hover:text-gray-900" style={{ color: '#2E7D32' }}>Branding</a>
            <a href="#contact" className="hover:text-gray-900" style={{ color: '#2E7D32' }}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Branding />
        <Contact />
        <Social />
      </main>

      <Footer />
    </div>
  )
}

export default App
