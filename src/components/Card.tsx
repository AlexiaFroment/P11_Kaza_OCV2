import { HousingData } from "@/modules/Types"
import { NavLink } from "react-router-dom"

type cardProps = {
  housing: HousingData
}

export const Card: React.FC<cardProps> = ({ housing }) => {
  return (
    <li className='Card'>
      <NavLink key={housing.id} to={`/logement/${housing.id}`}>
        <img src={housing.cover} />
        <div className='overlay'></div>
        <h2>{housing.title}</h2>
      </NavLink>
    </li>
  )
}
