function Card({ icon, title, description, image }) {
  return (
    <div className="card">
      <h3>
        <span className="card-icon">{icon}</span>
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
