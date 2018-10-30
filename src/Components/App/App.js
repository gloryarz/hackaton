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
      <BrowserRouter basename = { process.env.PUBLIC_URL }>
        <Switch>
          <Route path= '/' component={Carrusel} exact />
          <Route path= '/matricula' component={Matricula} />   
          <Route path= '/verificacion' component={Verificacion} />  
          <Route path= '/servicio' component={Servicio} /> 
          <Route path= '/pago' component={Pago} />  
          <Route path= '/confirmacion' component={Confirmacion} />   
          <Route path= '/modal' component={Modal} />
          <Route path= '/login' component={Login} />  
          <Route path= '/inicio' component={Inicio} />   
          <Route path= '/cuenta' component={Cuenta} />
          <Route path= '/tarjeta' component={Tarjeta} />  
          <Route component={Error} />      
        </Switch>
         
      </BrowserRouter>
     );
  }
}
 
export default App;