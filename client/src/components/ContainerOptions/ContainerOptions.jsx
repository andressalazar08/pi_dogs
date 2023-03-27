import style from "./Containeroptions.module.css";
import SearchField from "../SearchInput/Searchinput";//importo el componente SearchInput
import { getDoggs,orderByName, orderByWeight } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const ContainerOptionsc = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDoggs());
    },[dispatch])

    const allDogs = useSelector((state)=>state.doggs);
    // const allTemperament = useSelector((state)=>state.temperaments)

    //estado para el sort
    const [orden, setOrden] = useState("");

    //función para administrar el sort by name
    function handleSortName(event){
        event.preventDefault();
        dispatch(orderByName(event.target.value))

        setOrden(event.target.value)
    }

    //funcion para administrar el sort by weight
    function handleSortWeight(event){
        event.preventDefault();
        dispatch(orderByWeight(event.target.value));
        console.log("entra al aevento")
        setOrden(event.target.value)

    }


    return(

            <div className={style.containerOps}>
                <h1>Opciones de búsqueda</h1>

                <div className={style.containerFilters}>

                    <select onChange={handleSortName} defaultValue="Order Alphabetically">
                            <option disabled>Order Alphabetically</option>
                            <option value="atoz">A to Z</option>
                            <option value="ztoa">Z to A</option>

                    </select>

                </div>


                <div className={style.containerFilters}>
                    <select onChange={handleSortWeight} defaultValue="Order by Weight">
                            <option disabled>Order by Weight  </option>
                            <option value="max">Max Weight</option>
                            <option value="min">Min Weight</option>

                    </select>

                </div>


                <div className={style.containerFilters}>
                    <select>
                            <option>All  </option>
                            <option>Created</option>
                            <option>API</option>

                    </select>

                </div>

                <div className={style.containerFilters}>
                    <select>
                            <option>Temperaments</option>
                            <option>All</option>

                    </select>

                </div>

                {/* Search Input */}

                <div className={style.searchInputs}>

                {/* Componente Search Input */}
                    <h1>Search Bar</h1>
                    <SearchField/>


                </div>


            </div>


    )

}


export default ContainerOptionsc;