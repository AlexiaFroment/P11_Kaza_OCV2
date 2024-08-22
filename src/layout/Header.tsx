import { NavLink } from "react-router-dom"
import logo from "@/assets/img/Logo.png"

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <nav>
        <NavLink to='/home'>
          <img src={logo} alt='logo Kaza' />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to='/home'
              className={({ isActive }) => (isActive ? "active_link" : "")}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? "active_link" : "")}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
