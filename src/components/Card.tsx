import { HousingData } from "@/modules/Types"
import { NavLink } from "react-router-dom"
import { Title } from "@/components/Title"

type cardProps = {
  housing: HousingData
}

export const Card: React.FC<cardProps> = ({ housing }) => {
  return (
    <li className='Card'>
      <NavLink key={housing.id} to={`/logement/${housing.id}`}>
        <img src={housing.cover} />
        <div className='overlay'></div>
        <Title title={housing.title} />
      </NavLink>
    </li>
  )
}
