/*
Redux nos facilita un estado global
que solo puede ser moificado por el reducer
a través de las actions

*/


import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))

)


export default store;