import Cliente from "../models/Cliente.js";


const getCliente = async(req,res)=>{
    try {
        const cliente = await Cliente.find()
        res.json(cliente)
    } catch (error) {
        console.log(error);   
    }
}

const postCliente = async (req,res)=>{

    const {id_cliente, Nombre, Apellido, DNI,Direccion,Telefono,Email} = req.body;
    const cliente = new Cliente( {id_cliente, Nombre, Apellido, DNI,Direccion,Telefono,Email});


    await cliente.save();

    res.json({
        "message":"Enviado Correctamente",
        cliente
    })            
}

const deleteCliente = async (req,res)=>{
     
    const id = req.params.id

 
    const cliente = await Cliente.findOneAndDelete({ id_cliente: id });

    res.json(cliente)      
}

const putCliente= async (req,res)=>{

    const id = req.params.id;
    const nuevoDato = req.body;

    const cliente = await Cliente.findOneAndUpdate(
        { id_cliente: id },
        { $set: nuevoDato }, 
        { new: true }
    );


    res.json({
        msg:"Alquiler Actualizado",
        Cliente : cliente
    });
      
}

export{
    getCliente,
    postCliente,
    deleteCliente,
    putCliente
}