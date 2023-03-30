import React from "react";

import style from "./Paginator.module.css"


//función para el componente pages
//recibe por destructuring parámetros para controlar la navegación
const Pages = ({ doggiesPerPage, allDoggies, pages, currentPage, currentDogs })=>{

    //Variables iniciales
    // allDoggies=20;
    // doggiesPerPage=5;
    // currentPage=1;

    //si hay perros por mostrar se genera una nueva página con el listado de perros por mostrar
    if(currentDogs){

    const pageNumbers = []; // array para indicar cuántas páginas se renderizan

    for(let i=1; i <= Math.ceil(allDoggies/ doggiesPerPage);i++){
        pageNumbers.push(i);
    }

    return (
        <ul>
                {/* Previo e inicio */}
                <li>
                    {/* botón inicio: setea el índice de página al inicio(1)*/}
                    <button disabled={currentPage>1? false: true} onClick={()=>pages(1)}>{'<<'}</button>
                    {/* botón anterior: setea el índice de página en el anterior */}
                    <button disabled={currentPage>1? false: true} onClick={()=>pages(currentPage-1)}>Prev</button>
                </li>


                <li>
                    <h1>{currentPage}</h1>
                </li>

                {/* Siguiente y final */}
                <li>
                    {/* botón siguiente: setea el índice de página en el siguiente */}
                    <button disabled={currentPage < pageNumbers.length? false: true} onClick={()=>pages(currentPage+1)}>Next</button>
                    {/* botón final: setea el indice de página hasta el último */}
                    <button disabled={currentPage<pageNumbers.length? false:true} onClick={()=>pages(pageNumbers.length)}>{'>>'}</button>
                </li>

        </ul>
    );
    }else{
        return null;
    }

}




export default Pages;
