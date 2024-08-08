import { Routes, Route } from "react-router-dom"

import { MainLayout } from "@/layout/MainLayout"
import { About } from "@/pages/public/About"
import { Home } from "@/pages/public/Home"
import { Logement } from "@/pages/public/Logement"
import { NotFound } from "@/pages/NotFound"

export const PublicRouteur: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        children: [
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/logement' element={<Logement />} />
        <Route path='*' element={<NotFound />} />]
      </Route>
    </Routes>
  )
}
