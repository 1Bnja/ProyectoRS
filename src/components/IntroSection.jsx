import { useState } from 'react'
import banderaOrgullo from '../assets/banderaOrgullo.webp'
import Bisexual from '../assets/Bisexual.png'
import Asexual from '../assets/Asexual.png'
import pansexual from '../assets/pansexual.png'
import Transgender from '../assets/Transgender.png'
import NonBinary from '../assets/Nonbinary.png'


function IntroSection() {
  const [selectedFlag, setSelectedFlag] = useState(null)

  const flags = [
    {
      src: banderaOrgullo,
      alt: 'Bandera del orgullo',
      title: 'Bandera del Orgullo LGBTQ+',
      description: 'La bandera del arcoíris es un símbolo de la diversidad y el orgullo de la comunidad LGBTQ+. Cada color representa diferentes aspectos: rojo (vida), naranja (sanación), amarillo (luz del sol), verde (naturaleza), azul (serenidad) y morado (espíritu).'
    },
    {
      src: Bisexual,
      alt: 'Bandera bisexual',
      title: 'Bandera Bisexual',
      description: 'La bandera bisexual representa a las personas que sienten atracción hacia más de un género. El rosa representa la atracción hacia el mismo género, el azul hacia géneros diferentes, y el morado (su mezcla) representa la atracción hacia todos los géneros.'
    },
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
      src: Transgender,
      alt: 'Bandera transgénero',
      title: 'Bandera Transgénero',
      description: 'La bandera transgénero representa a las personas cuya identidad de género difiere del sexo asignado al nacer. Las franjas azules representan el color tradicional masculino, las rosas el femenino, y la blanca del centro representa a quienes están en transición, no tienen género o son de género no binario.'
    },
    {
      src: NonBinary,
      alt: 'Bandera no binaria',
      title: 'Bandera No Binaria',
      description: 'La bandera no binaria representa a las personas cuya identidad de género no se ajusta exclusivamente a las categorías de hombre o mujer. El amarillo representa géneros fuera del binario, el blanco la ausencia de género, el morado la mezcla de géneros, y el negro todos los géneros.'
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
        {flags.map((flag, index) => (
          <button
            key={index}
            className="diversity-icon"
            onClick={() => setSelectedFlag(flag)}
            style={{ cursor: 'pointer', border: 'none', background: 'transparent' }}
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
          </button>
        ))}
      </div>

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
    </div>
  )
}

export default IntroSection
