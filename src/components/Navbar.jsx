import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
        <Link to="home">Home</Link>
        <Link to="semana">Semana</Link>
        <Link to="disponibilidad">Disponibilidad</Link>
        
        </div>
  )
}

export default Navbar