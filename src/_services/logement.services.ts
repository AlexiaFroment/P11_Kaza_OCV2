import Listelogement from "@/assets/data/data.json"
import { HousingData } from "@/modules/Types"

const GetAllLogement = (): HousingData[] => {
  return Listelogement as HousingData[]
}

const GetOneLogement = async (id: string): Promise<HousingData | undefined> => {
  const logement = Listelogement.find((logement) => logement.id === id)
  return logement
}

export const logementservice = {
  GetAllLogement,
  GetOneLogement,
}

export default logementservice
