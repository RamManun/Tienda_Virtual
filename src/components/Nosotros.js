import React from 'react';
import '../css/Nosotros.css'

const Nosotros = () => {
    return ( 
        <div className="contenedor-nosotros">
            <div className="imagen">
                <img src="/img/camisa_1.png" alt="imagen nosotros"/>
            </div>
            <div className="contenido">
                <h2>Sobre Nosotros</h2>
                <p>
                    Hola aqui haciendo una pagina sobre ventas de camisas
                    que loco que sea sobre ventas de camisas, pero igual la
                    pagina es muy buena y si no te gusta pues te invito a que
                    la observer y te enamores de las camisas, chao no sean agresivos
                    y recuerden quedense en casa.
                </p>
            </div>
        </div>
     );
}
 
export default Nosotros;