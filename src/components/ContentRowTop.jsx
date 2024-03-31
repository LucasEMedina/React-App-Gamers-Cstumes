import React from 'react'
import mandalorian from "../assets/images/mandalorian.jpg"

function ContentRowTop() {
  return (
    <>
       {/* -- Content Row Top -- */}
		<div className="container-fluid container-row-top">
			<div className="div-titulo d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
		
			{/* -- Cards Cantidades en DB -- */}
			<div className="row div-cards-cantidades">

				{/* -- Total de Productos -- */}
				<div className="cards-cantidades col-md-4 mb-4">
					<div className="card border-left-primary shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Cantidad de Productos</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">21</div>
								</div>
								<div className="col-auto">
								<i class="bi bi-box-seam-fill fas fa-2x"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* -- Total de Ventas -- */}
				<div className="cards-cantidades col-md-4 mb-4">
					<div className="card border-left-success shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total Ventas</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
								</div>
								<div className="col-auto">
								<i class="fas bi bi-cash-coin fa-2x"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* -- Total de Personajes -- */}
				<div className="cards-cantidades col-md-4 mb-4">
					<div className="card border-left-warning shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de Personajes
									</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
								</div>
								<div className="col-auto">
								<i class="bi bi-person-fill-check fas fa-2x"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* -- Fin de Cards Cantidades -- */}
			

			{/* -- Ultimo producto agregado -- */}
			<div className="row container-producto-listas">
				{/* -- Last Movie in DB -- */}
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
				{/* -- End content row last movie in Data Base -- */}

				{/* -- Genres in DB -- */}
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
									<a className="card-body" href='/'>
										Productos
									</a>	
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
			</div>
		</div>
			{/* --End Content Row Top-- */}
    </>
  )
}

export default ContentRowTop