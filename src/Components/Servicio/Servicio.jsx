import React from "react";
import { NavLink } from "react-router-dom";

const Servicio = () => {
  return (
    <div>
      <p>
        Servicio
        <button>
          <NavLink to="/pago">Boton</NavLink>
        </button>
      </p>
    </div>
  );
};

export default Servicio;
