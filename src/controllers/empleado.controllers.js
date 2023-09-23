
import Empleado from "../models/Empleado.js";


const getEmpleado = async(req,res)=>{
    try {
        const empleado = await Empleado.find()
        res.json(empleado)
    } catch (error) {
        console.log(error);   
    }
}

const postEmpleado = async (req,res)=>{

    const {id_empleado, Nombre, Apellido, DNI,Direccion,Telefono
        ,Cargo} = req.body;
    const empleado = new Empleado( {id_empleado, Nombre, Apellido, DNI,Direccion,Telefono
        ,Cargo});


    await empleado.save();

    res.json({
        "message":"Enviado Correctamente",
        empleado
    })            
}

const deleteEmpleado = async (req,res)=>{
     
    const id = req.params.id

 
    const empleado = await Empleado.findOneAndDelete({ id_empleado: id });

    res.json(empleado)      
}

const putEmpleado= async (req,res)=>{

    const id = req.params.id;
    const nuevoDato = req.body;

    const empleado = await Empleado.findOneAndUpdate(
        { id_empleado: id },
        { $set: nuevoDato }, 
        { new: true }
    );


    res.json({
        msg:"Alquiler Actualizado",
        Empleado : empleado
    });
      
}

export{
    getEmpleado,
    postEmpleado,
    deleteEmpleado,
    putEmpleado
}