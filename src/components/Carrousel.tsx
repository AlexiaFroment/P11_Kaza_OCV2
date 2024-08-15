import { useState } from "react"
import { HousingData } from "@/modules/Types"
import ArrowPrevious from "@/assets/img/Arrow_back.png"
import ArrowNext from "@/assets/img/Arrow_next.png"

type carrouselProps = {
  housing: HousingData
}
export const Carrousel: React.FC<carrouselProps> = ({ housing }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const { pictures } = housing
  const handlePreviousImg = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }
  const handleNextImg = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }
  return (
    <div className='carrousel'>
      <img
        className='pictures'
        src={pictures[currentImgIndex]}
        alt='HousingDetails'
      />
      <div className='carrousel_navigation'>
        <img
          src={ArrowPrevious}
          alt='ArrowPrevious'
          onClick={handlePreviousImg}
        />
        <img src={ArrowNext} alt='ArrowNext' onClick={handleNextImg} />
      </div>
      <span className='carrousel_pagination'>{`${currentImgIndex + 1}/${
        pictures.length
      }`}</span>
    </div>
  )
}
