function Navigation({ activeSection, onSectionChange }) {
  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sexualidad', label: 'Sexualidad' },
    { id: 'genero', label: 'Género' },
    { id: 'sexo', label: 'Sexo' },
    { id: 'identidad', label: 'Identidad' }
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
