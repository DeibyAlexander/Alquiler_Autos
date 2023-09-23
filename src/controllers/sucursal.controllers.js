import Sucursal from "../models/Sucursal.js";


const getSucursal = async(req,res)=>{
    try {
        const sucursal = await Sucursal.find()
        res.json(sucursal)
    } catch (error) {
        console.log(error);   
    }
}

const postSucursal = async (req,res)=>{

    const {id_sucursal, Nombre, Direccion, Telefono} = req.body;
    const sucursal = new Sucursal( {id_sucursal, Nombre, Direccion, Telefono});


    await sucursal.save();

    res.json({
        "message":"Enviado Correctamente",
        sucursal
    })            
}

const deleteSucursal = async (req,res)=>{
     
    const id = req.params.id

 
    const sucursal = await Sucursal.findOneAndDelete({ id_sucursal: id });

    res.json(sucursal)      
}

const putSucursal= async (req,res)=>{

    const id = req.params.id;
    const nuevoDato = req.body;

    const sucursal = await Sucursal.findOneAndUpdate(
        { id_sucursal: id },
        { $set: nuevoDato }, 
        { new: true }
    );


    res.json({
        msg:"Sucursal Actualizado",
        Sucursal : sucursal
    });
      
}

export{
    getSucursal,
    postSucursal,
    deleteSucursal,
    putSucursal
}