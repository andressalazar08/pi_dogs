const { Router } = require('express');
const router = Router();

const { allData } = require('../controllers/controllerapi');
const { Temperament } = require('../db');

router.get('/', async(req,res)=>{
    try{
        const datos = await allData();
        // construyo un array con un gran conjunto de los temperamentos que en la api vienen como string
        //ejemplo "temperament":"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        const temperamentSet = [
            ...new Set(
                datos.map(j=>j.temperament).join().split(',').sort()
            )
        ]

        //recorro el array construido
        for(let i=1; i<temperamentSet.length;i++){
            const elemento = temperamentSet[i].replace(" ", "")//ajusto espacios en blanco

            //encuentro o creo en la bd los temperamentos
            Temperament.findOrCreate({
                where:{
                    name:elemento
                }
            })
        }
        //SELECT * FROM Temperament;
        const temperamentsAll = await Temperament.findAll();
        res.send(temperamentsAll);

    }catch(error){
        console.log(error);
    }



})





module.exports = router;