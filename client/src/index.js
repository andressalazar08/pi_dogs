import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//Necesito el browser Router para abrazar las rutas de mi aplicación
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);
