import { HousingData } from "@/modules/Types"
import StarEmpty from "@/assets/img/Star_empty.png"
import StarFilled from "@/assets/img/Star_filled.png"

type ratingProps = {
  housing: HousingData
}
export const Rating: React.FC<ratingProps> = ({ housing }) => {
  const numRating = Number(housing.rating)
  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={index < numRating ? StarFilled : StarEmpty}
      alt='rating'
    />
  ))

  return <div>{stars}</div>
}
