import { useState } from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'

function ContentSection({ title, description, cards, collapsible = false }) {
  const [isExpanded, setIsExpanded] = useState(!collapsible)

  return (
    <section>
      <SectionHeader title={title} description={description} />
      
      {collapsible && (
        <div style={{ textAlign: 'center', padding: '1.5rem' }}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: 'var(--primary-green)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s',
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)'
            }}
            onMouseOver={(e) => e.target.style.background = 'var(--dark-green)'}
            onMouseOut={(e) => e.target.style.background = 'var(--primary-green)'}
          >
            {isExpanded ? '▲ Ocultar conceptos' : '▼ Ver conceptos'}
          </button>
        </div>
      )}

      {isExpanded && (
        <div className="cards-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ContentSection
