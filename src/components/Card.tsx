import { HousingData } from "@/modules/Types"
import "@/components/Card.scss"

type cardProps = {
  housing: HousingData
}

export const Card: React.FC<cardProps> = ({ housing }) => {
  const bgImg = { backgroundImage: `url(${housing.cover})` }
  return (
    <div className='cardHousing' style={bgImg}>
      <h4>{housing.title}</h4>
    </div>
  )
}
