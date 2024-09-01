import StarEmpty from "@/assets/img/Star_empty.png"
import StarFilled from "@/assets/img/Star_filled.png"

type ratingProps = {
  rating: string
}
export const Rating: React.FC<ratingProps> = ({ rating }) => {
  const numRating = parseInt(rating, 10)
  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={index < numRating ? StarFilled : StarEmpty}
      alt='rating'
    />
  ))

  return <div className='rating'>{stars}</div>
}
