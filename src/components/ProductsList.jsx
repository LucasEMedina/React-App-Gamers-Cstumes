
function ProductsList() {
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Remera Mario</td>
                        <td>$15200</td>
                        <td>% 10</td>
                        <td><i className="bi bi-pencil-square fas fa-2x icon-categ"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>$12900</td>
                        <td>% 20</td>
                        <td><i className="bi bi-pencil-square fas fa-2x icon-categ"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>$17300</td>
                        <td>% 10</td>
                        <td><i className="bi bi-pencil-square fas fa-2x icon-categ"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
    </>
  )
}

export default ProductsList