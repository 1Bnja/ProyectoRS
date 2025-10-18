import SectionHeader from './SectionHeader'
import Card from './Card'

function ContentSection({ title, description, cards }) {
  return (
    <section>
      <SectionHeader title={title} description={description} />
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  )
}

export default ContentSection
