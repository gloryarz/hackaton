import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Row, Col, Carousel } from "react-bootstrap";
import "../CSS/main.css";
import "./carrusel.css";

const Carrusel = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Here Project</h4>
        </Col>
        <Col xs={10} xsOffset={1} className="txt">
        <Carousel>
          <Carousel.Item>
          <img width={600} height={300} alt="900x500" src="https://cdns.freeicon.org/data/11255/school-vector-illustration-with-kids-coming-to-school/school-vector-illustration-with-kids-coming-to-school-cover.png" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="https://static.vecteezy.com/system/resources/previews/000/089/834/original/school-bus-design-vector-free.jpg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, contetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
        </Carousel>
        <Button className="btn color marginBtn">
          <NavLink to="/matricula">Vamos</NavLink>
        </Button>
        <p>
        <NavLink to="/login">Ya tengo cuenta</NavLink>
        </p>
      </Col>
      </Row>
      
    </div>
  );
};

export default Carrusel;
