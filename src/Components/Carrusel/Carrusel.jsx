import React from "react";
import { NavLink } from "react-router-dom";

const Carrusel = () => {
  return (
    <div>
      <p>
        Carrusel
        <button>
          <NavLink to="/matricula">Boton</NavLink>
        </button>
      </p>
    </div>
  );
};

export default Carrusel;
