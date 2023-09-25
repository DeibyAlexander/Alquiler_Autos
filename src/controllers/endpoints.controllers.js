import Alquiler from "../models/Alquiler.js"
import Cliente from "../models/Cliente.js";
import Reserva from "../models/Reserva.js"
import Empleado from "../models/Empleado.js";
import Automovil from "../models/Automovil.js";
import Sucursal_Automovil from "../models/Sucursal_Automovil.js"



const endPoint1 = async (req,res)=>{
    try {
        const endpoint = await Cliente.find()
        res.json(endpoint)

    } catch (error) {
        console.log(error);   
    }

}

const endPoint2 = async (req,res)=>{
    try {
        const endpoint = await Alquiler.find()
        res.json(endpoint)

    } catch (error) {
        console.log(error);   
    }

}

const endPoint3 = async (req,res)=>{
    try {
        const endpoint = await Alquiler.aggregate([
            {
                $match:{Estado:"Activo"}
            }
        ])
        res.json(endpoint)

    } catch (error) {
        console.log(error);   
    }

}

const endPoint4 = async (req,res)=>{
    try {
        const endpoint = await Reserva.aggregate([
            {
                $match:{Estado:"Pendiente"}
            },
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
            }
        ])
        res.json(endpoint)

    } catch (error) {
        console.log(error);   
    }

}

const endPoint5 = async (req,res)=>{

    const id = req.params.id
    try {
        const endpoint = await Alquiler.find({"id_alquiler":id})
        res.json(endpoint)

    } catch (error) {
        console.log(error);   
    }

}




const endPoint6 = async (req,res)=>{
    try {
        const endpoint = await Empleado.aggregate([
            {
                $match:{Cargo:"Vendedor"}
            }
        ])
        res.json(endpoint)

    } catch (error) {
        console.log(error);   
    }

}


const endPoint7 = async (req,res)=>{
    try {
        const endpoint = await Automovil.countDocuments()
        res.json(`La cantidad de automoviles disponibles son: ${endpoint}`)

    } catch (error) {
        console.log(error);   
    }

}

const endPoint8 = async (req,res)=>{

    const id = req.params.id
    try {
        const endpoint = await Alquiler.find({"id_alquiler":id})
        res.json(endpoint)

    } catch (error) {
        console.log(error);   
    }

}

const endPoint9 = async (req,res)=>{

    const dni = req.params.dni
    try {
        const endpoint = await Cliente.find({"DNI":dni})
        res.json(endpoint)

    } catch (error) {
        console.log(error);   
    }

}

const endPoint10 = async (req,res)=>{

    try {
        const endpoint = await Automovil.find({"Capacidad":{$gt:5}})
        res.json(endpoint)

    } catch (error) {
        console.log(error);   
    }

}


const endPoint11 = async (req,res)=>{

    try {
        const endpoint = await Alquiler.aggregate([
            {
                $match:{Fecha_Inicio: new Date("2023-07-05")}
            }
        ])
        res.json(endpoint)

    } catch (error) {
        console.log(error);   
    }

}


const endPoint12 = async (req,res)=>{

    const id = req.params.id

    try {
        const endpoint = await Reserva.find({id_cliente:id, Estado:"Pendiente"})
        res.json(endpoint)
        console.log(endpoint)

    } catch (error) {
        console.log(error);   
    }

}

const endPoint13 = async (req,res)=>{

    try {
        const endpoint = await Empleado.aggregate([
            {
                $match:{Cargo:{$in:["Gerente","Asistente"]}}
            }
        ])
        res.json(endpoint)
        console.log(endpoint)

    } catch (error) {
        console.log(error);   
    }

}



const endPoint14 = async (req,res)=>{

    try {
        const endpoint = await Cliente.aggregate([
            {
                $lookup:{
                    from:"Alquiler",
                    localField: "id_cliente",
                    foreignField:"id_cliente",
                    as: "Alquileres"
                }
            },
            {
                $unwind: "$Alquileres"
            },
            {
                $match:{"Alquileres":{$exists:true}}
            }
           
        ])
        res.json(endpoint)
        

    } catch (error) {
        console.log(error);   
    }

}

const endPoint15 = async (req,res)=>{

    try {
        const endpoint = await Automovil.aggregate([
            {
               $sort:{
                Marca:1,
                Modelo:1
               }
            },
        
           
        ])
        res.json(endpoint)
        

    } catch (error) {
        console.log(error);   
    }

}

const endPoint16 = async (req,res)=>{

    try {
        const endpoint = await Sucursal_Automovil.aggregate([
            {
                $lookup:{
                    from: "Sucursal",
                    localField: "id_sucursal",
                    foreignField: "id_sucursal",
                    as: "sucursal"
                }
            },
            {
                $unwind: "$sucursal"
            },
            {
                $project:{
                    _id:0,
                    Cantidad_Disponible:1,
                    "sucursal.Nombre":1,
                    "sucursal.Direccion":1
                }
            }
        
           
        ])
        res.json(endpoint)
        

    } catch (error) {
        console.log(error);   
    }

}


const endPoint17 = async (req,res)=>{

    try {
        const endpoint = await Alquiler.countDocuments()
        res.json(`La cantidad total de alquileres registrados son ${endpoint}`)
        

    } catch (error) {
        console.log(error);   
    }

}





export {
    endPoint1,
    endPoint2,
    endPoint3,
    endPoint4,
    endPoint5,
    endPoint6,
    endPoint7, 
    endPoint8,
    endPoint9,
    endPoint10,
    endPoint11,
    endPoint12,
    endPoint13,
    endPoint14,
    endPoint15,
    endPoint16,
    endPoint17
}