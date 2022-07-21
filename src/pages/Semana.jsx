import React from "react";
import Aulas from "../aulas/Aulas";

import Horarios from "../components/Horarios";
import Dias from "../dias/Dias";

const Semana = () => {
  return (
    <div className="contenedor-semana">
      
      <div className="contenedor-semana-box">
        <Dias />
      </div>

      <div className="contenedor-semana-box">
        <Aulas />
      </div>

      <div className="contenedor-semana-box">
        <Horarios />
      </div>
    </div>
  );
};

export default Semana;
