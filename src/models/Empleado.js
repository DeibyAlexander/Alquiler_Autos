import {Schema, model} from "mongoose";


const empleadoSchema = Schema({

    id_empleado:{
        type:Number,
        required: [true,'id_empleado is required']

    },
    Nombre:{
        type:String,
        required: [true,'Nombre is required']
    
    },      
    Apellido:{
        type:String,
        required: [true,'Apellido is required']
        

    },       
  
 
    DNI:{
        type:String,
        required: [true,'DNI is required']

    },
    Direccion:{
        type:String,
        required: [true,'Direccion is required']
        

    },
    Telefono:{
        type:Number,
        required: [true,'Telefono is required']
    },    

    Cargo:{
        type:String,
        required: [true,'Cargo is required']
    }


})


const Empleado = model("Empleado", empleadoSchema, "Empleado")

export default Empleado;