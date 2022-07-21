import React from "react";
import Aulas from "../aulas/Aulas";
import Horarios from "../components/Horarios";

const Lunes = ({ nombre }) => {
  return (
    <div className="lunes">
      <div className="lunes-box">
        <h3 className="lunes-title" >{nombre}</h3>
        <Aulas />
      </div>

      <div className="lunes-box">
        <Horarios />
      </div>
    </div>
  );
};

export default Lunes;
