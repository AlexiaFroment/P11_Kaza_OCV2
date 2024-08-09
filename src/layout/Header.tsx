import { NavLink } from "react-router-dom"
import logo from "@/assets/Logo.png"

import "@/layout/header.scss"
export const Header: React.FC = () => {
  return (
    <header className='header'>
      <nav>
        <NavLink to='/home'>
          <img src={logo} alt='logo Kaza' />
        </NavLink>
        <ul>
          <li>
            <NavLink to='/home'>Accueil</NavLink>
          </li>
          <li>
            <NavLink to='/about'>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
