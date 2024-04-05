import React from 'react'
import usersApi from './apiUsers'
import productsApi from './apiProduct'

function UpInicio() {
  return (
    <>
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
									<div className="h5 mb-0 font-weight-bold text-gray-800">{productsApi.countProducts()}</div>
								</div>
								<div className="col-auto">
								<i className="bi bi-box-seam-fill fas fa-2x"></i>
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
								<i className="fas bi bi-cash-coin fa-2x"></i>
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
									<div className="h5 mb-0 font-weight-bold text-gray-800">{usersApi.countUsers()}</div>
								</div>
								<div className="col-auto">
								<i className="bi bi-person-fill-check fas fa-2x"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* -- Fin de Cards Cantidades -- */}
    </>
  )
}

export default UpInicio