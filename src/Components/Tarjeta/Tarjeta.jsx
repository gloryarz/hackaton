import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Button, Row } from "react-bootstrap";
import '../CSS/main.css'

const Tarjeta = () => {
  return (
    <div>
        <Row>
        <Col>
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

export default Tarjeta;
