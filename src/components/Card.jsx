function Card({ icon, title, description, image, color }) {
  return (
    <div className="card" style={color ? { '--card-accent-color': color } : {}}>
      <h3>
        <span className="card-icon" style={color ? { background: color } : {}}>{icon}</span>
        {title}
      </h3>
      <p>{description}</p>
      {image && (
        <div className="card-image-wrapper">
          <img
            src={image}
            alt={title}
            className="card-image"
          />
        </div>
      )}
    </div>
  )
}

export default Card
