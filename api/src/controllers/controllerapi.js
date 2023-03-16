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

//recupero la información de la api
const apidata = async ()=>{
    try{
        const conexion =await axios.get('https://api.thedogapi.com/v1/breeds');
        //creo una variable para organizar el objeto
        let datosDogs  = conexion.data.map((doggie) => {
                //divido en array la propiedad metric del objeto que viene de la api "metric":"3 - 6"
                const weight = doggie.weight.metric.split('-');
                const height = doggie.height.metric.split('-');
                //ajusto el array que viene en weight de la api
                const min_weight = parseInt(weight[0]);
                const max_weight = parseInt(weight[1]);
                //ajusto el array que viene en height de la api
                const min_height = parseInt(height[0]);
                const max_height = parseInt(height[1]);
                const id = doggie.id+"" //Ajusto el id como un string

                //Devuelvo el objeto con la info relevante de la api
                return{
                    id: id,
                    name:doggie.name,
                    min_weight: min_weight? min_weight: 0, // Es posible que la api no entregue dato de peso minimo
                    max_weight: max_weight? max_weight: 1, // se daría un peso de 1 por defecto
                    min_height: min_height? min_height: 0,
                    max_height: max_height? max_height: 1, // se dearía una altura de 1 máximo por defecto
                    life_span: doggie.life_span,
                    image: doggie.image.url,
                    temperament: doggie.temperament? doggie.temperament: "None"
                }
            })
        return datosDogs;

    }catch(error){
        console.log(error)
    }

}


//recupero la información de la base de datos
const bdData = async()=>{

    try{
        const doggieDb = await Dog.findAll({
            include:{
                model: Temperament,
                attributes: ['name'],
                through:{
                    attributes:[],
                }
            }
        })
        return doggieDb
    }catch(error){
        console.log(error);
    }

}



//concateno la información que se encuentra en bd y en la api
const allData = async ()=>{
    const apidog = await apidata();
    const bddog = await bdData();
    const all = apidog.concat(bddog);
    return all
}




module.exports = {
    allData,
}