import express from "express";
import cors from "cors";
import dbConnection from "../config/db.js";


import routerAlquiler from "../routes/alquiler.routes.js";
import routerAutomovil from "../routes/automovil.routes.js";
import routerCliente from "../routes/cliente.routes.js";
import routerEmpleado from "../routes/empleado.routes.js";

class Server{
    constructor(){
        this.app =express()
        this.port = process.env.PORT65


        this.alquilerPath = "/API/"
        this.automovilPath = "/API/"
        this.clientePath = "/API/"
        this.empleadoPath = "/API/"


         //! Conexion para la base de datos
         this.ConectarDB()

         //!Middleware
         this.middlewares()

         //!Routing
         this.routes()


    }

    async ConectarDB(){
        await dbConnection()
    }

    middlewares(){
        //!Cors
        this.app.use(cors())

        //! Public Director
        this.app.use(express.static('public'))

        //!Express Json
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.alquilerPath, routerAlquiler)
        this.app.use(this.automovilPath, routerAutomovil)
        this.app.use(this.clientePath, routerCliente)
        this.app.use(this.empleadoPath, routerEmpleado)

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server corriendo en el puerto ${this.port}`);
        })
    }
}

export default Server;