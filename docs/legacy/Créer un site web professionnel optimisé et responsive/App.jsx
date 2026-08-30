import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import SearchSection from './components/SearchSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <SearchSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
