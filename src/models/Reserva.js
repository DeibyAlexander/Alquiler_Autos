import {Schema, model} from "mongoose";


const reservaSchema = Schema({

    id_reserva:{
        type:Number,
        required: [true,'id_reserva is required']

    },
    id_cliente:{
        type:Number,
        required: [true,'id_cliente is required']
    
    },      
    id_automovil:{
        type:Number,
        required: [true,'id_automovil is required']
        

    },       
  
 
    Fecha_Reserva:{
        type:Date,
        required: [true,'Fecha_Reserva is required']

    },
    Fecha_Inicio:{
        type:Date,
        required: [true,'Fecha_Inicio is required']
        

    },
    Fecha_Fin:{
        type:Date,
        required: [true,'Fecha_Fin is required']
    },
    Estado:{
        type:String,
        required: [true,'Estado is required']
    }


})


const Reserva = model("Reserva", reservaSchema, "Reserva")

export default Reserva;