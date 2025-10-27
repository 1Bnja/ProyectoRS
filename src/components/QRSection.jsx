import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

function QRSection() {
  const [activeTab, setActiveTab] = useState('ninos')

  const kahoots = {
    ninos: {
      title: 'Kahoot para Niños',
      description: 'Ahora que has aprendido sobre diversidad sexual e identidad de género, ¡es hora de poner a prueba lo que sabes! Esta versión está adaptada para niños de 6 a 11 años con preguntas divertidas y educativas.',
      url: 'https://kahoot.it/',
      ageGroup: '6-11 años'
    },
    adolescentes: {
      title: 'Kahoot para Adolescentes',
      description: 'Ahora que has aprendido sobre diversidad sexual e identidad de género, ¡es hora de poner a prueba lo que sabes! Esta versión está diseñada para adolescentes de 12 a 17 años con preguntas más profundas.',
      url: 'https://kahoot.it/',
      ageGroup: '12-17 años'
    },
    adultos: {
      title: 'Kahoot para Adultos',
      description: 'Ahora que has aprendido sobre diversidad sexual e identidad de género, ¡es hora de poner a prueba lo que sabes! Esta versión está orientada para adultos mayores de 18 años con contenido más complejo.',
      url: 'https://kahoot.it/',
      ageGroup: '18+ años'
    }
  }

  const currentKahoot = kahoots[activeTab]

  return (
    <div className="qr-section">
      <h2>¡Pon a prueba tus conocimientos!</h2>
      
      {/* Pestañas */}
      <div className="qr-tabs">
        <button
          className={`qr-tab ${activeTab === 'ninos' ? 'active' : ''}`}
          onClick={() => setActiveTab('ninos')}
        >
          Niños
        </button>
        <button
          className={`qr-tab ${activeTab === 'adolescentes' ? 'active' : ''}`}
          onClick={() => setActiveTab('adolescentes')}
        >
          Adolescentes
        </button>
        <button
          className={`qr-tab ${activeTab === 'adultos' ? 'active' : ''}`}
          onClick={() => setActiveTab('adultos')}
        >
          Adultos
        </button>
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="qr-tab-content">
        <h3 className="qr-tab-title">{currentKahoot.title}</h3>
        <p className="qr-age-group">Edad recomendada: {currentKahoot.ageGroup}</p>
        <p className="qr-description">{currentKahoot.description}</p>
        
        <div className="qr-container">
          <div className="qr-code-wrapper">
            <QRCodeSVG 
              value={currentKahoot.url}
              size={256}
              level="H"
              includeMargin={true}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>
          
          <div className="qr-info">
            <h3>Cómo participar:</h3>
            <ol>
              <li>Escanea el código QR con tu dispositivo móvil</li>
              <li>Ingresa el código PIN que te proporcionará el facilitador</li>
              <li>¡Diviértete aprendiendo!</li>
            </ol>
            
            <p className="qr-link">
              También puedes acceder directamente en: 
              <a href={currentKahoot.url} target="_blank" rel="noopener noreferrer">
                {currentKahoot.url}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRSection
