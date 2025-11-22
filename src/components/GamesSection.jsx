import { useState } from 'react'
import MemoryGame from './MemoryGame'
import TriviaGame from './TriviaGame'

function GamesSection() {
  const [selectedGame, setSelectedGame] = useState('memory')

  const games = [
    {
      id: 'memory',
      name: 'Memorice',
      description: 'Encuentra los pares de banderas LGBTIQ+',
      icon: '🎴'
    },
    {
      id: 'trivia',
      name: 'Trivia',
      description: 'Pon a prueba tus conocimientos',
      icon: '❓'
    }
  ]

  return (
    <div className="games-section">
      <div className="games-header">
        <h2>Minijuegos Educativos</h2>
        <p className="games-subtitle">
          Aprende sobre la diversidad sexual e identidad de género de forma divertida e interactiva
        </p>
      </div>

      {/* Selector de juegos */}
      <div className="game-selector">
        {games.map((game) => (
          <button
            key={game.id}
            className={`game-selector-btn ${selectedGame === game.id ? 'active' : ''}`}
            onClick={() => setSelectedGame(game.id)}
          >
            <span className="game-icon">{game.icon}</span>
            <div className="game-info">
              <h3>{game.name}</h3>
              <p>{game.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Renderizar el juego seleccionado */}
      <div className="game-content">
        {selectedGame === 'memory' && <MemoryGame />}
        {selectedGame === 'trivia' && <TriviaGame />}
      </div>
    </div>
  )
}

export default GamesSection
