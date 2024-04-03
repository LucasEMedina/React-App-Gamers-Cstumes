import React from "react";
import { useState, useEffect } from "react";

function productsApi() {
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

    return(
        <>
        <ul>
            {
                !todos ? 'Cargando...' :
                todos.map( (todo, index) => {
                    return <li>{todo.firstName}</li>
                })
            }
        </ul>
        </>
    )
}

export default productsApi