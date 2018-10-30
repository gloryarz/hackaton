import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { Col, Button, Row } from "react-bootstrap";
import '../CSS/main.css'
import './pago.css'


class Pago extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  show = () => {
    this.setState({show: this.state.show = false});
  }
  render() { 
    return ( <div>
        <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Crea tu cuenta</h4>
        </Col>
        {this.state.show === true ? (
          <Col xs={10} xsOffset={1} className="txt">
            <p>Elige tu forma de pago</p>
            <Col xs={6}>
              <p className="border" onClick={this.show}>Tarjeta</p>
            </Col>
            <Col xs={6}>
              <p className="border" onClick={this.show}>PayPal</p>
            </Col>
        </Col>
        ):(<Col xs={10} xsOffset={1} className="">
        
        <p className="txt">Número de tu tarjeta</p>
        <input type="text" className=""/> 
        <p className="txt">Nombre del titular de la tarjeta</p>
        <input type="text" className=""/> 
        <p className="txt">CVV</p>
        <input type="text" className=""/> 
        <p className="txt">Fecha de expiración</p>
        <input type="text" className=""/> 

        <Button className="btn color ">
          <NavLink to="/confirmacion">Boton</NavLink>
        </Button>
        </Col>
        
        )}
          
      </Row>      
    </div> );
  }
}
 
export default Pago;
