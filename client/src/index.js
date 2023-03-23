import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//Necesito el browser Router para abrazar las rutas de mi aplicación
import { BrowserRouter } from "react-router-dom";
//importo un provider para poder conectar a redux con mi aplicación
import { Provider } from "react-redux";
//importo el store de redux que cree
import store from "./redux/store"

/*
con la etiqueta <Provider> queda enlazado redux a mi aplicación
le debo pasar cuál es el store que definí
*/
ReactDOM.render(


  <Provider store={store}>

      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


