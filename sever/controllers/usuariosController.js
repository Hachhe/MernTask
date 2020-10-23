const Usuario = require("../models/Usuario");
const bcryptjs = require('bcryptjs');
const {validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res)=>{
    const errores = validationResult(req);
    //revisar errores
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()});
    }
    //extraer datos
    const {email, password} = req.body;
    //trycatch
        try {
            let usuario= await Usuario.findOne({email});
            if(usuario){
                return res.status(400).json({msg:"Usuario ya existe"});
            }
            //instancia
            usuario = new Usuario(req.body);

            //hashear password
            const salt = await bcryptjs.genSalt(10);
            usuario.password = await bcryptjs.hash(password, salt)

            //guadar usuario
            await usuario.save();
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

            //enviar
            res.send('usuario creado correctamente')
        } catch (error) {
            console.log(error);
            res.status(400).json({msg:"Hubo un error"});
        }
}