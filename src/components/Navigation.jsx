function Navigation({ activeSection, onSectionChange }) {
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

  return (
    <nav>
      <div className="nav-content">
        {sections.map(section => (
          <button
            key={section.id}
            className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
            aria-pressed={activeSection === section.id}
            onClick={() => onSectionChange(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
