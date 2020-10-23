const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController')

const { check } = require('express-validator')

router.post('/', 
    [
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo 6 caracteres').isLength(6),


    ],
    authController.autenticarUsuario
    );

module.exports = router;