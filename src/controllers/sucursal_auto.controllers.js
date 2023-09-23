import Sucursal_Automovil from "../models/Sucursal_Automovil.js";


const getsucursalAuto = async(req,res)=>{
    try {
        const sucursalAuto = await Sucursal_Automovil.aggregate([
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
        res.json(sucursalAuto)
    } catch (error) {
        console.log(error);   
    }
}

const postsucursalAuto = async (req,res)=>{

    const {id_sucursal,id_automovil, Cantidad_Disponible} = req.body;
    const sucursalAuto = new Sucursal_Automovil( {id_sucursal,id_automovil, Cantidad_Disponible});


    await sucursalAuto.save();

    res.json({
        "message":"Enviado Correctamente",
        sucursalAuto
    })            
}

const deletesucursalAuto = async (req,res)=>{
     
    const id = req.params.id

 
    const sucursalAuto = await Sucursal_Automovil.findOneAndDelete({ id_sucursal: id });

    res.json(sucursalAuto)      
}

const putsucursalAuto= async (req,res)=>{

    const id = req.params.id;
    const nuevoDato = req.body;

    const sucursalAuto = await Sucursal_Automovil.findOneAndUpdate(
        { id_sucursal: id },
        { $set: nuevoDato }, 
        { new: true }
    );


    res.json({
        msg:"Sucursal_Automovil Actualizado",
        Sucursal_Automovil : sucursalAuto
    });
      
}

export{
    getsucursalAuto,
    postsucursalAuto,
    deletesucursalAuto,
    putsucursalAuto
}