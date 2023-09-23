import Registro_Devolucion from "../models/Registro_Devolucion.js";


const getRegistroDev= async(req,res)=>{
    try {
        const RegistroDev = await Registro_Devolucion.aggregate([
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
        res.json(RegistroDev)
    } catch (error) {
        console.log(error);   
    }
}

const postRegistroDev = async (req,res)=>{

    const {id_registro, id_alquiler, id_empleado, Fecha_Devolucion,Combustible_Devuelto,Kilometraje_Devuelto ,Monto_Adicional} = req.body;
    const RegistroDev = new Registro_Devolucion( {id_registro, id_alquiler, id_empleado, Fecha_Devolucion,Combustible_Devuelto,Kilometraje_Devuelto ,Monto_Adicional} );


    await RegistroDev.save();

    res.json({
        "message":"Enviado Correctamente",
        RegistroDev
    })            
}

const deleteRegistroDev = async (req,res)=>{
     
    const id = req.params.id

 
    const RegistroDev = await Registro_Devolucion.findOneAndDelete({ id_registro: id });

    res.json(RegistroDev)      
}

const putRegistroDev= async (req,res)=>{

    const id = req.params.id;
    const nuevoDato = req.body;

    const RegistroDev = await Registro_Devolucion.findOneAndUpdate(
        { id_registro: id },
        { $set: nuevoDato }, 
        { new: true }
    );


    res.json({
        msg:"Registro_Devolucion Actualizado",
        Registro_Devolucion : RegistroDev
    });
      
}

export{
    getRegistroDev,
    postRegistroDev,
    deleteRegistroDev,
    putRegistroDev
}