type titleProps = {
  title: string
  className: string
  showLocation?: boolean
  children?: React.ReactNode
}
export const Title: React.FC<titleProps> = ({
  title,
  className,
  showLocation,
  children,
}) => {
  return (
    <>
      <h2 className={className}>{title}</h2>
      {showLocation && <h4>{children}</h4>}
    </>
  )
}
