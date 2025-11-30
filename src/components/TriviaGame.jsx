import { useState } from 'react'

function TriviaGame() {
    const [gameStarted, setGameStarted] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [showFeedback, setShowFeedback] = useState(false)
    const [gameFinished, setGameFinished] = useState(false)

    const questions = [
        {
            question: '¿Qué significa la sigla LGBTIQ+?',
            options: [
                'Lesbianas, Gays, Bisexuales, Transgénero, Intersexuales, Queer y más',
                'Lesbianas, Gays, Bisexuales, Transexuales, Indefinidos, Queer y más',
                'Lesbianas, Gays, Binarios, Transgénero, Intersexuales, Queer y más',
                'Lesbianas, Gays, Bisexuales, Transgénero, Indecisos, Queer y más'
            ],
            correctAnswer: 0,
            explanation: 'LGBTIQ+ significa Lesbianas, Gays, Bisexuales, Transgénero, Intersexuales, Queer y el símbolo + incluye todas las demás identidades de género y orientaciones sexuales.'
        },
        {
            question: '¿Qué representa la bandera del arcoíris?',
            options: [
                'Solo el orgullo gay',
                'La diversidad y el orgullo de toda la comunidad LGBTIQ+',
                'Una celebración religiosa',
                'Un símbolo político'
            ],
            correctAnswer: 1,
            explanation: 'La bandera del arcoíris es un símbolo de la diversidad y el orgullo de toda la comunidad LGBTIQ+. Cada color representa diferentes aspectos de la vida y la comunidad.'
        },
        {
            question: '¿Qué es la identidad de género?',
            options: [
                'El sexo biológico de una persona',
                'La forma en que una persona se viste',
                'La percepción interna y personal de ser hombre, mujer, ambos o ninguno',
                'La orientación sexual de una persona'
            ],
            correctAnswer: 2,
            explanation: 'La identidad de género es la percepción interna y personal de ser hombre, mujer, ambos o ninguno, independientemente del sexo asignado al nacer.'
        },
        {
            question: '¿Qué significa ser una persona transgénero?',
            options: [
                'Sentir atracción por personas del mismo género',
                'Tener una identidad de género diferente al sexo asignado al nacer',
                'Vestirse con ropa del género opuesto',
                'Cambiar de orientación sexual'
            ],
            correctAnswer: 1,
            explanation: 'Una persona transgénero es aquella cuya identidad de género difiere del sexo que le fue asignado al nacer.'
        },
        {
            question: '¿Qué es la orientación sexual?',
            options: [
                'La identidad de género de una persona',
                'La atracción emocional, romántica y/o sexual hacia otras personas',
                'La forma de expresar el género',
                'El rol que una persona desempeña en la sociedad'
            ],
            correctAnswer: 1,
            explanation: 'La orientación sexual se refiere a la atracción emocional, romántica y/o sexual que una persona siente hacia otras personas.'
        },
        {
            question: '¿Qué significa ser una persona intersexual?',
            options: [
                'Sentir atracción por múltiples géneros',
                'No identificarse con ningún género',
                'Nacer con características sexuales que no se ajustan a las definiciones típicas de masculino o femenino',
                'Cambiar de género durante la vida'
            ],
            correctAnswer: 2,
            explanation: 'Una persona intersexual nace con características sexuales (cromosomas, gónadas, hormonas) que no se ajustan a las definiciones típicas de masculino o femenino.'
        },
        {
            question: '¿Qué es la pansexualidad?',
            options: [
                'Atracción solo hacia personas del mismo género',
                'Atracción hacia personas de cualquier género o identidad',
                'No sentir atracción sexual',
                'Atracción solo hacia dos géneros'
            ],
            correctAnswer: 1,
            explanation: 'La pansexualidad es la atracción emocional, romántica y/o sexual hacia personas independientemente de su género o identidad de género.'
        },
        {
            question: '¿Qué significa ser una persona no binaria?',
            options: [
                'Sentir atracción por ambos géneros',
                'No identificarse exclusivamente como hombre o mujer',
                'Cambiar de género frecuentemente',
                'No tener orientación sexual definida'
            ],
            correctAnswer: 1,
            explanation: 'Una persona no binaria es aquella cuya identidad de género no se ajusta exclusivamente a las categorías de hombre o mujer.'
        },
        {
            question: '¿Qué es la asexualidad?',
            options: [
                'No tener identidad de género',
                'Experimentar poca o ninguna atracción sexual',
                'No tener relaciones románticas',
                'Cambiar de orientación sexual'
            ],
            correctAnswer: 1,
            explanation: 'La asexualidad es una orientación sexual en la que una persona experimenta poca o ninguna atracción sexual hacia otras personas.'
        },
        {
            question: '¿Cuál es el objetivo principal de la educación sobre diversidad sexual?',
            options: [
                'Cambiar la orientación sexual de las personas',
                'Promover el respeto, la inclusión y los derechos humanos',
                'Imponer una ideología específica',
                'Eliminar las diferencias entre las personas'
            ],
            correctAnswer: 1,
            explanation: 'El objetivo principal es promover el respeto, la inclusión y los derechos humanos de todas las personas, independientemente de su orientación sexual o identidad de género.'
        }
    ]

    const startGame = () => {
        setGameStarted(true)
        setCurrentQuestion(0)
        setScore(0)
        setSelectedAnswer(null)
        setShowFeedback(false)
        setGameFinished(false)
    }

    const handleAnswerSelect = (answerIndex) => {
        if (showFeedback) return

        setSelectedAnswer(answerIndex)
        setShowFeedback(true)

        if (answerIndex === questions[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }
    }

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(null)
            setShowFeedback(false)
        } else {
            setGameFinished(true)
        }
    }

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100
        if (percentage === 100) return '¡Perfecto! Eres un experto en diversidad sexual'
        if (percentage >= 80) return '¡Excelente! Tienes un gran conocimiento'
        if (percentage >= 60) return '¡Muy bien! Vas por buen camino'
        if (percentage >= 40) return 'Buen intento, sigue aprendiendo'
        return 'No te desanimes, la educación es un proceso continuo'
    }

    if (!gameStarted) {
        return (
            <div className="trivia-game-container">
                <div className="game-start-screen">
                    <h2>Trivia LGBTIQ+</h2>
                    <p className="game-description">
                        Pon a prueba tus conocimientos sobre diversidad sexual e identidad de género.
                        Responde 10 preguntas y aprende más sobre la comunidad LGBTIQ+.
                    </p>
                    <div className="game-instructions">
                        <h3>Instrucciones:</h3>
                        <ul>
                            <li>Responde cada pregunta seleccionando una de las opciones</li>
                            <li>Recibirás retroalimentación inmediata después de cada respuesta</li>
                            <li>Al final verás tu puntuación total</li>
                            <li>¡Aprende y diviértete!</li>
                        </ul>
                    </div>
                    <button className="start-game-btn" onClick={startGame}>
                        Comenzar Trivia
                    </button>
                </div>
            </div>
        )
    }

    if (gameFinished) {
        return (
            <div className="trivia-game-container">
                <div className="game-finished-screen">
                    <h2>¡Trivia Completada!</h2>
                    <div className="final-score">
                        <div className="score-circle">
                            <span className="score-number">{score}</span>
                            <span className="score-total">/ {questions.length}</span>
                        </div>
                    </div>
                    <p className="score-message">{getScoreMessage()}</p>
                    <div className="score-percentage">
                        Porcentaje de aciertos: {Math.round((score / questions.length) * 100)}%
                    </div>
                    <button className="restart-game-btn" onClick={startGame}>
                        Jugar de Nuevo
                    </button>
                </div>
            </div>
        )
    }

    const question = questions[currentQuestion]
    const isCorrect = selectedAnswer === question.correctAnswer

    return (
        <div className="trivia-game-container">
            <div className="trivia-header">
                <div className="question-progress">
                    Pregunta {currentQuestion + 1} de {questions.length}
                </div>
                <div className="current-score">
                    Puntuación: {score}
                </div>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
            </div>

            <div className="question-card">
                <h3 className="question-text">{question.question}</h3>

                <div className="answers-grid">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className={`answer-option ${selectedAnswer === index
                                    ? index === question.correctAnswer
                                        ? 'correct'
                                        : 'incorrect'
                                    : ''
                                } ${showFeedback && index === question.correctAnswer ? 'correct' : ''}`}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={showFeedback}
                        >
                            <span className="option-letter">
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span className="option-text">{option}</span>
                            {showFeedback && index === question.correctAnswer && (
                                <span className="check-icon">✓</span>
                            )}
                            {showFeedback && selectedAnswer === index && index !== question.correctAnswer && (
                                <span className="cross-icon">✗</span>
                            )}
                        </button>
                    ))}
                </div>

                {showFeedback && (
                    <div className={`feedback-box ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}>
                        <div className="feedback-header">
                            {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                        </div>
                        <p className="feedback-explanation">{question.explanation}</p>
                        <button className="next-question-btn" onClick={handleNextQuestion}>
                            {currentQuestion + 1 < questions.length ? 'Siguiente Pregunta' : 'Ver Resultados'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TriviaGame
