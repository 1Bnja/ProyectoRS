import RainbowBar from './RainbowBar'

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <RainbowBar />
        <p style={{ marginTop: '0.6rem' }}>
          <strong>Municipalidad de Curicó</strong>
        </p>
        <p>#Unidos por una sociedad más inclusiva y respetuosa</p>

        <div style={{ marginTop: '1rem' }}>
          <p><strong>Encargada Oficina:</strong> María Carolina Arias</p>
          <p><strong>Correo:</strong> oficinadediversidad@curico.cl</p>
          <p><strong>Número:</strong> 752547714</p>
          <p><strong>Dirección:</strong> Estado #279</p>
        </div>

        <p style={{ marginTop: '0.8rem', opacity: 0.8 }}>
          © 2025 - Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
