import { useState } from 'react'

function Navigation({ activeSection, onSectionChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'historia', label: 'Historia' },
    { id: 'sexualidad', label: 'Sexualidad' },
    { id: 'genero', label: 'Género' },
    { id: 'sexo', label: 'Sexo' },
    { id: 'identidad', label: 'Identidad' },
    { id: 'contactos', label: 'Contactos' },
    { id: 'kahoot', label: 'Kahoot' }
  ]

  const handleSectionClick = (sectionId) => {
    onSectionChange(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav>
      <button
        className="nav-hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menú de navegación"
        aria-expanded={isMenuOpen}
      >
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
        {sections.map(section => (
          <button
            key={section.id}
            className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
            aria-pressed={activeSection === section.id}
            onClick={() => handleSectionClick(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
