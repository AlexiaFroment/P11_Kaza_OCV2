import logoBlanc from "@/assets/img/LogoBlanc.png"

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <img src={logoBlanc} alt='logo Kaza' />
      <span>@2020 Kaza. All rights reserved</span>
    </footer>
  )
}
