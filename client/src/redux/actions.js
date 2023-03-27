import axios from "axios";
export const GET_DOGGS = "GET_DOGGS";
export const GET_DOG = "GET_DOG";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const GET_DOG_NAME = "GET_DOG_NAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";


//esta función se denomina action creator trae todos los doggs
export const getDoggs = ()=>{
    //esta función si va a poder hacer el request al servidor
    return async function (dispatch){
            const backendData = await axios.get("http://localhost:3001/dogs"); //Pendiente conectar

            const doggs = backendData.data;
            dispatch({type:GET_DOGGS, payload: doggs})
    }

}

//este action creator es el que me administra la consulta al servidor por id
export const getDog = (id)=>{

    return async function(dispatch){
        const backendData = await axios.get(`http://localhost:3001/dogs/${id}`);

        const doggie = backendData.data;
        dispatch({type:GET_DOG, payload: doggie})
    }

}


// export const filterBySource = ()=>{
//     dispatch({type:FILTER_BY_SOURCE})
// }

// Esta función me administra la petición al servidor por name
export const getDogName = (name)=>{

    return async function(dispatch){
        try{
            const doggie = await axios.get("http://localhost:3001/dogs?name="+name)
            return dispatch({type:GET_DOG_NAME, payload:doggie.data})

        }catch(error){
            return dispatch({type:GET_DOG_NAME, payload:"error"})

        }
    }

}

//función para administrar el action de order by name
export const orderByName = (payload)=>{
    return function (dispatch){
        return dispatch({type: ORDER_BY_NAME, payload:payload})
    }

}


//función para administrar el action de order by weight
export const orderByWeight = (payload)=>{
    return function (dispatch){
        return dispatch({type: ORDER_BY_WEIGHT, payload:payload})
    }

}



//función para administrar el action de los temperamentos
export const getTemperaments = ()=>{
    return async function(dispatch){
        var jsontemp = await axios("http://localhost:3001/temperaments")

        return dispatch({type:GET_TEMPERAMENTS, payload:jsontemp.data})
    }
}




//función para administrar el temperament
export const filterByTemperament=(payload)=>{
    return function(dispatch){
        return dispatch({type:FILTER_BY_TEMPERAMENT, payload:payload })

    }
}