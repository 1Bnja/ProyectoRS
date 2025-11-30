import { useState, useEffect } from 'react'
import banderaOrgullo from '../assets/banderaOrgullo.webp'
import Lesbian from '../assets/Lesbian.png'
import Gay from '../assets/Gay.png'
import Bisexual from '../assets/Bisexual.png'
import Transgender from '../assets/Transgender.png'
import Intersex from '../assets/Intersex.png'
import Queer from '../assets/Queer.png'
import Asexual from '../assets/Asexual.png'
import pansexual from '../assets/pansexual.png'
import NonBinary from '../assets/Nonbinary.png'
import Aromantic from '../assets/Aromantic.webp'
import generofluido from '../assets/generofluido.png'
import Heterosexual from '../assets/Heterosexual.png'
import Agenero from '../assets/Agenero.png'
import Demisexual from '../assets/Demisexual.png'
import Polisexual from '../assets/Polisexual.png'

function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false)
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [isMemorizing, setIsMemorizing] = useState(true)
  const [countdown, setCountdown] = useState(10)

  const flags = [
    { id: 1, name: 'Orgullo LGBTIQ+', src: banderaOrgullo },
    { id: 2, name: 'Lesbiana', src: Lesbian },
    { id: 3, name: 'Gay', src: Gay },
    { id: 4, name: 'Bisexual', src: Bisexual },
    { id: 5, name: 'Transgénero', src: Transgender },
    { id: 6, name: 'Intersexual', src: Intersex },
    { id: 7, name: 'Queer', src: Queer },
    { id: 8, name: 'Asexual', src: Asexual },
    { id: 9, name: 'Pansexual', src: pansexual },
    { id: 10, name: 'No Binaria', src: NonBinary },
    { id: 11, name: 'Aromántica', src: Aromantic },
    { id: 12, name: 'Género Fluido', src: generofluido },
    { id: 13, name: 'Heterosexual', src: Heterosexual },
    { id: 14, name: 'Agénero', src: Agenero },
    { id: 15, name: 'Demisexual', src: Demisexual },
    { id: 16, name: 'Polisexual', src: Polisexual }
  ]

  // Seleccionar 8 banderas aleatorias para el juego
  const initializeGame = () => {
    const selectedFlags = [...flags]
      .sort(() => Math.random() - 0.5)
      .slice(0, 8)

    // Crear pares y mezclar
    const cardPairs = [...selectedFlags, ...selectedFlags]
      .map((flag, index) => ({
        ...flag,
        uniqueId: index,
        isFlipped: false,
        isMatched: false
      }))
      .sort(() => Math.random() - 0.5)

    setCards(cardPairs)
    setFlippedCards([])
    setMatchedCards([])
    setMoves(0)
    setGameWon(false)
    setIsMemorizing(true)
    setCountdown(10)
    setGameStarted(true)
  }

  // Countdown para la fase de memorización
  useEffect(() => {
    if (isMemorizing && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (isMemorizing && countdown === 0) {
      setIsMemorizing(false)
    }
  }, [isMemorizing, countdown])

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsChecking(true)
      const [first, second] = flippedCards

      if (cards[first].id === cards[second].id) {
        // Es un par
        setMatchedCards([...matchedCards, cards[first].id])
        setFlippedCards([])
        setIsChecking(false)
        setMoves(moves + 1)

        // Verificar si ganó
        if (matchedCards.length + 1 === 8) {
          setGameWon(true)
        }
      } else {
        // No es un par
        setTimeout(() => {
          setFlippedCards([])
          setIsChecking(false)
          setMoves(moves + 1)
        }, 1000)
      }
    }
  }, [flippedCards])

  const handleCardClick = (index) => {
    if (
      isMemorizing ||
      isChecking ||
      flippedCards.includes(index) ||
      matchedCards.includes(cards[index].id) ||
      flippedCards.length === 2
    ) {
      return
    }

    setFlippedCards([...flippedCards, index])
  }

  const isCardFlipped = (index) => {
    if (isMemorizing) return true
    return flippedCards.includes(index) || matchedCards.includes(cards[index].id)
  }

  // Pantalla de inicio
  if (!gameStarted) {
    return (
      <div className="memory-game-container">
        <div className="game-start-screen">
          <h2>Memorice de Banderas LGBTIQ+</h2>
          <p className="game-description">
            Encuentra los pares de banderas de la comunidad LGBTIQ+.
            Pon a prueba tu memoria mientras aprendes sobre la diversidad.
          </p>
          <div className="game-instructions">
            <h3>Instrucciones:</h3>
            <ul>
              <li>Al comenzar, tendrás 10 segundos para memorizar las posiciones</li>
              <li>Luego, las cartas se voltearán y deberás encontrar los pares</li>
              <li>Haz clic en dos cartas para voltearlas</li>
              <li>Si coinciden, permanecerán visibles</li>
              <li>¡Intenta completar el juego con la menor cantidad de movimientos!</li>
            </ul>
          </div>
          <button className="start-game-btn" onClick={initializeGame}>
            Comenzar Juego
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="memory-game-container">
      <div className="game-header">
        <h2>Memorice de Banderas</h2>
        <p className="game-description">
          Encuentra los pares de banderas LGBTIQ+. Haz clic en las cartas para voltearlas.
        </p>
      </div>

      {isMemorizing && (
        <div className="memorization-banner">
          <div className="memorization-content">
            <span className="memorization-icon">👀</span>
            <div className="memorization-text">
              <p className="memorization-title">¡Memoriza las posiciones!</p>
              <p className="memorization-countdown">El juego comenzará en {countdown} segundos</p>
            </div>
          </div>
        </div>
      )}

      <div className="game-stats">
        <div className="stat-item">
          <span className="stat-label">Movimientos:</span>
          <span className="stat-value">{moves}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Pares encontrados:</span>
          <span className="stat-value">{matchedCards.length}/8</span>
        </div>
      </div>

      <div className="memory-grid">
        {cards.map((card, index) => (
          <div
            key={card.uniqueId}
            className={`memory-card ${isCardFlipped(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <span className="card-question">?</span>
              </div>
              <div className="card-back">
                <img src={card.src} alt={card.name} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {gameWon && (
        <div className="game-won-overlay">
          <div className="game-won-message">
            <h3>¡Felicitaciones!</h3>
            <p>Completaste el juego en {moves} movimientos</p>
            <button className="play-again-btn" onClick={initializeGame}>
              Jugar de Nuevo
            </button>
          </div>
        </div>
      )}

      <div className="game-controls">
        <button className="restart-btn" onClick={initializeGame}>
          Reiniciar Juego
        </button>
      </div>
    </div>
  )
}

export default MemoryGame
