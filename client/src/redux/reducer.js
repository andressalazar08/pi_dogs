import { GET_DOGGS, GET_DOG_NAME, ORDER_BY_NAME, ORDER_BY_WEIGHT, GET_TEMPERAMENTS, FILTER_BY_TEMPERAMENT, FILTER_CREATED } from "./actions";

//el reducer es la función que está autorizada para modificar el estado global
//OJO ESTE ES EL ESTADO GLOBAL
const initialState={
    doggs:[], //cuando inicie la aplicación tendra un estado inicial vacío
    doggsfiltered:[], //cuando carga home no se ha filtrado nada
    temperaments:[],
    detail:[]
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


        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments:action.payload
            }


        case FILTER_BY_TEMPERAMENT:

            const doggfilt = state.doggsfiltered;

            let tempscriteria = action.payload;

            if(tempscriteria==="all"){

                let filteredtemp = doggfilt
                return{
                    ...state,
                    doggsfiltered:filteredtemp
                }
            }else{

                //si el usuario escoge un temperamento
                //debo traer todos los perros que incluyan ese temperamento
                let filteredtemp = doggfilt.filter((element)=>{
                    if(element.temperament){
                        if(element.temperament.includes(action.payload)){
                            return element;
                        }
                    }

                })

                console.log("entro")
                return{
                    ...state,
                    doggsfiltered:filteredtemp
                }
            }


        case FILTER_CREATED:
            const allDoggies = state.doggs;

            const filterCriteria = action.payload;

            if(filterCriteria === "created"){
                let onlycreated = allDoggies.filter(element=>element.id.toString().length > 4)
                return{
                    ...state,
                    doggsfiltered:onlycreated
                }
            }

            if(filterCriteria === "api"){
                let onlyapi = allDoggies.filter(element=>element.id.length <=4)
                return{
                    ...state,
                    doggsfiltered:onlyapi
                }
            }

            if(filterCriteria==="all"){
                return{
                    ...state,
                    doggsfiltered:allDoggies
                }
            }




        default:
            return{...state}
    }
}


export default rootReducer;