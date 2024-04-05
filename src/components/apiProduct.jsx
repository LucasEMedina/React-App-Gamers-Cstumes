import React from "react";
import { useState, useEffect } from "react";

const productsApi = {

productsList: () => {
    const [todos, setTodos] = useState(null)
    const fetchApi = async () => {
        const response = await fetch('http://localhost:3000/api/v1/product')
        console.log(response);
        const responseJSON = await response.json()
        console.log(responseJSON);
        setTodos(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <div className="productsList-container">

                <h2>Poductos en Data Base</h2>

                <div className="copyright text-center my-auto">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Discount</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !todos ? 'Cargando...' :
                                    todos.map((todo, index) => {
                                        return <tr>
                                            <th scope="row">{todo.id}</th>
                                            <td>{todo.name}</td>
                                            <td>{todo.price}</td>
                                            <td>{todo.discount}</td>
                                            <td><i className="bi bi-pencil-square fas fa-2x icon-categ"></i></td>
                                        </tr>

                                    })
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        </>
    )
},

countProducts: () => {
    const [todos, setTodos] = useState(null)
    const fetchApi = async () => {
        const response = await fetch('http://localhost:3000/api/v1/product')
        console.log(response);
        const responseJSON = await response.json()
        console.log(responseJSON);
        setTodos(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <>
                {
                    !todos ? 'Cargando...' :
                        todos.length
                }
        </>
)},

lastProduct: () => {
    const [todos, setTodos] = useState(null)
    const fetchApi = async () => {
        const response = await fetch('http://localhost:3000/api/v1/product')
        console.log(response);
        const responseJSON = await response.json()
        console.log(responseJSON);
        setTodos(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">

                        {!todos ? 'Cargando...' :
                        <>
                            <img src={todos.image} alt="last product" />
                        </>
                        }

                    </div>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver Detalle</a>
                </div>
            </div>
        </div>
        </>
)}
}

export default productsApi