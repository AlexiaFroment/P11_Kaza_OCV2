import { useState } from "react"
import { DropdownProps } from "@/modules/Types"
import arrow from "@/assets/arrow_dropdown.png"
import "@/components/Dropdown.scss"

export const Dropdown: React.FC<DropdownProps> = ({ title, width }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)
  return (
    <div className='dropdown' style={{ width: width }}>
      <button onClick={toggleDropdown} className='dropdownBtn'>
        {title}
        <img src={arrow} alt='arrow' />
      </button>
      {isOpen && <div className='dropdownContent'>Dropdown content</div>}
    </div>
  )
}
