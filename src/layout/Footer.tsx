import logoBlanc from "@/assets/LogoBlanc.png"
import "./footer.scss"
export const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <img src={logoBlanc} alt='logo Kaza' />
      <span>@2020 Kaza. All rights reserved</span>
    </div>
  )
}
