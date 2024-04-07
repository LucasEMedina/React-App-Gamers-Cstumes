import React, { useState, useEffect } from 'react'

const CategorySerch = () => {

    //setear los hooks useState
    const [category, setCategory] = useState([])
    const [search, setSearch] = useState("")

    //funcion para traer los datos de la API
    const URL = 'http://localhost:3000/api/v1/product'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()

        setCategory(data)
    }

    //funcion de busqueda
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    //metodo de filtrado
    let results = []
    if (!search) {
        results = category
    } else {
        results = category.filter((dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }


    useEffect(() => {
        showData()
    }, [])

    return (
        <div className="copyright text-center my-auto">
            <h3>Busca los productos según su categoría</h3>

            <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control mb-4' />
            {

                !search ? <div></div> :
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
                            {results.map((categ) => {
                                return <tr>
                                    <th scope="row">{categ.id}</th>
                                    <td>{categ.name}</td>
                                    <td>{categ.price}</td>
                                    <td>{categ.discount}</td>
                                    <td><i className="bi bi-pencil-square fas fa-2x icon-categ"></i></td>
                                </tr>

                            })}
                        </tbody>

                    </table>
            }

        </div>
    )
}

export default CategorySerch