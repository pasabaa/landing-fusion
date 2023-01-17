import { Contact } from "./components/Contact"
import { ContainerApp } from "./components/ContainerApp"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Portfolio } from "./components/Portfolio"
import { Services } from "./components/Services"
import { Testimonials } from "./components/Testimonials"

function App() {

  return (
    <main className="bg-black text-white min-h-screen">
      <Hero/>
      <ContainerApp>
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </ContainerApp>
      <Footer />
    </main>
  )
}

export default App
