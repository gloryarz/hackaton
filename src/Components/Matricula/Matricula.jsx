import React from "react";
import { NavLink } from "react-router-dom";

const Matricula = () => {
  return (
    <div>
      <p>
        Matricula
        <button>
          <NavLink to="/verificacion">Boton</NavLink>
        </button>
      </p>
    </div>
  );
};

export default Matricula;
