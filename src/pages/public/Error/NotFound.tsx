import { NavLink } from "react-router-dom"

const NotFound: React.FC = () => {
  return (
    <div className='notFound'>
      <h1>404</h1>
      <h3>OUPS ! LA PAGE QUE VOUS DEMANDEZ N'EXISTE PAS.</h3>
      <NavLink to='/home'>Retourner sur la page d'accueil</NavLink>
    </div>
  )
}

export default NotFound
