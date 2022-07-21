import React from 'react'
import Aulas from '../aulas/Aulas'

const Viernes = ({nombre}) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <Aulas />
    </div>
  )
}

export default Viernes