import { Router } from "express";

import { getCliente, postCliente, deleteCliente, putCliente } from "../controllers/cliente.controllers.js";


const router = Router();

router.get("/getCliente",getCliente)

router.post("/postCliente",postCliente)

router.delete("/delCliente/:id",deleteCliente )

router.put("/putCliente/:id",putCliente )


export default router;