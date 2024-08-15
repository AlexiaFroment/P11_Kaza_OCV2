import { Routes, Route } from "react-router-dom"

import { MainLayout } from "@/layout/MainLayout"
import { Home, About, Logement, Error404 } from "@/pages/public/index"

export const PublicRouteur: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        children: [
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/logement/:id' element={<Logement />} />
        <Route path='*' element={<Error404 />} />]
      </Route>
    </Routes>
  )
}
