import { useState, useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'

function ContentSection({ title, description, cards, collapsible = false, carousel = false }) {
  const [isExpanded, setIsExpanded] = useState(!collapsible)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef(null)

  const minSwipeDistance = 50

  const changeCard = (newIndex) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setDragOffset(0)
    
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setIsTransitioning(false)
    }, 300)
  }

  const nextCard = () => {
    const newIndex = (currentIndex + 1) % cards.length
    changeCard(newIndex)
  }

  const prevCard = () => {
    const newIndex = (currentIndex - 1 + cards.length) % cards.length
    changeCard(newIndex)
  }

  const goToCard = (index) => {
    if (index !== currentIndex) {
      changeCard(index)
    }
  }

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const onTouchMove = (e) => {
    if (!isDragging) return
    const currentTouch = e.targetTouches[0].clientX
    setTouchEnd(currentTouch)
    const offset = currentTouch - touchStart
    setDragOffset(offset)
  }

  const onTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    if (!touchStart || !touchEnd) {
      setDragOffset(0)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextCard()
    } else if (isRightSwipe) {
      prevCard()
    } else {
      setDragOffset(0)
    }
  }

  // Mouse handlers
  const onMouseDown = (e) => {
    setTouchEnd(0)
    setTouchStart(e.clientX)
    setIsDragging(true)
    e.preventDefault()
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    const currentPosition = e.clientX
    setTouchEnd(currentPosition)
    const offset = currentPosition - touchStart
    setDragOffset(offset)
  }

  const onMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    if (!touchStart || !touchEnd) {
      setDragOffset(0)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextCard()
    } else if (isRightSwipe) {
      prevCard()
    } else {
      setDragOffset(0)
    }
  }

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setDragOffset(0)
    }
  }

  // Soporte para teclado
  useEffect(() => {
    if (!carousel || !isExpanded) return

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevCard()
      if (e.key === 'ArrowRight') nextCard()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex, carousel, isExpanded])

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

      {isExpanded && carousel && (
        <div className="carousel-container">
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={prevCard}
            aria-label="Tarjeta anterior"
            disabled={isTransitioning}
          >
            ‹
          </button>
          
          <div 
            ref={carouselRef}
            className="carousel-content"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            style={{ 
              opacity: isTransitioning ? 0.5 : 1,
              transform: `translateX(${dragOffset * 0.3}px) scale(${isTransitioning ? 0.98 : 1})`,
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'all 0.4s ease',
              userSelect: 'none'
            }}
          >
            <Card
              icon={cards[currentIndex].icon}
              title={cards[currentIndex].title}
              description={cards[currentIndex].description}
            />
          </div>

          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={nextCard}
            aria-label="Siguiente tarjeta"
            disabled={isTransitioning}
          >
            ›
          </button>

          <div className="carousel-indicators">
            {cards.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToCard(index)}
                aria-label={`Ir a tarjeta ${index + 1} de ${cards.length}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      )}

      {isExpanded && !carousel && (
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
