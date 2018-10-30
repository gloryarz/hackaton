import React from "react";
import { NavLink } from "react-router-dom";

const Confirmacion = () => {
  return (
    <div>
      <p>
        Confirmacion
        <button>
          <NavLink to="/modal">Boton</NavLink>
        </button>
      </p>
    </div>
  );
};

export default Confirmacion;
