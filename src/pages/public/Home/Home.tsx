import logementservice from "@/_services/logement.services"
import { HousingData } from "@/modules/Types"
import { Card } from "@/components/Card"
import { Hero } from "@/components/Hero"

import homeImg from "@/assets/img/Home.webp"

const Home: React.FC = () => {
  const housings: HousingData[] = logementservice.GetAllLogement()

  return (
    <section className='sectionHome'>
      <Hero img={homeImg} title='Chez vous, partout et ailleurs' />
      <ul className='cardDisplay'>
        {housings.map((housing) => (
          <Card housing={housing} />
        ))}
      </ul>
    </section>
  )
}

export default Home
