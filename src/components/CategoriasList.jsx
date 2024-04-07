import React from 'react'
import { Link } from 'react-router-dom'
import CategorySerch from './CategorySerch'


function CategoriasList() {
    return (
        <>
            <div className="listado-acciones col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Categorias en Data Base</h5>
                    </div>
                    <div className="card-body categ-body">
                        <div className="mb-4 categ-btn-div">
                            <div className="card bg-dark text-white shadow">
                                <Link className="card-body" to='/'>
                                    Mario Bross
                                </Link>
                            </div>
                        </div>
                        <div className="mb-4 categ-btn-div">
                            <div className="card bg-dark text-white shadow">
                                <Link className="card-body" to='/'>
                                    Zelda
                                </Link>
                            </div>
                        </div>
                        <div className="mb-4 categ-btn-div">
                            <div className="card bg-dark text-white shadow">
                                <Link className="card-body" to='/'>
                                    Sonic
                                </Link>
                            </div>
                        </div>
                        <div className="mb-4 categ-btn-div">
                            <div className="card bg-dark text-white shadow">
                                <Link className="card-body" to='/'>
                                    Mortal Kombat
                                </Link>
                            </div>
                        </div>
                        <div className="mb-4 categ-btn-div">
                            <div className="card bg-dark text-white shadow">
                                <Link className="card-body" to='/'>
                                    Street Fighter
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <CategorySerch />

            </div>
        </>
    )
}

export default CategoriasList