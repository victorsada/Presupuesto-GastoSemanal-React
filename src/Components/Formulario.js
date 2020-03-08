import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  //cuando el usuario agrega un gasto

  const agregarGasto = e => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    //construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    };

    //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);
    //resetear el form
    guardarNombre("");
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          placeholder="Ej. Transporte"
          className="u-full-width"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad gasto</label>
        <input
          type="number"
          placeholder="Ej. 300"
          className="u-full-width"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

export default Formulario;
