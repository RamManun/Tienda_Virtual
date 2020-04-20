import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './Error'
import infoProductos from '../datos/datos'
import Productos from './Productos'
import SingleProducto from './SingleProducto'
import Nosotro from './Nosotros'
import Contact from './Contacto'
import Header from './Header'
import Nav from './Navegador'

class Router extends Component {

    state={
        productos : [],
        terminoBusqueda: ''
    }

    componentWillMount(){
        this.setState({
            productos: infoProductos
        })
    }

    busquedaProducto = (busqueda) => {
        if(busqueda.length > 3){
            this.setState({
                terminoBusqueda : busqueda
            })
        } else {
            this.setState({
                terminoBusqueda: ''
            })
        }
    }


    render() { 

        let productos =[...this.state.productos];
        let busqueda = this.state.terminoBusqueda;
        let resultado 

        if(busqueda !== ''){
            resultado= productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase() ) !== -1
            ))
        }else {
            resultado=productos
        }

        return ( 
            <BrowserRouter>
                <div className="contenedor">
                    <Header/>
                    <Nav/>
                    <Switch>
                        <Route exact path="/nosotros" component={Nosotro}/>
                        <Route exact path="/contacto" component={Contact}/>
                        <Route exact path="/" render={()=>(
                            <Productos
                                productos={resultado}
                                busquedaProducto={this.busquedaProducto}
                            />
                        )}/>
                        <Route exact path="/producto/:productoId" render={
                        (props) => {
                            let idProducto = props.location.pathname.replace('/producto/','');
                            return (
                                <SingleProducto
                                    producto={this.state.productos
                                    [idProducto]}
                                />
                            )
                        }}/>
                        <Route exact Path="/productos/" render={() => (
                            <Productos
                                productos={this.state.productos}
                            />
                        )}/>
                        
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Router;