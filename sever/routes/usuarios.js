const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosController')

const { check } = require('express-validator')

router.post('/',
    [
        check('nombre', 'el nombre no puede estar vacio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo 6 caracteres').isLength(6),


    ],

    usuariosController.crearUsuario
);

module.exports = router;