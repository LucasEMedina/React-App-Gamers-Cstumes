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
            <ul>
                {
                    !todos ? 'Cargando...' :
                        todos.length
                }
            </ul>
        </>
)}
}

export default productsApi