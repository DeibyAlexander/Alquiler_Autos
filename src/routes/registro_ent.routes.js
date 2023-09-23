import { Router } from "express";

import { getRegistroEnt, postRegistroEnt, deleteRegistroEnt, putRegistroEnt } from "../controllers/registro_ent.controllers.js";


const router = Router();

router.get("/getRegistroEnt",getRegistroEnt)

router.post("/postRegistroEnt",postRegistroEnt)

router.delete("/delRegistroEnt/:id",deleteRegistroEnt )

router.put("/putRegistroEnt/:id",putRegistroEnt )


export default router;