import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Button, Row } from "react-bootstrap";
import '../CSS/main.css'
import './confirmacion.css'

const Confirmacion = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Confirma tu cuenta</h4>
        </Col>
        <Col xs={10} xsOffset={1} className="txt">
        <p>Nombre</p>
        <input type="text" className="inp"/> 
        <p>Correo electrónico</p>
        <input type="text" className="inp"/> 
        <p>Tipo de Servicio</p>
        <input type="text" className="inp"/> 
        <p>Fecha de inicio del servicio</p>
        <input type="text" className="inp"/> 
        <p>Fecha de inicio del servicio</p>
        <input type="text" className="inp"/> 

        <Button className="btn color marginBtn">
          <NavLink to="/inicio">Confirmar</NavLink>
        </Button>
      </Col>
    </Row>
      
    </div>
  );
};

export default Confirmacion;
