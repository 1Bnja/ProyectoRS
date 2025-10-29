import { useState } from 'react'
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


function IntroSection() {
  const [selectedFlag, setSelectedFlag] = useState(null)
  const [showMoreFlags, setShowMoreFlags] = useState(false)

  const mainFlags = [
    {
      src: banderaOrgullo,
      alt: 'Bandera del orgullo',
      title: 'Bandera del Orgullo LGBTIQ+',
      description: 'La bandera del arcoíris es un símbolo de la diversidad y el orgullo de la comunidad LGBTIQ+. Cada color representa diferentes aspectos: rojo (vida), naranja (sanación), amarillo (luz del sol), verde (naturaleza), azul (serenidad) y morado (espíritu).'
    },
    {
      src: Lesbian,
      alt: 'Bandera lesbiana',
      title: 'Bandera Lesbiana',
      description: 'La bandera lesbiana representa a las mujeres que sienten atracción romántica y/o sexual hacia otras mujeres. Los tonos naranjas y rosas representan la feminidad, el blanco la diversidad de género, y los tonos morados la relación con la comunidad.'
    },
    {
      src: Gay,
      alt: 'Bandera gay',
      title: 'Bandera Gay',
      description: 'La bandera gay representa a los hombres que sienten atracción romántica y/o sexual hacia otros hombres. Los tonos de azul y verde representan la masculinidad, el amor y la diversidad dentro de la comunidad gay.'
    },
    {
      src: Bisexual,
      alt: 'Bandera bisexual',
      title: 'Bandera Bisexual',
      description: 'La bandera bisexual representa a las personas que sienten atracción hacia más de un género. El rosa representa la atracción hacia el mismo género, el azul hacia géneros diferentes, y el morado (su mezcla) representa la atracción hacia todos los géneros.'
    },
    {
      src: Transgender,
      alt: 'Bandera transgénero',
      title: 'Bandera Transgénero',
      description: 'La bandera transgénero representa a las personas cuya identidad de género difiere del sexo asignado al nacer. Las franjas azules representan el color tradicional masculino, las rosas el femenino, y la blanca del centro representa a quienes están en transición, no tienen género o son de género no binario.'
    },
    {
      src: Intersex,
      alt: 'Bandera intersexual',
      title: 'Bandera Intersexual',
      description: 'La bandera intersexual representa a las personas que nacen con características sexuales que no se ajustan a las definiciones típicas de masculino o femenino. El círculo morado sobre fondo amarillo simboliza la integridad y la plenitud de las personas intersexuales.'
    },
    {
      src: Queer,
      alt: 'Bandera queer',
      title: 'Bandera Queer',
      description: 'La bandera queer representa a las personas que se identifican fuera de las normas tradicionales de género y sexualidad. Es un término paraguas que abarca diversas identidades no normativas y celebra la fluidez y diversidad.'
    }
  ]

  const additionalFlags = [
    {
      src: Asexual,
      alt: 'Bandera asexual',
      title: 'Bandera Asexual',
      description: 'La bandera asexual representa a las personas que experimentan poca o ninguna atracción sexual. El negro representa la asexualidad, el gris la gray-asexualidad, el blanco la sexualidad, y el morado la comunidad.'
    },
    {
      src: pansexual,
      alt: 'Bandera pansexual',
      title: 'Bandera Pansexual',
      description: 'La bandera pansexual representa a las personas que pueden sentir atracción hacia personas de cualquier género o identidad. El rosa representa la atracción hacia mujeres, el azul hacia hombres, y el amarillo hacia personas no binarias y de otros géneros.'
    },
    {
      src: NonBinary,
      alt: 'Bandera no binaria',
      title: 'Bandera No Binaria',
      description: 'La bandera no binaria representa a las personas cuya identidad de género no se ajusta exclusivamente a las categorías de hombre o mujer. El amarillo representa géneros fuera del binario, el blanco la ausencia de género, el morado la mezcla de géneros, y el negro todos los géneros.'
    },
    {
      src: Aromantic,
      alt: 'Bandera aromántica',
      title: 'Bandera Aromántica',
      description: 'La bandera aromántica representa a las personas que experimentan poca o ninguna atracción romántica hacia otros. El verde representa la aromanticidad, el blanco la comunidad y el negro la falta de atracción romántica.'
    },
    {
      src: generofluido,
      alt: 'Bandera de género fluido',
      title: 'Bandera de Género Fluido',
      description: 'La bandera de género fluido representa a las personas cuya identidad de género no es fija y puede cambiar con el tiempo. Los colores de la bandera simbolizan la fluidez y la diversidad de las identidades de género.'
    },
    {
      src: Heterosexual,
      alt: 'Bandera heterosexual',
      title: 'Bandera Heterosexual',
      description: 'La bandera heterosexual representa a las personas que se sienten atraídas romántica y sexualmente hacia personas del sexo opuesto. Los colores de la bandera simbolizan la diversidad dentro de la heterosexualidad y la importancia de la inclusión.'
    }

  ]

  return (
    <div className="intro-section">
      <h2>Bienvenidos</h2>
      <p>
        Esta plataforma tiene como objetivo educar y promover el respeto hacia la 
        diversidad sexual e identidad de género. Aquí encontrarás información clara 
        sobre conceptos fundamentales para construir una sociedad más inclusiva y respetuosa.
      </p>
      
      <div className="diversity-icons">
        {mainFlags.map((flag, index) => (
          <button
            key={index}
            className="diversity-icon"
            onClick={() => setSelectedFlag(flag)}
            style={{ cursor: 'pointer', border: 'none', background: 'transparent', position: 'relative' }}
          >
            <img 
              src={flag.src} 
              alt={flag.alt} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
            {index > 0 && (
              <span className="flag-letter">
                {['L', 'G', 'B', 'T', 'I', 'Q'][index - 1]}
              </span>
            )}
          </button>
        ))}
        
        {/* Botón + para más banderas */}
        <button
          className="diversity-icon"
          onClick={() => setShowMoreFlags(true)}
          style={{ cursor: 'pointer', border: 'none', background: 'linear-gradient(135deg, #4CAF50, #2E7D32)', position: 'relative' }}
        >
          <span className="plus-symbol">+</span>
        </button>
      </div>

      {/* Modal para bandera individual */}
      {selectedFlag && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedFlag(null)}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={() => setSelectedFlag(null)}
            >
              ✕
            </button>
            <img 
              src={selectedFlag.src} 
              alt={selectedFlag.alt}
              className="modal-image"
            />
            <h3>{selectedFlag.title}</h3>
            <p>{selectedFlag.description}</p>
          </div>
        </div>
      )}

      {/* Modal para banderas adicionales */}
      {showMoreFlags && (
        <div 
          className="modal-overlay"
          onClick={() => setShowMoreFlags(false)}
        >
          <div 
            className="modal-content modal-content-wide"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={() => setShowMoreFlags(false)}
            >
              ✕
            </button>
            <h3>Más Banderas de la Comunidad</h3>
             <div className="modal-description">
              <p>
                El símbolo +, comúnmente añadido al final de siglas como "LGBTQ+", es un signo de inclusión que significa "y más". Su función es representar y acoger a todas las demás identidades de género y orientaciones sexuales que no están explícitamente cubiertas por las letras principales, como pueden ser personas intersexuales, asexuales, pansexuales o de género fluido. De esta manera, se busca asegurar que todos los miembros de la comunidad se sientan reconocidos y parte del colectivo, sin necesidad de alargar el acrónimo indefinidamente.
              </p>
            </div>
            
            <div className="additional-flags-grid">
              {additionalFlags.map((flag, index) => (
                <div 
                  key={index} 
                  className="additional-flag-card"
                  onClick={() => {
                    setShowMoreFlags(false)
                    setSelectedFlag(flag)
                  }}
                >
                  <img 
                    src={flag.src} 
                    alt={flag.alt}
                    className="additional-flag-image"
                  />
                  <h4>{flag.title}</h4>
                  <p>{flag.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default IntroSection
