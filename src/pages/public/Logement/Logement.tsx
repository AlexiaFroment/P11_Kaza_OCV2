import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { HousingData } from "@/modules/Types"
import logementservice from "@/_services/logement.services"
import { Carrousel } from "@/components/Carrousel"
import { Title } from "@/components/Title"
import { Owner } from "@/components/Owner"
import { Tag } from "@/components/Tag"
import { Rating } from "@/components/Rating"
import { Dropdown } from "@/components/Dropdown"

const Logement: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>()
  const [housing, setHousing] = useState<HousingData | undefined>(undefined)
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) {
      navigate("/404")
      return
    }

    const fetchData = async () => {
      try {
        const data = await logementservice.GetOneLogement(id)
        if (data) {
          setHousing(data)
        } else {
          navigate("/404")
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [id, navigate])

  if (!housing) {
    return <div>Loading...</div>
  }

  return (
    <section className='sectionLogement'>
      <div>
        <Carrousel pictures={housing.pictures} />
      </div>
      <div className='housingDetails'>
        <div className='housingInfos'>
          <Title
            title={housing.title}
            showLocation={true}
            children={housing.location}
          />

          <Tag tags={housing.tags} />
        </div>
        <div className='ownerAndRating'>
          <Owner name={housing.host.name} picture={housing.host.picture} />
          <Rating rating={housing.rating} />
        </div>
      </div>

      <div className='dropdownLogement'>
        <Dropdown title='Description' content={housing.description} />
        <Dropdown title='Équipements' content={housing.equipments} />
      </div>
    </section>
  )
}

export default Logement
