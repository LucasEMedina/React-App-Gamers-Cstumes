import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UpInicio from './UpInicio';
import Inicio from './Inicio';
import ProductsList from './ProductsList';
import CategoriasList from './CategoriasList';
import PersonajesList from './PersonajesList';
import ApiUsers from "./apiUsers";

function ContentRowTop() {
  return (
    <>
    
		<div className="container-fluid container-row-top">
      	
			<UpInicio />
			<Routes>
				
				
				
				{/* -- Contenido Home -- */}
				
				<Route exact={true} path='/' element={<Inicio/>} />
				<Route exact path='/productsList' element={<ProductsList/>} />
				<Route exact path='/categoriasList' element={<CategoriasList/>} />
				<Route exact path='/personajesList' element={<PersonajesList/>} />
				<Route exact path='/apiUsers' element={<ApiUsers/>} />
				
			</Routes>	
		</div>
	
    </>
  )
}

export default ContentRowTop