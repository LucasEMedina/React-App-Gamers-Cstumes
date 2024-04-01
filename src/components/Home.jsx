
import { Link, Route } from 'react-router-dom'
import mandalorian from "../assets/images/mandalorian.jpg"

function Home() {
  return (
    <>
    <div className="row container-producto-listas">
        {/* -- Ultimo producto en DB -- */}
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={mandalorian} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver Detalle</a>
                </div>
            </div>
        </div>
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
                            <a className="card-body" href='/'>
                                Personajes
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="card bg-dark text-white shadow">
                            <a className="card-body" href='/'>
                                Categorias
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="card bg-dark text-white shadow">
                            <Link className="card-body" to='/productsList'>
                                Productos
                            </Link>	
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="card bg-dark text-white shadow">
                            <a className="card-body" href='/'>
                                Ventas
                            </a>
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

export default Home