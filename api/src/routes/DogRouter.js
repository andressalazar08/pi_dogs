const { Router } = require('express');
const router = Router();
//hago destructuring a los datos de bd y api
const { allData } = require('../controllers/controllerapi');

router.get('/', async(req,res)=>{

    let { name } = req.query;

    const datos = await allData();

    if(name){
        //si me envían datos por query
        name = name.toLowerCase();
        //creo un array con los objetos que tienen como propiedad name igual al query
        let nameDog = await datos.filter(doger => doger.name.toLowerCase().includes(name))
        if(nameDog.length>0){
            res.status(200).send(nameDog);
        }else{
            res.status(404).send("Dog passed by query not found");
        }

    }else{
        //si no envían datos por query entrego lo de la bd y lo de la api
        res.status(200).send(datos);
    }

})






module.exports = router;