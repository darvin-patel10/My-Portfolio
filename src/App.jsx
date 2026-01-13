import { React } from 'react'
import './App.css'
import Nevbar from './components/Navbar/Navbar'
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'

function App() {
  
  return (
    <>
      <Nevbar />
      <Hero />
      <About />
      <Skills/>
    </>
  )
}

export default App
