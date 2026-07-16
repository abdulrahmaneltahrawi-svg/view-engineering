import Header from './components/common/Header.jsx'
import Hero from './components/home/Hero.jsx'
import About from './components/home/About.jsx'
import Services from './components/home/Services.jsx'
import Projects from './components/home/Projects.jsx'
import Clients from './components/home/Clients.jsx'
import Contact from './components/home/Contact.jsx'
import Footer from './components/common/Footer.jsx'
import Whatsapp from './components/common/whatsapp.jsx'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Contact />
      <Clients />
      <Footer />
      <Whatsapp />
    </>
  )
}

export default App