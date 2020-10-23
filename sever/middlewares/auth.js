const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    const token = req.header('x-auth-token');
    if(!token){
        return res.status(400).json({msg:"No hay token, permiso invalido"});
    }

    try {
        const cifrado = jwt.verify(token,process.env.SECRET);
        req.usuario = cifrado.usuario;
        next();

    } catch (error) {
        res.status(401).json({msg:"Token invalido"});
    }
}