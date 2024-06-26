import React from 'react'
import './assets/css/app.css'
import SideBar from './components/SideBar'
import ContentWrapper from './components/ContentWrapper'


function App() {
  
  return (
    
    <div id="wrapper" className='body-app'>
      <SideBar />
      <ContentWrapper />
    </div>
    
  )
}

export default App
