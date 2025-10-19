function Card({ icon, title, description }) {
  return (
    <div className="card">
      <h3>
        <span className="card-icon">{icon}</span>
        {title}
      </h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
