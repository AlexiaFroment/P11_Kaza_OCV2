import { Dropdown } from "@/components/Dropdown"

import { Hero } from "@/components/Hero"
import AboutImg from "@/assets/img/About.webp"
const About: React.FC = () => {
  const fiabilityContent: string[] = [
    "Climatisation",
    "Wi-Fi",
    "Cuisine",
    "Espace de travail",
    "Fer à repasser",
    "Sèche-cheveux",
    "Cintres",
  ]
  const respectContent: string = "pomme"
  return (
    <section className='sectionAbout'>
      <Hero img={AboutImg} />
      <div className='dropdownAbout'>
        <Dropdown title='Fiabilité' content={fiabilityContent} />
        <Dropdown title='Respect' content={respectContent} />
        <Dropdown title='Service' content={respectContent} />
        <Dropdown title='Sécurité' content={respectContent} />
      </div>
    </section>
  )
}

export default About
