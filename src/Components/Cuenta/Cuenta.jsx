import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Button, Row } from "react-bootstrap";
import '../CSS/main.css'
import './cuenta.css'

const Cuenta = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Crea tu cuenta</h4>
        </Col>
        <Col xs={10} xsOffset={1} className="">
        
        <p className="txt">Ingresa tu nombre</p>
        <input type="text" className=""/> 
        <p className="txt">Ingresa tu correo electrónico</p>
        <input type="text" className=""/> 
        <p className="txt">Contraseña</p>
        <input type="text" className=""/> 

        <Button className="btn color margBtn">
          <NavLink to="/servicio">Boton</NavLink>
        </Button>
      </Col>
    </Row>
      
    </div>
  );
};

export default Cuenta;
