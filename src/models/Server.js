import express from "express";
import cors from "cors";
import dbConnection from "../config/db.js";


import routerAlquiler from "../routes/alquiler.routes.js";
import routerAutomovil from "../routes/automovil.routes.js";
import routerCliente from "../routes/cliente.routes.js";
import routerEmpleado from "../routes/empleado.routes.js";
import routerRegistroDev from "../routes/registro_dev.routes.js";
import routerRegistroEnt from "../routes/registro_ent.routes.js";
import routerReserva from "../routes/reserva.routes.js";
import routerSucursalAuto from "../routes/sucursal_auto.routes.js";
import routerSucursal from "../routes/sucursal.routes.js";

class Server{
    constructor(){
        this.app =express()
        this.port = process.env.PORT65


        this.alquilerPath = "/API/"
        this.automovilPath = "/API/"
        this.clientePath = "/API/"
        this.empleadoPath = "/API/"
        this.RegistroDevPath = "/API/"
        this.RegistroEntPath = "/API/"
        this.reservaPath = "/API/"
        this.sucursalAutoPath = "/API/"
        this.sucursalPath = "/API/"


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
        this.app.use(this.RegistroDevPath, routerRegistroDev)
        this.app.use(this.RegistroEntPath, routerRegistroEnt)
        this.app.use(this.reservaPath, routerReserva)
        this.app.use(this.sucursalAutoPath, routerSucursalAuto)
        this.app.use(this.sucursalPath, routerSucursal)

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server corriendo en el puerto ${this.port}`);
        })
    }
}

export default Server;