import React from "react";
import BtnHorario from "./BtnHorario";

const horarios = [
  "Horario A", 
  "Horario B",
  "Horario C",
  "Horario D",
  "Horario E",
  "Horario F"
];

const Horarios = () => {
  return (
    <div className="contenedor-horarios">
       
      {horarios.map((hora) => {

        return <div className="contenedor-horarios-box"> 
                   <BtnHorario key={hora} hora={hora} />
               </div>
      })}
    </div>
  );
};

export default Horarios;
