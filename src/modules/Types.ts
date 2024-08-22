export interface HeroProps {
  img: string
  title?: string
}
export interface DropdownProps {
  title: string
  content: string | string[]
  list: boolean
  // width?: string
}

export interface HousingData {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {
    name: string
    picture: string
  }
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}
