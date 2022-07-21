import React from "react";
import BtnHorario from "../components/BtnHorario";

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const Dias = () => {
  return (
    <div className="contenedor-dias">
      {dias.map((dia) => {
        return (
          <div className="contenedor-dias-btn">

          <BtnHorario  key={dia} hora={dia} />
          </div>
        );
      })}
    </div>
  );
};

export default Dias;
