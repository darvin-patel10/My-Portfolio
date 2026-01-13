import { React } from 'react'
import './App.css'
import Nevbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'

function App() {
  
  return (
    <>
      <Nevbar />
      <Hero />
      <About/>
      <Skills/>
    </>
  )
}

export default App
