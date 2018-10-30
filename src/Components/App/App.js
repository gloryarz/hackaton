import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Carrusel from '../Carrusel/Carrusel';
import  Matricula from '../Matricula/Matricula';
import  Verificacion from '../Verificacion/Verificacion';
import  Servicio from '../Servicio/Servicio';
import  Pago from '../Pago/Pago';
import  Confirmacion from '../Confirmacion/Confirmacion';
import  Modal from '../Modal/Modal';
import  Login from '../Login/Login';
import  Inicio from '../Inicio/Inicio';
import Cuenta from '../Cuenta/Cuenta'
import Tarjeta from '../Tarjeta/Tarjeta'
import Error from '../Error/Error'


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={Carrusel} exact />
          <Route path={`${process.env.PUBLIC_URL}/matricula`} component={Matricula} />   
          <Route path={`${process.env.PUBLIC_URL}/verificacion`} component={Verificacion} />  
          <Route path={`${process.env.PUBLIC_URL}/servicio`} component={Servicio} /> 
          <Route path={`${process.env.PUBLIC_URL}/pago`} component={Pago} />  
          <Route path={`${process.env.PUBLIC_URL}/confirmacion`} component={Confirmacion} />   
          <Route path={`${process.env.PUBLIC_URL}/modal`} component={Modal} />
          <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />  
          <Route path={`${process.env.PUBLIC_URL}/inicio`} component={Inicio} />   
          <Route path={`${process.env.PUBLIC_URL}/cuenta`} component={Cuenta} />
          <Route path={`${process.env.PUBLIC_URL}/tarjeta`} component={Tarjeta} />  
          <Route component={Error} />      
        </Switch>
         
      </BrowserRouter>
     );
  }
}
 
export default App;