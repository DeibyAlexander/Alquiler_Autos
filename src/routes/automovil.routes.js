import { Router } from "express";

import { getAutomovil, postAutomovil, deleteAutomovil, putAutomovil } from "../controllers/automovil.controllers.js";


const router = Router();

router.get("/getAutomovil",getAutomovil)

router.post("/postAutomovil",postAutomovil)

router.delete("/delAutomovil/:id",deleteAutomovil )

router.put("/putAutomovil/:id",putAutomovil )


export default router;