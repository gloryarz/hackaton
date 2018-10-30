import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Button, Row } from "react-bootstrap";
import '../CSS/main.css'
import './pago.css'

const Pago = () => {
  return (
    <div>
        <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Crea tu cuenta</h4>
        </Col>
        <Col xs={10} xsOffset={1} className="txt">
        <p>Elige tu forma de pago</p>
        <Col xs={6}>
          <p className="border">Tarjeta</p>
        </Col>
        <Col xs={6}>
          <p className="border">PayPal</p>
        </Col>
        <p>Ingresa el número de tu tarjeta</p>
        <input type="text"/> <br/>

        <Button className="btn color marginBtn">
          <NavLink to="/confirmacion">Continuar</NavLink>
        </Button>
      </Col>
      </Row>      
    </div>
  );
};

export default Pago;
