import { useState, useEffect } from 'react'
import { triviaQuestions } from '../data/triviaQuestions'

function TriviaGame() {
  const [selectedQuestions, setSelectedQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  // Seleccionar 10 preguntas aleatorias al iniciar
  const initializeGame = () => {
    const shuffled = [...triviaQuestions].sort(() => Math.random() - 0.5)
    setSelectedQuestions(shuffled.slice(0, 10))
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setTimeLeft(60)
    setGameStarted(true)
    setGameFinished(false)
    setShowFeedback(false)
  }

  // Temporizador
  useEffect(() => {
    if (gameStarted && !gameFinished && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !gameFinished) {
      finishGame()
    }
  }, [gameStarted, gameFinished, timeLeft])

  const handleAnswerClick = (answerIndex) => {
    if (showFeedback || gameFinished) return

    setSelectedAnswer(answerIndex)
    setShowFeedback(true)

    const isCorrect = answerIndex === selectedQuestions[currentQuestionIndex].correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }

    // Esperar 1.5 segundos antes de pasar a la siguiente pregunta
    setTimeout(() => {
      if (currentQuestionIndex < selectedQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
        setShowFeedback(false)
      } else {
        finishGame()
      }
    }, 1500)
  }

  const finishGame = () => {
    setGameFinished(true)
    setGameStarted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / 10) * 100
    if (percentage === 100) return '¡Perfecto! Eres un experto en diversidad 🌟'
    if (percentage >= 80) return '¡Excelente! Tienes muy buenos conocimientos 🎉'
    if (percentage >= 60) return '¡Bien! Vas por buen camino 👍'
    if (percentage >= 40) return 'Puedes mejorar, sigue aprendiendo 📚'
    return 'Aún hay mucho por aprender, ¡no te rindas! 💪'
  }

  if (!gameStarted && !gameFinished) {
    return (
      <div className="trivia-game-container">
        <div className="trivia-intro">
          <h2>🎯 Trivia de Diversidad Sexual</h2>
          <p className="trivia-description">
            Pon a prueba tus conocimientos sobre diversidad sexual e identidad de género. 
            Responde 10 preguntas en 60 segundos. ¡Buena suerte!
          </p>
          <div className="trivia-rules">
            <h3>📋 Reglas del juego:</h3>
            <ul>
              <li>Tienes <strong>60 segundos</strong> para responder todas las preguntas</li>
              <li>Son <strong>10 preguntas</strong> seleccionadas aleatoriamente</li>
              <li>Cada respuesta correcta suma <strong>1 punto</strong></li>
              <li>Las preguntas se responden automáticamente después de seleccionar una opción</li>
              <li>¡No puedes volver atrás!</li>
            </ul>
          </div>
          <button className="trivia-start-btn" onClick={initializeGame}>
            🚀 Comenzar Trivia
          </button>
        </div>
      </div>
    )
  }

  if (gameFinished) {
    return (
      <div className="trivia-game-container">
        <div className="trivia-results">
          <h2>🎊 ¡Juego Terminado!</h2>
          <div className="trivia-score-display">
            <div className="trivia-score-number">{score}/10</div>
            <div className="trivia-score-percentage">{((score / 10) * 100).toFixed(0)}%</div>
          </div>
          <p className="trivia-score-message">{getScoreMessage()}</p>
          <div className="trivia-stats">
            <div className="trivia-stat">
              <span className="trivia-stat-label">Correctas:</span>
              <span className="trivia-stat-value correct">{score}</span>
            </div>
            <div className="trivia-stat">
              <span className="trivia-stat-label">Incorrectas:</span>
              <span className="trivia-stat-value incorrect">{10 - score}</span>
            </div>
          </div>
          <button className="trivia-restart-btn" onClick={initializeGame}>
            🔄 Jugar de Nuevo
          </button>
        </div>
      </div>
    )
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex]

  return (
    <div className="trivia-game-container">
      <div className="trivia-header">
        <div className="trivia-progress">
          <div className="trivia-progress-bar">
            <div 
              className="trivia-progress-fill"
              style={{ width: `${((currentQuestionIndex + 1) / 10) * 100}%` }}
            ></div>
          </div>
          <span className="trivia-progress-text">
            Pregunta {currentQuestionIndex + 1} de 10
          </span>
        </div>
        <div className={`trivia-timer ${timeLeft <= 10 ? 'warning' : ''}`}>
          ⏱️ {timeLeft}s
        </div>
      </div>

      <div className="trivia-score-current">
        Puntuación: {score}
      </div>

      <div className="trivia-question-card">
        <h3 className="trivia-question">{currentQuestion.question}</h3>
        <div className="trivia-options">
          {currentQuestion.options.map((option, index) => {
            let className = 'trivia-option'
            
            if (showFeedback) {
              if (index === currentQuestion.correctAnswer) {
                className += ' correct'
              } else if (index === selectedAnswer) {
                className += ' incorrect'
              }
            } else if (selectedAnswer === index) {
              className += ' selected'
            }

            return (
              <button
                key={index}
                className={className}
                onClick={() => handleAnswerClick(index)}
                disabled={showFeedback}
              >
                <span className="trivia-option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="trivia-option-text">{option}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TriviaGame