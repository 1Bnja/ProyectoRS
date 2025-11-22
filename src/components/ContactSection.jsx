import { useState } from 'react'
import { MdPhone, MdChat, MdPublic, MdFavorite, MdGavel, MdGroups } from 'react-icons/md'

function ContactSection() {
  const [copiedId, setCopiedId] = useState(null)

  const contacts = [
    {
      id: 1,
      name: 'Fono Violencia de Género',
      type: 'Línea de Emergencia',
      phone: '1455',
      whatsapp: '+56 9 9700 7000',
      availability: '24/7',
      description: 'Atención confidencial y gratuita para víctimas y testigos de violencia de género.',
      icon: MdPhone,
      color: '#FF0018' // Rojo - Rainbow 1
    },
    {
      id: 2,
      name: 'Hablemos de Todo',
      type: 'Apoyo Psicosocial',
      organization: 'INJUV Chile',
      website: 'www.injuv.gob.cl',
      availability: 'Lunes a Viernes',
      description: 'Chat de atención psicosocial para jóvenes de 15 a 29 años. Espacio seguro y confidencial.',
      icon: MdChat,
      color: '#FFA52C' // Naranja - Rainbow 2
    },
    {
      id: 3,
      name: 'MOVILH',
      type: 'Organización',
      fullName: 'Movimiento de Integración y Liberación Homosexual',
      website: 'www.movilh.cl',
      description: 'Defensa de los derechos de la comunidad LGBTIQ+ en Chile.',
      icon: MdPublic,
      color: '#FFFF41' // Amarillo - Rainbow 3
    },
    {
      id: 4,
      name: 'Fundación Todo Mejora',
      type: 'Prevención y Apoyo',
      website: 'www.todomejora.org',
      description: 'Prevención del suicidio en jóvenes LGBTIQ+. Mensajes de esperanza y recursos de apoyo.',
      icon: MdFavorite,
      color: '#008018' // Verde - Rainbow 4
    },
    {
      id: 5,
      name: 'Fundación Iguales',
      type: 'Asesoría Legal',
      website: 'www.iguales.cl',
      description: 'Promoción de la igualdad de derechos. Asesoría legal y lucha contra la discriminación.',
      icon: MdGavel,
      color: '#0000F9' // Azul - Rainbow 5
    },
    {
      id: 6,
      name: 'OTD Chile',
      type: 'Organización Trans',
      fullName: 'Organizando Trans Diversidades',
      website: 'www.otdchile.org',
      description: 'Derechos de personas trans y de género no conforme. Orientación, apoyo y recursos.',
      icon: MdGroups,
      color: '#86007D' // Morado - Rainbow 6
    }
  ]

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    })
  }

  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2>Contactos de Apoyo</h2>
        <p className="contact-subtitle">
          Si necesitas apoyo, orientación o simplemente alguien con quien hablar,
          aquí tienes recursos especializados en diversidad sexual e identidad de género.
        </p>
      </div>

      <div className="contact-cards-grid">
        {contacts.map((contact) => {
          const IconComponent = contact.icon
          return (
            <div key={contact.id} className="contact-card-modern">
              <div className="contact-card-header-modern">
                <div className="contact-icon-modern" style={{ background: contact.color }}>
                  <IconComponent />
                </div>
                <div className="contact-title-area">
                  <h3>{contact.name}</h3>
                  <span className="contact-type-badge" style={{ background: contact.color }}>
                    {contact.type}
                  </span>
                </div>
              </div>

              <div className="contact-card-content">
                {contact.fullName && (
                  <p className="contact-subtitle-text">{contact.fullName}</p>
                )}
                {contact.organization && (
                  <p className="contact-subtitle-text">{contact.organization}</p>
                )}

                <p className="contact-description">{contact.description}</p>

                <div className="contact-details-list">
                  {contact.phone && (
                    <div className="contact-item">
                      <span className="contact-label">📞 Teléfono</span>
                      <div className="contact-value-row">
                        <a href={`tel:${contact.phone}`} className="contact-link">
                          {contact.phone}
                        </a>
                        <button
                          className="copy-button"
                          onClick={() => copyToClipboard(contact.phone, `phone-${contact.id}`)}
                          title="Copiar"
                        >
                          {copiedId === `phone-${contact.id}` ? '✓' : '📋'}
                        </button>
                      </div>
                    </div>
                  )}

                  {contact.whatsapp && (
                    <div className="contact-item">
                      <span className="contact-label">💬 WhatsApp</span>
                      <div className="contact-value-row">
                        <a
                          href={`https://wa.me/${contact.whatsapp.replace(/\s/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link"
                        >
                          {contact.whatsapp}
                        </a>
                        <button
                          className="copy-button"
                          onClick={() => copyToClipboard(contact.whatsapp, `wa-${contact.id}`)}
                          title="Copiar"
                        >
                          {copiedId === `wa-${contact.id}` ? '✓' : '📋'}
                        </button>
                      </div>
                    </div>
                  )}

                  {contact.website && (
                    <div className="contact-item">
                      <span className="contact-label">🌐 Sitio Web</span>
                      <a
                        href={`https://${contact.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        {contact.website}
                      </a>
                    </div>
                  )}

                  {contact.availability && (
                    <div className="contact-item">
                      <span className="contact-label">🕐 Horario</span>
                      <span className="availability-tag" style={{ borderColor: contact.color, color: contact.color }}>
                        {contact.availability}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="contact-footer">
        <p>
          <strong>Importante:</strong> Todos estos servicios son confidenciales y están diseñados para brindarte el apoyo que necesitas.
          No dudes en contactarlos si requieres ayuda.
        </p>
      </div>
    </div>
  )
}

export default ContactSection
