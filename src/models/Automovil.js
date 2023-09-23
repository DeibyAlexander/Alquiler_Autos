import {Schema, model} from "mongoose";


const automovilSchema = Schema({

    id_automovil:{
        type:Number,
        required: [true,'id_automovil is required']

    },
    Marca:{
        type:String,
        required: [true,'Marca is required']
    
    },      
    Modelo:{
        type:String,
        required: [true,'Modelo is required']
        

    },       
  
 
    Año:{
        type:Number,
        required: [true,'Año is required']

    },
    Tipo:{
        type:String,
        required: [true,'Tipo is required']
        

    },
    Capacidad:{
        type:Number,
        required: [true,'Capacidad is required']
    },    

    Precio_Diario:{
        type:Number,
        required: [true,'Precio_Diario is required']
    }


})


const Automovil = model("Automovil", automovilSchema, "Automovil")

export default Automovil;