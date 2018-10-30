import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row, Button, Radio } from "react-bootstrap";
import "../CSS/main.css";
import "./servicio.css";

const Servicio = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Crea tu cuenta</h4>
        </Col>
        <Col xs={10} xsOffset={1} className="txt">
          <p>Selecciona el servicio en el que estás interesado</p>
          <form>
            <Radio validationState="">
              Que el transporte recoja a mi hijo en casa
            </Radio>
            <Radio validationState="">
              Que el transporte lleve a mi hijo en casa
            </Radio>
            <Radio validationState="">Todas las anteriores</Radio>
          </form>
          <p>¿A partir de qué fecha quieres hacer uso del servicio?</p>
          <p>Elige el periodo de tiempo que deseas utilizar el servicio</p>
          <Col xs={4} className="border cent color time">
            <p >Un Día</p>
          </Col>
          <Col xs={4} className="border cent color time">
            <p >Una Semana</p>
          </Col>
          <Col xs={4} className="border cent color time">
            <p >Un Mes</p>
          </Col>
          <Button className="btn color">
            <NavLink to="/modal">Continuar</NavLink>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Servicio;
