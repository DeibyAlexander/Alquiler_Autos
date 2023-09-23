import Alquiler from "../models/Alquiler.js";


const getAlquiler = async(req,res)=>{
    try {
        const alquiler = await Alquiler.aggregate([
            {
                $lookup:{
                    from:"Cliente",
                    localField: "id_cliente",
                    foreignField: "id_cliente",
                    as: "id_cliente"
                }
            },
            {
                $unwind: "$id_cliente"
            },
            {
                $lookup:{
                    from:"Automovil",
                    localField: "id_automovil",
                    foreignField: "id_automovil",
                    as: "id_automovil"
                }
            },
            {
                $unwind: "$id_automovil"
            }
        ])
        res.json(alquiler)
    } catch (error) {
        console.log(error);   
    }
}

const postAlquiler = async (req,res)=>{

    const {id_alquiler, id_cliente, id_automovil, Fecha_Inicio,Fecha_Fin,Costo_Total,Estado} = req.body;
    const alquiler = new Alquiler( {id_alquiler, id_cliente, id_automovil, Fecha_Inicio,Fecha_Fin,Costo_Total,Estado});


    await alquiler.save();

    res.json({
        "message":"Enviado Correctamente",
        alquiler
    })            
}

const deleteAlquiler = async (req,res)=>{
     
    const id = req.params.id

 
    const alquiler = await Alquiler.findOneAndDelete({ id_alquiler: id });

    res.json(alquiler)      
}

const putAlquiler= async (req,res)=>{

    const id = req.params.id;
    const nuevoDato = req.body;

    const alquiler = await Alquiler.findOneAndUpdate(
        { id_alquiler: id },
        { $set: nuevoDato }, 
        { new: true }
    );


    res.json({
        msg:"Alquiler Actualizado",
        Alquiler : alquiler
    });
      
}

export{
    getAlquiler,
    postAlquiler,
    deleteAlquiler,
    putAlquiler
}