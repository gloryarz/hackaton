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
          <NavLink to="/tarjeta">
            <p className="border">Tarjeta</p>
          </NavLink>
        </Col>
        <Col xs={6}>
          <p className="border">PayPal</p>
        </Col>

      </Col>
      </Row>      
    </div>
  );
};

export default Pago;
