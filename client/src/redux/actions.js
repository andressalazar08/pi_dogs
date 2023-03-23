import axios from "axios";
export const GET_DOGGS = "GET_DOGGS";
export const GET_DOG = "GET_DOG";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE"


//esta función se denomina action creator trae todos los doggs
export const getDoggs = ()=>{
    //esta función si va a poder hacer el request al servidor
    return async function (dispatch){
            const backendData = await axios.get(""); //Pendiente conectar

            const doggs = backendData.data;
            dispatch({type:GET_DOGGS, payload: doggs})
    }

}

//este action creator es el que me administra la consulta al servidor por id
export const getDog = (id)=>{

    return async function(dispatch){
        const backendData = await axios.get(`/${id}`);

        const doggie = backendData.data;
        dispatch({type:GET_DOG, payload: doggie})
    }

}


// export const filterBySource = ()=>{
//     dispatch({type:FILTER_BY_SOURCE})
// }
