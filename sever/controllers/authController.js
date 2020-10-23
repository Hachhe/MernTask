const Usuario = require("../models/Usuario");
const bcryptjs = require('bcryptjs');
const {validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res)=>{
    const errores = validationResult(req);
    //revisar errores
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()});
    }
    const {email, password} = req.body;

    try {
        let usuario = Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({msg:"Usuario no existe, registrate"});
        }

        const passCorrecta = bcryptjs.compare(password, usuario.password);

        if(!passCorrecta){
            return res.status(400).json({msg:"Contraseña incorrecta"});
        }

        const payload = {
            usuario:{
                id : usuario.id
            }
        }
        //autenticacion jwt

        jwt.sign(payload,process.env.SECRET,{
            expiresIn:3600
        }, (error,token) =>{
            if(error) throw error;
             res.json({token})
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Hubo un error"});
    }
}