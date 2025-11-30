import { useState, useEffect } from 'react'
import RainbowBar from './components/RainbowBar'
import Header from './components/Header'
import Navigation from './components/Navigation'
import IntroSection from './components/IntroSection'
import ContentSection from './components/ContentSection'
import Timeline from './components/Timeline'
import GamesSection from './components/GamesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { sectionsData } from './data/sectionsData'
import './styles/main.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  useEffect(() => {
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

        {activeSection === 'historia' && (
          <section id="historia" className="section active">
            <Timeline />
          </section>
        )}

        {activeSection === 'sexualidad' && (
          <div className="section active">
            <ContentSection
              title={sectionsData.sexualidad.title}
              description={sectionsData.sexualidad.description}
              cards={sectionsData.sexualidad.cards}
              collapsible={false}
              carousel={true}
            />
          </div>
        )}

        {activeSection === 'genero' && (
          <div className="section active">
            <ContentSection
              title={sectionsData.genero.title}
              description={sectionsData.genero.description}
              cards={sectionsData.genero.cards}
              collapsible={false}
              carousel={true}
            />
          </div>
        )}

        {activeSection === 'sexo' && (
          <div className="section active">
            <ContentSection
              title={sectionsData.sexo.title}
              description={sectionsData.sexo.description}
              cards={sectionsData.sexo.cards}
              collapsible={false}
              carousel={true}
            />
          </div>
        )}

        {activeSection === 'identidad' && (
          <div className="section active">
            <ContentSection
              title={sectionsData.identidad.title}
              description={sectionsData.identidad.description}
              cards={sectionsData.identidad.cards}
              collapsible={false}
              carousel={true}
            />
          </div>
        )}

        {activeSection === 'contactos' && (
          <div className='section active'>
            <ContactSection />
          </div>
        )}

        {activeSection === 'minijuegos' && (
          <section id="minijuegos" className="section active">
            <GamesSection />
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export default App
