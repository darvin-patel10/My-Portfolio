import { React } from 'react'
import './App.css'
import Nevbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'

function App() {
  
  return (
    <>
      <Nevbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App
