import React, { useState, useEffect } from "react";
import Pregunta from "./Components/Pregunta";
import Listado from "./Components/Listado";
import ControlPresupuesto from "./Components/ControlPresupuesto";
import Formulario from "./Components/Formulario";

function App() {
  //definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  //useEffect que actualiza el restante

  useEffect(() => {
    if (creargasto) {
      //agrega el nuevo presupuesto
      guardarGastos([...gastos, gasto]);
    }
    //resta del presupuesto actual
    const puresupuestoRestante = restante - gasto.cantidad;
    guardarRestante(puresupuestoRestante);
    //resetear a false
    guardarCrearGasto(false);
  }, [gasto]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {/* lo de abajo: Si mostrar pregunta es true ejecuta el componente Pregunta,
si es falso ejecuta el componente formulario*/}

          {mostarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>

              <div className="one-half column">
                {" "}
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
