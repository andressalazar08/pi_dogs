//importamos el componente card solo para esta vista
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//importamos la action que queremos despachar
import { getDoggs } from "../../redux/actions";


const Home = () =>{

    // cuando se monta este componente debe hacer el usedispatch() de react-redux para que su componente hijo tome el estado global
    const dispatch = useDispatch();

    // administramos el ciclo de vida con un useEffect() de react
    useEffect(()=>{
        dispatch(getDoggs());
    },[dispatch]) //la variable la ponemos dentro del array de dependencias para que no llore la consola

    return(
        <>
            <h1> Esta es la vista de Home</h1>
            <CardsContainer />

        </>
    )
}


export default Home;