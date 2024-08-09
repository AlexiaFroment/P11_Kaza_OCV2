import { useParams } from "react-router-dom"
import data from "@/assets/data/data.json"
import { HousingData } from "@/modules/Types"

import { Dropdown } from "@/components/Dropdown"

import "@/pages/public/logement.scss"
export const Logement: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const housing = data.find((item: HousingData) => item.id === id)

  if (!housing) {
    return <div>Logement introuvable</div>
  }
  return (
    <>
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
      <div className='dropdownSection'>
        <Dropdown title='Description' width='70%' />
        <Dropdown title='Équipements' width='70%' />
      </div>
    </>
  )
}
