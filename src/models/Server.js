import express from "express";
import cors from "cors";
import dbConnection from "../config/db.js";


import routerAlquiler from "../routes/alquiler.routes.js";

class Server{
    constructor(){
        this.app =express()
        this.port = process.env.PORT65


        this.alquilerPath = "/API/"


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

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server corriendo en el puerto ${this.port}`);
        })
    }
}

export default Server;