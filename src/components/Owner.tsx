type ownerProps = {
  name: string
  picture: string
}
export const Owner: React.FC<ownerProps> = ({ name, picture }) => {
  return (
    <>
      <p>{name}</p>
      <img src={picture} alt={name} />
    </>
  )
}
