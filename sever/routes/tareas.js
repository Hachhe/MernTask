const express = require('express');

const router = express.Router();

const tareasController = require('../controllers/tareasController');

const {check} = require('express-validator')

const auth = require('../middlewares/auth')

router.post('/', ()=>{
    auth,
    [
        check('nombre', 'el nombre no puede estar vacio').not().isEmpty()
    ],

    tareasController.crearTarea();
});

router.get('/',
    auth,
    tareasController.obtenerTareas
);

router.put('/',
    auth,
    tareasController.actualizarTarea
);

router.delete('/id', 
    auth,
    tareasController.eliminarTarea
);


module.exports = router;