import { GET_DOGGS, GET_DOG_NAME, ORDER_BY_NAME } from "./actions";

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
            console.log(action.payload)
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

            // state.doggs.sort(function(a,b){
            //         if(a.name.toLowerCase()>b.name.toLowerCase()) {return 1}
            //         if(b.name.toLowerCase()>a.name.toLowerCase()) {return -1}
            //         return 0
            //     }):
            //     state.doggs.sort(function(a,b){
            //             if(a.name.toLowerCase()>b.name.toLowerCase()) {return -1}
            //             if(b.name.toLowerCase()>a.name.toLowerCase()) {return 1}
            //             return 0
            //         })



        default:
            return{...state}
    }
}


export default rootReducer;