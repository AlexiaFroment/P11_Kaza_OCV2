type titleProps = {
  title: string
  showLocation?: boolean
  children?: React.ReactNode
}
export const Title: React.FC<titleProps> = ({
  title,
  showLocation,
  children,
}) => {
  return (
    <>
      <h2>{title}</h2>
      {showLocation && <h4>{children}</h4>}
    </>
  )
}
