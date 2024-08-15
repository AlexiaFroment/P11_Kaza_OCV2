import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import logementservice from "@/_services/logement.services"
import { Carrousel } from "@/components/Carrousel"
import { Tag } from "@/components/Tag"
import { Rating } from "@/components/Rating"
import { Dropdown } from "@/components/Dropdown"
import { HousingData } from "@/modules/Types"

const Logement: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [housing, setHousing] = useState<HousingData | undefined>(undefined)
  // const housing = data.find((item: HousingData) => item.id === id)

  useEffect(() => {
    if (id) {
      logementservice
        .GetOneLogement(id)
        .then((data) => setHousing(data))
        .catch((error) =>
          console.error("Erreur lors de la récupération du logement :", error)
        )
    }
  }, [id])

  if (!housing) {
    return <div>Logement introuvable</div>
  }
  return (
    <section className='sectionLogement'>
      <div>
        <Carrousel housing={housing} />
      </div>
      <div className='housingDetails'>
        <div className='housingInfos'>
          <h2>{housing.title}</h2>
          <h4>{housing.location}</h4>
        </div>
        <div className='ownerInfos'>
          <span>{housing.host.name}</span>
          <img src={housing.host.picture} alt={housing.host.name} />
        </div>
      </div>
      <div className='tagsAndRatingDetails'>
        <div className='tagsSection'>
          <Tag housing={housing} />
        </div>
        <div className='ratingSection'>
          <Rating housing={housing} />
        </div>
      </div>
      <div className='dropdownLogement'>
        <Dropdown title='Description' content={housing.description} />
        <Dropdown title='Équipements' content={housing.equipments} />
      </div>
    </section>
  )
}

export default Logement
