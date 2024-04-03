function PersonajesList() {
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
                          <th scope="col">User Especify</th>
                          <th scope="col">Edit</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th scope="row">1</th>
                          <td>Lucas</td>
                          <td>Pato</td>
                          <td>lucas@gmail.com</td>
                          <td>Admin</td>
                          <td><i className="bi bi-pencil-square fas fa-2x icon-categ"></i></td>
                      </tr>
                      <tr>
                          <th scope="row">2</th>
                          <td>Francisco</td>
                          <td>Chotalarga</td>
                          <td>fran_gilda@hotmail.com</td>
                          <td>Costumer</td>
                          <td><i className="bi bi-pencil-square fas fa-2x icon-categ"></i></td>
                      </tr>
                      <tr>
                          <th scope="row">3</th>
                          <td>Homero</td>
                          <td>Thompson</td>
                          <td>homerTps@gmail.com</td>
                          <td>Costumer</td>
                          <td><i className="bi bi-pencil-square fas fa-2x icon-categ"></i></td>
                      </tr>
                  </tbody>
              </table>
          </div>
          
      </div>
      </>
    )
  }
  
  export default PersonajesList