import React from "react";
import { NavLink } from "react-router-dom";

const Pago = () => {
  return (
    <div>
      <p>
        Pago
        <button>
          <NavLink to="/confirmacion">Boton</NavLink>
        </button>
      </p>
    </div>
  );
};

export default Pago;
