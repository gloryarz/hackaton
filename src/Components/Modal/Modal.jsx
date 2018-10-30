import React from 'react';
import { NavLink } from "react-router-dom";
import {Button, Col, Row} from 'react-bootstrap';
import '../CSS/main.css';
import './modal.css';

const Modal = () => {
    return (
        <div>
            <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Crea tu cuenta</h4>
        </Col>
        <Col xs={10} xsOffset={1} className="box">
          <p>Con base a la dirección registrada, tu ruta correspondiente es la de la zona norte, camión 2, 
              por lo cual se estima el siguiente precio: </p><br/>
                <p>
              $35.00 MXN <br/>
              Camión 2 <br/>
              Servicio completo <br/>
              Hora estimada del camión a tu casa:  <br/>
              6:40 a.m. <br/>
              Hora estimada del regreso del camión  
              A tu casa:<br/>
              2:30 p.m. 
          </p>
          <Button className="btn color btns">
            <NavLink to="/pago">Continuar</NavLink>
          </Button>
          <Button className="btn color btns">
            <NavLink to="/servicio">Cancelar</NavLink>
          </Button>
        </Col>
      </Row>
                
        </div>
    )
}

export default Modal;