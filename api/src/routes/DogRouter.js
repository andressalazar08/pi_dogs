const { Router } = require('express');
const router = Router();
//hago destructuring a los datos de bd y api
const { allData } = require('../controllers/controllerapi');
const { Dog, Temperament } = require('../db')


//Esta ruta administra si se hace una petición por query o a la ruta en general
router.get('/', async(req,res)=>{

    let { name } = req.query;

    const datos = await allData(); //llamamos a la función que obtiene los datos

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


//esta ruta adminstra si se hace un get by id
router.get('/:id', async(req, res)=>{

    let { id } = req.params;
    const datos = await allData();

    //compruebo si el id coincide
    let idDog = await datos.filter(doger => doger.id === id);

    //si se encuentra el id, se responde con status 200
    if(idDog){
        res.status(200).send(idDog);
    }else{
        res.status(404).send("Dog passed by params not found");
    }



})


//esta ruta administra el post y guarda en la bd

/*post de ejemplo
{
  "name":"Dog test1",
  "min_height": 10,
  "min_weight": 10,
  "max_height":20,
  "max_weight":30,
  "temperament":"easy",
  "life_span":"15 years",
  "image":"https://cdn2.thedogapi.com/images/BJa4kx25X.jpg"
}

*/

router.post('/', async(req, res)=>{
    //hago destructuring de las variables que llegan por body
    let {
        name,
        min_height,
        min_weight,
        max_height,
        max_weight,
        temperament,
        life_span,
        image
    } = req.body;

    name = name.toLowerCase();//redefino la variable name

    //hago un try para verificar si la bd incluye el nuevo objeto pasado por body
    //SELECT * FROM Dogs WHERE name=name  -->el dato del objeto

    try{
        let dogFound = await Dog.findAll({
            where:{
                name:name
            }
        })
        // console.log(dogFound);
        //si el resultado del SELECT es favorable, no inserto un nuevo perro a la bd
        if(dogFound.length>0){
            res.status(403).send("Dog already exist, could not be created")
        }else{
            let newDog = await Dog.create({
                name,
                min_height,
                min_weight,
                max_height,
                max_weight,
                temperament,
                life_span,
                image
            });

            //Busco en la tabla de temperaments
            //SELECT * FROM Temperaments WHERE name= temperament -->el dato del objeto
            let temperamentDog = await Temperament.findAll({
                where:{
                    name:temperament
                }
            });

            //a la tabla Dog le añado el temperamento con add<Table>
            newDog.addTemperament(temperamentDog);
            res.send('New doggie and temperament created at DB')
        }
    }catch(error){
        console.log(error)
    }


})




module.exports = router;