import { BrowserRouter } from "react-router-dom"
import { PublicRouteur } from "@/routeur/PublicRouteur"

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <PublicRouteur />
      </BrowserRouter>
    </>
  )
}
