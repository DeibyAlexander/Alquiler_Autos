import {Schema, model} from "mongoose";


const sucursalAutomovilSchema = Schema({

    id_sucursal:{
        type:Number,
        required: [true,'id_sucursal is required']

    },
    id_automovil:{
        type:Number,
        required: [true,'id_automovil is required']
    
    },      
    Cantidad_Disponible:{
        type:Number,
        required: [true,'Cantidad_Disponible is required']
        

    }
})


const Sucursal_Automovil = model("Sucursal_Automovil", sucursalAutomovilSchema, "Sucursal_Automovil")

export default Sucursal_Automovil;