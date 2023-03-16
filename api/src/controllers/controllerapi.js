const axios = require('axios');
const { Dog, Temperament } = require('../db')//Importamos los modelos de bd creados


/*
Este conrolador construye un objeto con la info relevante de la api

const apidata = async ()=>{

    try{
        const conexion =await axios.get('https://api.thedogapi.com/v1/breeds');

        return conexion.data


    }catch(error){
        console.log(error)
    }

}
*/


const apidata = async ()=>{

    try{
        const conexion =await axios.get('https://api.thedogapi.com/v1/breeds');
        //creo una variable para organizar el objeto
        const datosDogs  = await conexion.data.map((dog) => {
                const weight = dog.weight.metric.split('-');


            })


        return datosDogs;

    }catch(error){
        console.log(error)
    }

}


module.exports = {
    apidata,
}