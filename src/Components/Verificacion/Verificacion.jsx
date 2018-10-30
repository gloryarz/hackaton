import React from "react";
import { NavLink } from "react-router-dom";

const Verificacion = () => {
  return (
    <div>
      <p>
        Verificacion
        <button>
          <NavLink to="/servicio">Boton</NavLink>
        </button>
      </p>
    </div>
  );
};

export default Verificacion;
