import React from 'react'
import BtnHorario from '../components/BtnHorario'

const Aula = ({nombre}) => {
  return (
    <div>
        
        <BtnHorario hora={nombre} />
    </div>
  )
}

export default Aula