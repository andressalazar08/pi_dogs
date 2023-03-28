import React from "react";

import style from "./Paginator.module.css"


//función para el componente pages
//recibe por destructuring parámetros para controlar la navegación
const Pages = ({ doggiesPerPage, allDoggies, pages, currentPage, currentDogs })=>{

    //Variables iniciales
    allDoggies=20;
    doggiesPerPage=5;
    currentPage=1;

    const pageNumbers = []; // array para indicar cuántas páginas se renderizan

    for(let i=1; i <= Math.ceil(allDoggies/ doggiesPerPage);i++){
        pageNumbers.push(i);
    }

    return (
        <ul>
                {/* Previo e inicio */}
                <li>
                    <button>{'<<'}</button>
                    <button>Prev</button>
                </li>


                <li>
                    <h1>{currentPage}</h1>
                </li>

                {/* Siguiente y final */}
                <li>
                    <button>{'>>'}</button>
                    <button>Next</button>
                </li>

        </ul>
    );

}




export default Pages;
