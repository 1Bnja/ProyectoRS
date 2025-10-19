import { QRCodeSVG } from 'qrcode.react'

function QRSection() {
  const kahootUrl = 'https://kahoot.it/'

  return (
    <div className="qr-section">
      <h2>¡Pon a prueba tus conocimientos!</h2>
      <p className="qr-description">
        Ahora que has aprendido sobre diversidad sexual e identidad de género, 
        ¡es hora de poner a prueba lo que sabes! Escanea el código QR para 
        acceder a nuestro Kahoot interactivo.
      </p>
      
      <div className="qr-container">
        <div className="qr-code-wrapper">
          <QRCodeSVG 
            value={kahootUrl}
            size={256}
            level="H"
            includeMargin={true}
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>
        
        <div className="qr-info">
          <h3>📱 Cómo participar:</h3>
          <ol>
            <li>Escanea el código QR con tu dispositivo móvil</li>
            <li>Ingresa el código PIN que te proporcionará el facilitador</li>
            <li>¡Diviértete aprendiendo!</li>
          </ol>
          
          <p className="qr-link">
            También puedes acceder directamente en: 
            <a href={kahootUrl} target="_blank" rel="noopener noreferrer">
              {kahootUrl}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default QRSection
