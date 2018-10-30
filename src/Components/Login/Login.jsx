import React from 'react';
import { NavLink } from "react-router-dom";
import { Col, Button, Row } from "react-bootstrap";

const Login = () => {
    return (
        <div>
            <p>
                Login
            </p>
            <Button className="btn color marginBtn">
          <NavLink to="/inicio">Inicia Sesión</NavLink>
        </Button>
        </div>
    )
}

export default Login;