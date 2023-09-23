import Alquiler from "../models/Alquiler.js"
import Cliente from "../models/Cliente.js";
import Reserva from "../models/Reserva.js"
import Empleado from "../models/Empleado.js";
import Automovil from "../models/Automovil.js";



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





export {
    endPoint1,
    endPoint2,
    endPoint3,
    endPoint4,
    endPoint5,
    endPoint6,
    endPoint7, 
    endPoint8,
    endPoint9
}