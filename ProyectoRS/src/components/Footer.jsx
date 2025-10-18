import RainbowBar from './RainbowBar'

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <RainbowBar />
        <p style={{ marginTop: '1rem' }}>
          <strong>Municipalidad de Curicó</strong>
        </p>
        <p>#Unidos por una sociedad más inclusiva y respetuosa</p>
        <p style={{ marginTop: '1rem', opacity: 0.8 }}>
          © 2025 - Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
