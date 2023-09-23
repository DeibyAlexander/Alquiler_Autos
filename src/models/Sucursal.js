import {Schema, model} from "mongoose";


const sucursalSchema = Schema({

    id_sucursal:{
        type:Number,
        required: [true,'id_sucursal is required']

    },
    Nombre:{
        type:String,
        required: [true,'Nombre is required']
    
    },      
    Direccion:{
        type:String,
        required: [true,'Direccion is required']
        

    },       
  
 
    Telefono:{
        type:Number,
        required: [true,'Telefono is required']

    }
})


const Sucursal = model("Sucursal", sucursalSchema, "Sucursal")

export default Sucursal;