import { NavLink } from "react-router-dom"

import data from "@/assets/data/data.json"
import { HousingData } from "@/modules/Types"
import { Card } from "@/components/Card"

import "@/pages/public/home.scss"

export const Home: React.FC = () => {
  const housings: HousingData[] = data
  return (
    <>
      <div className='cardDisplay'>
        {housings.map((housing) => (
          <NavLink key={housing.id} to={`/logement/${housing.id}`}>
            <Card housing={housing} />
          </NavLink>
        ))}
      </div>
    </>
  )
}
