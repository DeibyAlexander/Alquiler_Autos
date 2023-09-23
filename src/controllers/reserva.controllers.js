import Reserva from "../models/Reserva.js";


const getReserva = async(req,res)=>{
    try {
        const reserva = await Reserva.aggregate([
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
            },
            {
                $lookup:{
                    from:"Automovil",
                    localField: "id_automovil",
                    foreignField: "id_automovil",
                    as: "id_automovil"
                }
            },
            {
                $unwind: "$id_automovil"
            }
        ])
        res.json(reserva)
    } catch (error) {
        console.log(error);   
    }
}

const postReserva = async (req,res)=>{

    const {id_reserva, id_cliente, id_automovil, Fecha_Reserva,Fecha_Inicio,Fecha_Fin,Estado} = req.body;
    const reserva = new Reserva( {id_reserva, id_cliente, id_automovil, Fecha_Reserva,Fecha_Inicio,Fecha_Fin,Estado});


    await reserva.save();

    res.json({
        "message":"Enviado Correctamente",
        reserva
    })            
}

const deleteReserva = async (req,res)=>{
     
    const id = req.params.id

 
    const reserva = await Reserva.findOneAndDelete({ id_reserva: id });

    res.json(reserva)      
}

const putReserva= async (req,res)=>{

    const id = req.params.id;
    const nuevoDato = req.body;

    const reserva = await Reserva.findOneAndUpdate(
        { id_reserva: id },
        { $set: nuevoDato }, 
        { new: true }
    );


    res.json({
        msg:"Reserva Actualizado",
        Reserva : reserva
    });
      
}

export{
    getReserva,
    postReserva,
    deleteReserva,
    putReserva
}