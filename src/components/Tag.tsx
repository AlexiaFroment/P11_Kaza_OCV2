type tagProps = {
  tags: string[]
}
export const Tag: React.FC<tagProps> = ({ tags }) => {
  return (
    <div className='tags'>
      {tags.map((tag, index) => (
        <span key={index} className='tag'>
          {tag}
        </span>
      ))}
    </div>
  )
}
