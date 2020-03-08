import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta
}) => {
  //definir el state
  /*const state = {
    cantidad: '', guardarCantidad: ''
}*/
  const [cantidad, guardarCantidad] = useState(0); // lo mismo que arriba
  const [error, guardarError] = useState(false);

  //funcion que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value));
  };

  //pra definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();
    //validar que sea mayor que cero

    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    //si pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca acá tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
