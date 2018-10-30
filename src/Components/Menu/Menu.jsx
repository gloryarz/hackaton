import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Button, Row } from "react-bootstrap";
import '../CSS/main.css'
import './menu.css'


const Menu = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Here Project </h4>
        </Col>
        <Col xs={10} xsOffset={1} className="txt">
      

        <Button className="btn color marginBtn">
          {/* <NavLink to="/verificacion">Continuar</NavLink> */}
        </Button>
      </Col>
      </Row>
      
    </div>
  );
};

export default Menu;
