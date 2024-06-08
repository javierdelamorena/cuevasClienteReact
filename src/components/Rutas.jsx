import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Historia from './Historia'
import Enlaces from './Enlaces'
import Galeria from './Galeria'
import { Tablon } from './Tablon'
import { Intro } from './Intro'
import { Registrar } from './Registrar'
import { UserApp } from './UserApp'

export const Rutas = () => {
  return (
    <Routes>
     
      <Route exact path="/" element={<Intro />} />
      <Route exact path="/historiaPueblo" element={<Historia />} />
      <Route exact path="/enlacesDeInteres" element={<Enlaces />} />
      <Route exact path="/fotosGaleria" element={<Galeria />} />
      <Route exact path="/todosAnuncios" element={<Tablon />} />
      <Route exact path="/registrarse" element={<Registrar />} />
      <Route exact path="/registrarse" element={<Registrar />} />
      <Route exact path="/users" element={<UserApp />} />


    </Routes>

  )
}
