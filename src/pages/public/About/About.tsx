import { Dropdown } from "@/components/Dropdown"

import { Hero } from "@/components/Hero"
import AboutImg from "@/assets/img/About.webp"

import aboutlist from "@/assets/data/about.json"

const About: React.FC = () => {
  return (
    <section className='sectionAbout'>
      <Hero img={AboutImg} />
      <div className='dropdownAbout'>
        {aboutlist.map((item) => (
          <Dropdown
            key={item.id}
            title={item.title}
            content={item.description}
            list={false}
          />
        ))}
      </div>
    </section>
  )
}

export default About
