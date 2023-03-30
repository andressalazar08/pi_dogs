//importamos el componente card solo para esta vista
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//importamos la action que queremos despachar
import { getDoggs } from "../../redux/actions";
import ContainerOptionsc from "../../components/ContainerOptions/ContainerOptions";
import Pages from "../../components/Paginator/Paginator";




const Home = () =>{

    // cuando se monta este componente debe hacer el usedispatch() de react-redux para que su componente hijo tome el estado global
    const dispatch = useDispatch();

    // administramos el ciclo de vida con un useEffect() de react
    useEffect(()=>{
        dispatch(getDoggs());
    },[dispatch]) //la variable la ponemos dentro del array de dependencias para que no llore la consola

    const allDoggies = useSelector((state)=>state.doggs)
    //Definición de estados para el paginador
    const [currentPage, setCurrentPage] = useState(1); //el estado inicial del paginador es 1
    //Definición de tarjetas por página
    const [doggiesPerPage, setDoggiesPerPage] =useState(15) // Se definen que por página se mostrarán 8 tarjetas

    //Cálculos de indices de las tarjetas a presentar
    //Índice del último dog que se presentará en la página actual
    const indexOfLastDoggie = currentPage * doggiesPerPage;
    //Índice del primer dog que se presentará en la página actual
    const indexOfFirstDoggie = indexOfLastDoggie - doggiesPerPage;

    //Conjunto de doggies que se presentarán en la vista actual
    const currentDogs = allDoggies.slice(indexOfFirstDoggie, indexOfLastDoggie);

     //función para setar el número de la página y que entrará como argumento
    const pages=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }


    return(
        <>
            <h1> Esta es la vista de Home</h1>
            <ContainerOptionsc />
            <Pages
                doggiesPerPage={doggiesPerPage}
                allDoggies={allDoggies.length}
                pages={pages}
                currentPage={currentPage}
                currentDogs={currentDogs}
            />
            <CardsContainer />

        </>
    )
}


export default Home;