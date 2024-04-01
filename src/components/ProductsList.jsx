
function ProductsList() {
  return (
    <>
    <div className="productsList-container">

        <h2>Poductos en Data Base</h2>
        
        <div className="copyright text-center my-auto">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Remera Mario</td>
                        <td>$15200</td>
                        <td>% 10</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>% 20</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>% 10</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
    </>
  )
}

export default ProductsList