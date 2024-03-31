import React from 'react'
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'

function ProductosNuevos() {
  return (
    <>
    {/* -- Content Wrapper -- */}
		<div id="content-wrapper" className="d-flex flex-column content-wrapper">

			{/* -- Main Content -- */}
			<div id="content" className='content-top-row'>

        <TopBar/>
        <ContentRowTop/>

      </div>
			{/* -- End of MainContent -- */}

      <Footer/>

    </div>
		{/* -- End of Content Wrapper -- */}

      
    </>
  )
}

export default ProductosNuevos