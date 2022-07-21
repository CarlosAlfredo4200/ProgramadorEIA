import React from 'react'
import Aula from './Aula'

const Aulas = () => {
  return (
    <div className='contenedor-aulas'>

      <div className='contenedor-aula-box'>
        <Aula  nombre="Aula A"/>
      </div>

      <div className='contenedor-aula-box'>
        <Aula nombre="Aula B"/>
      </div>

      <div className='contenedor-aula-box'>
        <Aula nombre="Aula C"/>
      </div>

      <div className='contenedor-aula-box'>
        <Aula nombre="Aula D"/>
      </div>

      <div className='contenedor-aula-box'>
        <Aula nombre="Aula E"/>
      </div>

      <div className='contenedor-aula-box'>
        <Aula nombre="Aula F"/>
      </div>

    </div>
  )
}

export default Aulas