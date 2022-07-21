import React from 'react'
import Aulas from '../aulas/Aulas'


const Martes = ({nombre}) => {
  return (
    <div>
    <h3>{nombre}</h3>
    <Aulas />
  </div>
  )
}

export default Martes