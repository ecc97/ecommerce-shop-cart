import React from 'react'
import Card from '../molecules/Card'

interface FeaturedSectionProps{
    title?: string,
    description?: string
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({title = 'Featured Section', description = 'This is a featured section'}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <article>
        <Card title="Card 1" description="This is a card with a description" image='/assest/img1.png'/>
        <Card title="Card 2" description="This is another card with a description" image='/assest/img2.png' />
      </article>
    </section>
  )
}

export default FeaturedSection
