import React, { useEffect, useState } from 'react'
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
const Data = React.createContext(null)

function App() {

  const [sidebarActive, setActive] = useState(window.sessionStorage.getItem("sidebaractive") ? window.sessionStorage.getItem("sidebaractive") : 'about')

  const setSidebarActive = (sidebar) => {
    setActive(sidebar)
    window.sessionStorage.setItem("sidebaractive", sidebar);
  }

  const [isLoader, setIsLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoader(false), 1500)
  }, [isLoader])

  return (
    <div className='App'>
      <Data.Provider value={{ sidebarActive, setSidebarActive, setIsLoader }}>
        <Nav />
        <Welcome />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </Data.Provider>
    </div>
  )
}

export { Data }

export default App;
