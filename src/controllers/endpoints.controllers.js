import Alquiler from "../models/Alquiler.js"
import Cliente from "../models/Cliente.js";
import Reserva from "../models/Reserva.js"



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



export {
    endPoint1,
    endPoint2,
    endPoint3,
    endPoint4,
    endPoint5
}