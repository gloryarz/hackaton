import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { Col, Button, Row } from "react-bootstrap";
import '../CSS/main.css'
import './pago.css'


class Pago extends Component {
  state = {  
    show: false
  }

  show = () => {
    alert('sdfsf');
  }
  render() { 
    return ( <div>
        <Row>
        <Col xs={12} className="color">
          <h4 className="center head">Crea tu cuenta</h4>
        </Col>
        <Col xs={10} xsOffset={1} className="txt">
        <p>Elige tu forma de pago</p>
        <Col xs={6}>
            <p className="border" onClick={this.show}>Tarjeta</p>
        </Col>
        <Col xs={6}>
          <p className="border">PayPal</p>
        </Col>

      </Col>
      </Row>      
    </div> );
  }
}
 
export default Pago;
