const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const proyectosController = require('../controllers/proyectosController')

const { check } = require('express-validator')

router.post('/', 
    auth,
    [
        check('nombre', 'el nombre no puede estar vacio').not().isEmpty()
    ],
    proyectosController.crearProyecto
);

router.get('/',
    auth,
    proyectosController.obtenerProyectos
);

router.put('/:id', 
    auth,
    [
        check('nombre', 'el nombre no puede estar vacio').not().isEmpty()
    ],
    proyectosController.actualizarProyecto
);

router.delete('/:id',
    auth,
    proyectosController.eliminarProyecto
);




module.exports = router;
