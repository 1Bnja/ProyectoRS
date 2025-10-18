function IntroSection() {
  const icons = ['🏳️‍🌈', '❤️', '🤝', '✨', '🌟', '💫']

  return (
    <div className="intro-section">
      <h2>Bienvenidos</h2>
      <p>
        Esta plataforma tiene como objetivo educar y promover el respeto hacia la 
        diversidad sexual e identidad de género. Aquí encontrarás información clara 
        sobre conceptos fundamentales para construir una sociedad más inclusiva y respetuosa.
      </p>
      
      <div className="diversity-icons">
        {icons.map((icon, index) => (
          <div key={index} className="diversity-icon">
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default IntroSection
