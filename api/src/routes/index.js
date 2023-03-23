const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Dogruta = require('./DogRouter'); // importo la ruta de dogs
const TemperamentRoute = require('./TemperamentRouter'); //importo la ruta de temperamentos


const router = Router();

// Configurar los routers y modularizo
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', Dogruta);
router.use('/temperaments', TemperamentRoute);

module.exports = router;
