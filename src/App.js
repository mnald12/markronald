import React, { useEffect, useState } from 'react'
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Loader from './pages/Loader';

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
    <Data.Provider value={{ sidebarActive, setSidebarActive, setIsLoader }}>
      <Nav />
      {sidebarActive === 'about' ? isLoader ? <Loader /> : <About /> : ''}
      {sidebarActive === 'skill' ? isLoader ? <Loader /> : <Skills /> : ''}
      {sidebarActive === 'project' ? isLoader ? <Loader /> : <Projects /> : ''}
      {sidebarActive === 'contact' ? isLoader ? <Loader /> : <Contact /> : ''}
      <Sidebar />
    </Data.Provider>
  )
}

export { Data }

export default App;
