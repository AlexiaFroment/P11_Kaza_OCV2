import { HousingData } from "@/modules/Types"

type tagProps = {
  housing: HousingData
}
export const Tag: React.FC<tagProps> = ({ housing }) => {
  return (
    <div className='tags'>
      {housing.tags.map((tag, index) => (
        <span key={index} className='tag'>
          {tag}
        </span>
      ))}
    </div>
  )
}
