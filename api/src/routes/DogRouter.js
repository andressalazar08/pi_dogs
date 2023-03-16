const { Router } = require('express');
const router = Router();

const { apidata } = require('../controllers/controllerapi');

router.get('/', async(req,res)=>{

    const datos = await apidata();

    if(datos){
        res.status(200).send(datos);
    }else{
        res.status(404).send("Error en conexión a la api");
    }

})






module.exports = router;