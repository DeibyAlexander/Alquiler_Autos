import Automovil from "../models/Automovil.js";


const getAutomovil = async(req,res)=>{
    try {
        const automovil = await Automovil.find()
        res.json(automovil)
    } catch (error) {
        console.log(error);   
    }
}

const postAutomovil = async (req,res)=>{

    const {id_automovil, Marca,Modelo,Año,Tipo, Capacidad, Precio_Diario} = req.body;
    const automovil = new Automovil( {id_automovil, Marca, Modelo, Año,Tipo,Capacidad,Precio_Diario});


    await automovil.save();

    res.json({
        "message":"Enviado Correctamente",
        automovil
    })            
}

const deleteAutomovil = async (req,res)=>{
     
    const id = req.params.id

 
    const automovil = await Automovil.findOneAndDelete({ id_automovil: id });

    res.json(automovil)      
}

const putAutomovil= async (req,res)=>{

    const id = req.params.id;
    const nuevoDato = req.body;

    const automovil = await Automovil.findOneAndUpdate(
        { id_automovil: id },
        { $set: nuevoDato }, 
        { new: true }
    );


    res.json({
        msg:"Automovil Actualizado",
        Automovil : automovil
    });
      
}

export{
    getAutomovil,
    postAutomovil,
    deleteAutomovil,
    putAutomovil
}