const { Router } = require('express');
const router = Router();

const { apidata } = require('../controllers/controllerapi');


router.get('/', async(req,res)=>{


    res.status(200).send("Salida de temperamentos");


})





module.exports = router;