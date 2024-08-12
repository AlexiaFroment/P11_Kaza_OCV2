import { Outlet } from "react-router-dom"
import { Header } from "@/layout/Header"
import { Footer } from "@/layout/Footer"

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
