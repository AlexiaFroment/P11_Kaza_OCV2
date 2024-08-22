import { useState } from "react"
import { DropdownProps } from "@/modules/Types"
import Arrow from "@/assets/img/Arrow_dropdown.png"

export const Dropdown: React.FC<DropdownProps> = ({ title, content, list }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)
  return (
    <div className='dropdown'>
      <button onClick={toggleDropdown} className='dropdownBtn'>
        {title}
        <img
          src={Arrow}
          alt='arrow'
          className={`icon ${isOpen ? "rotate" : "reverse-rotate"}`}
        />
      </button>

      {isOpen && (
        <div className='dropdownContent'>
          {!list ? (
            <p>{content}</p>
          ) : (
            <ul>
              {content.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
