import React from 'react';
import { NavLink } from "react-router-dom";

const Modal = () => {
    return (
        <div>
            <p>
                Modal
                <NavLink to="/pago">Boton</NavLink>
            </p>
        </div>
    )
}

export default Modal;