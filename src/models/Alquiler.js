import {Schema, model} from "mongoose";


const alquilerSchema = Schema({

    id_alquiler:{
        type:Number,
        required: [true,'id_alquiler is required']

    },
    id_cliente:{
        type:Number,
        required: [true,'id_cliente is required']
        

    },      
    id_automovil:{
        type:Number,
        required: [true,'id_automovil is required']
        

    },       
  
 
    Fecha_Inicio:{
        type:Date,
        required: [true,'Fecha_Inicio is required']

    },
    Fecha_Fin:{
        type:Date,
        required: [true,'Fecha_Fin is required']
        

    },
    Costo_Total:{
        type:Number,
        required: [true,'Costo_Total is required']
    },  

    Estado:{
        type:String,
        required: [true,'Estado is required']
    }    


})


const Alquiler = model("Alquiler", alquilerSchema, "Alquiler")

export default Alquiler;