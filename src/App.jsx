import { Navigate, Routes, Route } from 'react-router-dom'
import Historia from './components/Historia'
import { NavPrincipal } from './components/NavPrincipal'
import Header from './components/Header'
import { Intro } from './components/Intro'
import Enlaces from './components/Enlaces'
import Galeria from './components/Galeria'
import { Tablon } from './components/Tablon'
import { useState } from 'react'
import { Registrar } from './components/Registrar'
import { Rutas } from './components/Rutas'



function App() {
  

  return (

    <>
      <Header />
      <NavPrincipal />
      <Rutas/>
      

    
    </>

  )
}

export default App
