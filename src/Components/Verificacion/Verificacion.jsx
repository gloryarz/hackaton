import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Button, Row } from "react-bootstrap";
import '../CSS/main.css'
import './verificacion.css'

const Verificacion = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Crea tu cuenta</h4>
        </Col>
        <Col xs={10} xsOffset={1} className="txt">
        <p className="matricula">Tu matrícula ha sido verificada</p>

        <Button className="btn color marginBtn">
          <NavLink to="/cuenta">Continuar</NavLink>
        </Button>
      </Col>
    </Row>
      
    </div>
  );
};

export default Verificacion;
