import {Schema, model} from "mongoose";


const registroEntregaSchema = Schema({

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
  
 
    Fecha_Entrega:{
        type:Date,
        required: [true,'Fecha_Entrega is required']

    },
    Combustible_Entregado:{
        type:Number,
        required: [true,'Combustible_Entregado is required']
        

    },
    Kilometraje_Entregado:{
        type:Number,
        required: [true,'Kilometraje_Entregado is required']
    }

})


const Registro_Entrega = model("Registro_Entrega", registroEntregaSchema, "Registro_Entrega")

export default Registro_Entrega;