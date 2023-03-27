import { GET_DOGGS, GET_DOG_NAME, ORDER_BY_NAME, ORDER_BY_WEIGHT } from "./actions";

//el reducer es la función que está autorizada para modificar el estado global
//OJO ESTE ES EL ESTADO GLOBAL
const initialState={
    doggs:[], //cuando inicie la aplicación tendra un estado inicial vacío
    doggsfiltered:[] //cuando carga home no se ha filtrado nada
}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){

        case GET_DOGGS:
            return {...state,
                doggs: action.payload,        //un array que me servirá de backup para el reset
                doggsfiltered:action.payload} //tengo un segundo array que me ayudará a filtrar

        case GET_DOG_NAME:
            return{
                ...state,
                doggsfiltered: action.payload
            }

        case ORDER_BY_NAME:
            let sortcriteria = action.payload;
            console.log("entra al reducer")
            if(sortcriteria==='atoz'){

                let sorteddata = [...state.doggsfiltered].sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });

                return{
                    ...state,
                    doggsfiltered:sorteddata
                }
            }else{
                let sorteddata = [...state.doggsfiltered].sort((a, b) => {
                    return b.name.localeCompare(a.name);
                });

                return{
                    ...state,
                    doggsfiltered:sorteddata
                }
            }


            // "min_weight": 3,
            // "max_weight": 6,
            // "min_height": 23,
            // "max_height": 29,


        case ORDER_BY_WEIGHT:
            let sortcriteriaw = action.payload;

            if(sortcriteriaw==="max"){
                let sorteddataw = [...state.doggsfiltered].sort((a,b)=>{
                    return a.max_weight - b.max_weight
                });

                return{
                    ...state,
                    doggsfiltered:sorteddataw
                }

            }else{
                let sorteddataw = [...state.doggsfiltered].sort((a,b)=>{
                    return b.min_weight - a.min_weight
                });


                return{
                    ...state,
                    doggsfiltered:sorteddataw
                }

            }




        default:
            return{...state}
    }
}


export default rootReducer;