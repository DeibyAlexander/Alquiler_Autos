import Registro_Entrega from "../models/Registro_Entrega.js";


const getRegistroEnt = async(req,res)=>{
    try {
        const RegistroEnt = await Registro_Entrega.aggregate([
            {
                $lookup:{
                    from:"Alquiler",
                    localField: "id_alquiler",
                    foreignField: "id_alquiler",
                    as: "id_alquiler"
                }
            },
            {
                $unwind: "$id_alquiler"
            },
            {
                $lookup:{
                    from:"Empleado",
                    localField: "id_empleado",
                    foreignField: "id_empleado",
                    as: "id_empleado"
                }
            },
            {
                $unwind: "$id_empleado"
            }
        ])
        res.json(RegistroEnt)
    } catch (error) {
        console.log(error);   
    }
}

const postRegistroEnt = async (req,res)=>{

    const {id_registro, id_alquiler, id_empleado, Fecha_Entrega, Combustible_Entregado, Kilometraje_Entregado} = req.body;
    const RegistroEnt = new Registro_Entrega( {id_registro, id_alquiler, id_empleado, Fecha_Entrega, Combustible_Entregado, Kilometraje_Entregado} );


    await RegistroEnt.save();

    res.json({
        "message":"Enviado Correctamente",
        RegistroEnt
    })            
}

const deleteRegistroEnt = async (req,res)=>{
     
    const id = req.params.id

 
    const RegistroEnt = await Registro_Entrega.findOneAndDelete({ id_registro: id });

    res.json(RegistroEnt)      
}

const putRegistroEnt= async (req,res)=>{

    const id = req.params.id;
    const nuevoDato = req.body;

    const RegistroEnt = await Registro_Entrega.findOneAndUpdate(
        { id_registro: id },
        { $set: nuevoDato }, 
        { new: true }
    );


    res.json({
        msg:"Alquiler Actualizado",
        RegistroEnt : RegistroEnt
    });
      
}

export{
    getRegistroEnt,
    postRegistroEnt,
    deleteRegistroEnt,
    putRegistroEnt
}