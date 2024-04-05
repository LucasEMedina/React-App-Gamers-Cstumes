import React from 'react';
import { Link, Route } from 'react-router-dom';
import productsApi from './apiProduct';

function Inicio() {
  return (
    <>
    <div className="row container-producto-listas">
        {/* -- Ultimo producto en DB -- */}
            {productsApi.lastProduct()}
        {/* -- FIN Ultimo producto en DB -- */}

        {/* -- Contenidos en DB -- */}
        <div className="listado-acciones col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Contenidos en Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="mb-4">
                        <div className="card bg-dark text-white shadow">
                            <Link className="card-body" to='/personajesList'>
                                Personajes
                            </Link>	
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="card bg-dark text-white shadow">
                            <Link className="card-body" to='/categoriasList'>
                                Categorias
                            </Link>	
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="card bg-dark text-white shadow">
                            <Link className="card-body" to='/productsList'>
                                Productos
                            </Link>	
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* -- FIN Contenidos en DB -- */}

    </div>
    </>
  )
}

export default Inicio