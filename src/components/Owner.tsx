type ownerProps = {
  name: string
  picture: string
}
export const Owner: React.FC<ownerProps> = ({ name, picture }) => {
  return (
    <div className='owner'>
      <p>{name}</p>
      <img src={picture} alt={name} />
    </div>
  )
}
