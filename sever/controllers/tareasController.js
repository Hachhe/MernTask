const Tarea = require ('../models/Tarea');
const Proyecto = require ('../models/Proyecto');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearTarea = async (req, res) => {

    const errores = validationResult(req);

    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()});
    }
    try {
        const {proyecto} = req.body;
        const Existeproyecto = await Proyecto.findById(proyecto);

        if(!Existeproyecto){
           return  res.status(404).json({msg:"Proyecto no encontrado"});
        }

        if(Existeproyecto.creador.toString() !== req.usuario.id){
            return  res.status(401).json({msg:"No autorizado"});
        }

        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json({ tarea });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Hubo un error"});
    }


};

exports.actualizarTarea = async (req,res)=>{
    try {
        const {proyecto, nombre, estado} = req.body;

        let tarea = await Tarea.findById(req.params.id);

        if(!tarea){
            return  res.status(401).json({msg:"Tarea no existe"});
        }

        const Existeproyecto = await Proyecto.findById(proyecto);

        if(Existeproyecto.creador.toString() !== req.usuario.id){
            return  res.status(401).json({msg:"No autorizado"});
        }

        const nuevaTarea = {};

        if(nombre) nuevaTarea.nombre = nombre;
        if(estado) nuevaTarea.estado = estado;

        tarea = await Tarea.findOneAndUpdate({_id : req.params.id}, nuevaTarea, {new:true});
        res.json({tarea});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Hubo un error"});
        
    }

};

exports.eliminarTarea = async(req,res)=>{
    try {
        const {proyecto} = req.body;

        let tarea = await Tarea.findById(req.params.id);

        if(!tarea){
            return  res.status(401).json({msg:"Tarea no existe"});
        }

        const Existeproyecto = await Proyecto.findById(proyecto);

        if(Existeproyecto.creador.toString() !== req.usuario.id){
            return  res.status(401).json({msg:"No autorizado"});
        }

        tarea = await Tarea.findOneAndRemove({_id : req.params.id});

        res.json({msg: 'Tarea Eliminada'});

    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Hubo un error"});
    }


}

exports.obtenerTareas = async(req,res)=>{
    try {
        const {proyecto} = req.body;
        const Existeproyecto = await Proyecto.findById(proyecto);

        if(!Existeproyecto){
           return  res.status(404).json({msg:"Proyecto no encontrado"});
        }

        if(Existeproyecto.creador.toString() !== req.usuario.id){
            return  res.status(401).json({msg:"No autorizado"});
        }

        const tareas = await Tarea.find({ proyecto });
        res.json({tareas});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Hubo un error"});
        
    }


}

