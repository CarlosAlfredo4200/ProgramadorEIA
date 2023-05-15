import React, { useState } from "react";

const ComponenteEjemplo = () => {
  const [selecciones, setSelecciones] = useState([]);
  const [seleccionActual, setSeleccionActual] = useState({
    dia: "",
    aula: "",
    horario: "",
  });

  const handleDiaSeleccionado = (dia) => {
    setSeleccionActual({ ...seleccionActual, dia });
  };

  const handleAulaSeleccionada = (aula) => {
    setSeleccionActual({ ...seleccionActual, aula });
  };

  const handleHorarioSeleccionado = (horario) => {
    setSeleccionActual({ ...seleccionActual, horario });
  };

  const guardarSeleccion = () => {
    const nuevaSeleccion = {
      dia: seleccionActual.dia,
      aula: seleccionActual.aula,
      horario: seleccionActual.horario,
    };

    setSelecciones([...selecciones, nuevaSeleccion]);
    setSeleccionActual({
      dia: "",
      aula: "",
      horario: "",
    });
  };

  const handleCancelar = () => {
    setSeleccionActual({
      dia: "",
      aula: "",
      horario: "",
    });
  };

  const handleReiniciar = () => {
    setSelecciones([]);
    setSeleccionActual({
      dia: "",
      aula: "",
      horario: "",
    });
  };

  const horariosDisponibles = () => {
    const horariosSeleccionados = selecciones
      .filter(
        (seleccion) =>
          seleccion.dia === seleccionActual.dia &&
          seleccion.aula === seleccionActual.aula
      )
      .map((seleccion) => seleccion.horario);

    const todosHorarios = ["9am", "10am", "11am"];
    const horariosDisponibles = todosHorarios.filter(
      (horario) => !horariosSeleccionados.includes(horario)
    );

    return horariosDisponibles;
  };

  const horariosSeleccionados = () => {
    return selecciones
      .filter(
        (seleccion) =>
          seleccion.dia === seleccionActual.dia &&
          seleccion.aula === seleccionActual.aula
      )
      .map((seleccion) => seleccion.horario);
  };

  return (
    <div>
      <h1>Selecciona una opción</h1>
      <div>
        <button onClick={() => handleDiaSeleccionado("Lunes")}>Lunes</button>
        <button onClick={() => handleDiaSeleccionado("Martes")}>Martes</button>
        <button onClick={() => handleDiaSeleccionado("Miércoles")}>
          Miércoles
        </button>
        <button onClick={() => handleDiaSeleccionado("Jueves")}>Jueves</button>
        <button onClick={() => handleDiaSeleccionado("Viernes")}>
          Viernes
        </button>
      </div>
      {seleccionActual.dia && (
        <div>
          <h2>Aula:</h2>
          <label>
            <input
              type="checkbox"
              checked={seleccionActual.aula === "Aula 1"}
              onChange={() => handleAulaSeleccionada("Aula 1")}
              disabled={horariosSeleccionados().some(
                (horario) => horario === seleccionActual.horario
              )}
            />
            Aula 1
          </label>
          <label>
            <input
              type="checkbox"
              checked={seleccionActual.aula === "Aula 2"}
              onChange={() => handleAulaSeleccionada("Aula 2")}
              disabled={horariosSeleccionados().some(
                (horario) => horario === seleccionActual.horario
              )}
            />
            Aula 2
          </label>
          <label>
            <input
              type="checkbox"
              checked={seleccionActual.aula === "Aula 3"}
              onChange={() => handleAulaSeleccionada("Aula 3")}
              disabled={horariosSeleccionados().some(
                (horario) => horario === seleccionActual.horario
              )}
            />
            Aula 3
          </label>
        </div>
      )}
      {seleccionActual.dia && seleccionActual.aula && (
        <div>
          <h2>Horario:</h2>
          <select
            value={seleccionActual.horario}
            onChange={(e) => handleHorarioSeleccionado(e.target.value)}
          >
            <option value="">Selecciona un horario</option>
            {horariosDisponibles().map((horario) => (
              <option key={horario} value={horario}>
                {horario}
              </option>
            ))}
          </select>
        </div>
      )}
      {seleccionActual.dia &&
        seleccionActual.aula &&
        seleccionActual.horario && (
          <div>
            <button onClick={guardarSeleccion}>Guardar selección</button>
            <button onClick={handleCancelar}>Cancelar selección</button>
            <button onClick={handleReiniciar}>Reiniciar</button>
          </div>
        )}
      <div className="selecciones">
        <h2>Selecciones guardadas:</h2>
        {selecciones.map((seleccion, index) => (
          <div key={index}>
            <p>Día: {seleccion.dia}</p>
            <p>Aula: {seleccion.aula}</p>
            <p>Horario: {seleccion.horario}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ComponenteEjemplo;
