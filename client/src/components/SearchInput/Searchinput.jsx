import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogName } from "../../redux/actions";

import style from "./Searchinput.module.css";

const SearchField = ()=>{

    const dispatch = useDispatch();
    // Defino el estado del componente
    const [name, setName] = useState("");

    // Defino el comportamiento del input para capturar en el estado el name a buscar
    function handleInputChange(event){
        setName(event.target.value);
    }

    // Defino la función que ejecuta el button
    function handleSearch(event){
        event.preventDefault();
        dispatch(getDogName(name))

    }

    return(

        <div>
            <div className={style.searchbox}>

                    <input type="text" name="" placeholder="Search Name" onChange={(event)=>handleInputChange(event)} />
                    <button onClick={(event)=>handleSearch(event)}> Search </button>
            </div>
        </div>

    )

}



export default SearchField;