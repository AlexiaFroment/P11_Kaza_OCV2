import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicRouteur } from "@/routes/PublicRouteur"

export const App: React.FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRouteur />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
