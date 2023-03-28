import style from "./Containeroptions.module.css";
import SearchField from "../SearchInput/Searchinput";//importo el componente SearchInput
import { getDoggs,orderByName, orderByWeight, getTemperaments, filterByTemperament, filterCreated } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const ContainerOptionsc = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDoggs());
        dispatch(getTemperaments())
    },[dispatch])

    const allDogs = useSelector((state)=>state.doggs);
    //Guardo en una variable los tempresamentos para hacerlos disponibles al selector
    const allTemperaments = useSelector((state)=>state.temperaments)

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
        console.log("entra al evento")
        setOrden(event.target.value)

    }

    //función para administrar los temperamentos
    function handleFilterTemperament(event){
        event.preventDefault();
        dispatch(filterByTemperament(event.target.value));
    }


    //función para administrar los created o apis
    function handleFilterCreated(event){
        event.preventDefault();
        dispatch(filterCreated(event.target.value))
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
                    <select onChange={handleFilterCreated}>
                            <option value="all">All  </option>
                            <option value="created">Created</option>
                            <option value="api">API</option>

                    </select>

                </div>

                <div className={style.containerFilters}>
                    <select onChange={handleFilterTemperament} defaultValue="Temperaments">
                            <option disabled>Temperaments </option>
                            <option value="all">All</option>

                            {/* Mapeo los options del selector */}
                            {
                                allTemperaments.map((element)=>{
                                    return <option key={element.id} value={element.name}> {element.name}</option>
                                })
                            }

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