import { Router } from "express";

import { getRegistroDev, postRegistroDev, deleteRegistroDev, putRegistroDev } from "../controllers/registro_dev.controllers.js";


const router = Router();

router.get("/getRegistroDev",getRegistroDev)

router.post("/postRegistroDev",postRegistroDev)

router.delete("/delRegistroDev/:id",deleteRegistroDev )

router.put("/putRegistroDev/:id",putRegistroDev )


export default router;