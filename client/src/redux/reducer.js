import { GET_DOGGS } from "./actions";

//el reducer es la función que está autorizada para modificar el estado global
//OJO ESTE ES EL ESTADO GLOBAL
const initialState={
    doggs:[], //cuando inicie la aplicación tendra un estado inicial vacío
}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){

        case GET_DOGGS:
            return {...state, doggs: action.payload}


        default:
            return{...state}
    }
}


export default rootReducer;