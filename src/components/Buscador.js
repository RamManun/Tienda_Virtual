import React, { Component } from 'react';
import '../css/Buscador.css'

class Buscar extends Component {

    handleChange = (e) => {
        //termino de busqueda
        const termino = e.target.value
        
    }

    render() { 
        return ( 
            <form className="buscador">
                <input type="text" placeholder="Busqueda" onChange={this.handleChange}/>
            </form>
         );
    }
}
 
export default Buscar;