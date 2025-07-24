import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import Pricing from './assets/components/Pricing'
import { Features } from 'tailwindcss'
import Testimonials from './assets/components/Testimonials'
import FAQ from './assets/components/FAQ'
import Contact from './assets/components/Contact'
import WhatsAppBtn from './assets/components/WhatsappButton'
import Footer from './assets/components/Footer'
import Gallery from './assets/components/Gallery'
import TargetAudience from './assets/components/TargetAudience'
import Adventages from './assets/components/Advantages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <Adventages />
      <TargetAudience />
      <Gallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <WhatsAppBtn />
      <Footer />
    </div>
    </>
  )
}

export default App
