import { useParams } from "react-router-dom"
import { Dropdown } from "@/components/Dropdown"
import { HousingData } from "@/modules/Types"
import data from "@/assets/data/data.json"

const Logement: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const housing = data.find((item: HousingData) => item.id === id)

  if (!housing) {
    return <div>Logement introuvable</div>
  }
  return (
    <section className='sectionLogement'>
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
      <div className='dropdownLogement'>
        <Dropdown title='Description' content={housing.description} />
        <Dropdown title='Équipements' content={housing.equipments} />
      </div>
    </section>
  )
}

export default Logement
