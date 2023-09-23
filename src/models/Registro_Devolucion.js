import {Schema, model} from "mongoose";


const registroDevolucionesSchema = Schema({

    id_registro:{
        type:Number,
        required: [true,'id_registro is required']

    },
    id_alquiler:{
        type:Number,
        required: [true,'id_alquiler is required']
    
    },      
    id_empleado:{
        type:Number,
        required: [true,'id_empleado is required']
        

    },       
  
 
    Fecha_Devolucion:{
        type:Date,
        required: [true,'Fecha_Devolucion is required']

    },
    Combustible_Devuelto:{
        type:Number,
        required: [true,'Combustible_Devuelto is required']
        

    },
    Kilometraje_Devuelto:{
        type:Number,
        required: [true,'Kilometraje_Devuelto is required']
    },    

    Monto_Adicional:{
        type:Number,
        required: [true,'Monto_Adicional is required']
    }


})


const Registro_Devolucion = model("Registro_Devolucion", registroDevolucionesSchema, "Registro_Devolucion")

export default Registro_Devolucion;