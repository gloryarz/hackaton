import React from "react";
import { Col, Row, Navbar, Nav, NavItem } from "react-bootstrap";
import '../CSS/main.css'
import './menu.css'


const Menu = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Here Project </h4>
          <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    
  </Nav>
</Navbar>;
        </Col>
      </Row>
    </div>
  );
};

export default Menu;
