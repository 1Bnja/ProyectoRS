import { useState, useEffect } from 'react';
import '../styles/components/timeline.css';
import chileFlag from '../assets/Flag_of_Chile.svg.png';

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/info.json')
      .then(response => response.json())
      .then(data => {
        setTimelineData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error cargando datos históricos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="timeline-container" style={{ minHeight: loading ? 'calc(100vh - 200px)' : 'auto' }}>
      <div className="timeline-header">
        <h2>Historia del Movimiento LGBTIQ+</h2>
        <p>Evolución histórica de los derechos y la lucha por la igualdad</p>
      </div>

      {loading ? (
        <div className="timeline-loading">Cargando línea de tiempo...</div>
      ) : (
        <div className="timeline-line-wrapper">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              {/* Punto y línea vertical */}
              <div className="timeline-marker-container">
                <div className="timeline-point"></div>
                {index < timelineData.length - 1 && <div className="timeline-connector"></div>}
              </div>

              {/* Contenido del periodo */}
              <div className="timeline-content-box">
                <h3 className="timeline-period-title">{item.periodo}</h3>

                <div className="timeline-events">
                  {/* Eventos Mundiales */}
                  <div className="event-section">
                    <h4 className="event-header mundial">
                      <span className="event-icon">🌍</span>
                      Contexto Mundial
                    </h4>
                    <div
                      className="event-content"
                      dangerouslySetInnerHTML={{ __html: formatText(item.hitoMundial) }}
                    />
                  </div>

                  {/* Eventos Chilenos */}
                  <div className="event-section">
                    <h4 className="event-header chileno">
                      <img src={chileFlag} alt="Bandera de Chile" className="flag-image" />
                      Chile
                    </h4>
                    <div
                      className="event-content"
                      dangerouslySetInnerHTML={{ __html: formatText(item.hitoChileno) }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Función auxiliar para formatear el texto
const formatText = (text) => {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/><br/>');
};

export default Timeline;
