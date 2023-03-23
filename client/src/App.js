// import Home from "./views/Home/Home";
// import Landing from "./views/Landing/Landing";
// import Form from "./views/Form/Form";
// import Detail from "./views/Detail/Detail";
import { Home, Landing, Form, Detail } from "./views/index"; //importo todas las vistas desestructuradas del index raíz de la carpeta views
//importamos Route
import { Route, useLocation } from "react-router-dom";
//Importamos la barra de navegación
import NavBarapp from "./components/NavBar/NavBar";
// import ContainerOptions from "./components/ContainerOptions/ContainerOptions";


function App() {

  // Si la ubicación es / no debe mostrar la barra de navegación
  //uso un hook para consultar la ubicación

  const location = useLocation();

  return (
    <div className="App">
      {/* <h1>Henry Dogs PÁGINA PRINCIPAL</h1> */}

      {/* maneras de definir las rutas
        1.
        <Route exact path="/" component={Landing}>
        2.
        <Route exact path="/" render={()=><Landing />}>
        3. Forma anidada básica
        <Route exact path="/">
          <Landing />
        </Route>

       */}

       {/* Si la ubicación no es / se renderiza la navbar */}
       {/* {if (location.pathname!=="/"){<NavBarapp />}} */}
       {/* utilizo el hook */}
       {location.pathname !=="/" && <NavBarapp />}


      <Route exact path="/">
        <Landing />
      </Route>

      <Route exact path="/home">
         <Home />

      </Route>

       {/* El nombre de la ruta lo dejo con create */}
      <Route exact path="/create">
        <Form />
      </Route>

      <Route exact path="/detail">
        <Detail />
      </Route>


    </div>
  );
}

export default App;
