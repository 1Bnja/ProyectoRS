import { useState, useEffect } from 'react'
import RainbowBar from './components/RainbowBar'
import Header from './components/Header'
import Navigation from './components/Navigation'
import IntroSection from './components/IntroSection'
import ContentSection from './components/ContentSection'
import Footer from './components/Footer'
import { sectionsData } from './data/sectionsData'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    // Animación de entrada
    document.body.style.opacity = '0'
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s'
      document.body.style.opacity = '1'
    }, 100)
  }, [])

  return (
    <>
      <RainbowBar />
      <Header />
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main>
        {activeSection === 'inicio' && (
          <section id="inicio" className="section active">
            <IntroSection />
          </section>
        )}

        {activeSection === 'sexualidad' && (
          <div className="section active">
            <ContentSection
              title={sectionsData.sexualidad.title}
              description={sectionsData.sexualidad.description}
              cards={sectionsData.sexualidad.cards}
            />
          </div>
        )}

        {activeSection === 'genero' && (
          <div className="section active">
            <ContentSection
              title={sectionsData.genero.title}
              description={sectionsData.genero.description}
              cards={sectionsData.genero.cards}
            />
          </div>
        )}

        {activeSection === 'sexo' && (
          <div className="section active">
            <ContentSection
              title={sectionsData.sexo.title}
              description={sectionsData.sexo.description}
              cards={sectionsData.sexo.cards}
            />
          </div>
        )}

        {activeSection === 'identidad' && (
          <div className="section active">
            <ContentSection
              title={sectionsData.identidad.title}
              description={sectionsData.identidad.description}
              cards={sectionsData.identidad.cards}
            />
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

export default App
