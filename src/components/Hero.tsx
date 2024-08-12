import { HeroProps } from "@/modules/Types"
export const Hero: React.FC<HeroProps> = ({ img, title }) => {
  return (
    <div className='hero'>
      <img src={img} alt={title || "Hero image"} />
      <div className='overlay_hero'></div>
      {title && <h1>{title}</h1>}
    </div>
  )
}
