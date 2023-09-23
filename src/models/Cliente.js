import {Schema, model} from "mongoose";


const clienteSchema = Schema({

    id_cliente:{
        type:Number,
        required: [true,'id_cliente is required'],
        unique:true

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

    Email:{
        type:String,
        required: [true,'Precio_Diario is required']
    }


})


const Cliente = model("Cliente", clienteSchema, "Cliente")

export default Cliente;