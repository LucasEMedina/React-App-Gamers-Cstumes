import React from "react";
import { useState, useEffect } from "react";

const usersApi = {

    listUsers: () => {
        const [todos, setTodos] = useState(null)
        const fetchApi = async () => {
            const response = await fetch('http://localhost:3000/api/v1/user')
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

                    <h2>Personajes en Data Base</h2>

                    <div className="copyright text-center my-auto">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">User Specify</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !todos ? 'Cargando...' :
                                        todos.map((todo, index) => {
                                            return <tr>
                                                <th scope="row">{todo.id}</th>
                                                <td>{todo.firstName}</td>
                                                <td>{todo.lastName}</td>
                                                <td>{todo.email}</td>
                                                <td>{todo.userEspecify_id}</td>
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

    countUsers: () => {
        const [todos, setTodos] = useState(null)
        const fetchApi = async () => {
            const response = await fetch('http://localhost:3000/api/v1/user')
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


export default usersApi