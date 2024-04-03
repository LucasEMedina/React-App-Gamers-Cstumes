import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Asegúrate de ajustar la ruta según tu estructura de archivos

ReactDOM.render(
 <Router>
    <App />
 </Router>,
 document.getElementById('root')
);

