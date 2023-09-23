import { Router } from "express";

import { getsucursalAuto, postsucursalAuto, deletesucursalAuto, putsucursalAuto } from "../controllers/sucursal_auto.controllers.js";


const router = Router();

router.get("/getSucursalAuto",getsucursalAuto)

router.post("/postSucursalAuto",postsucursalAuto)

router.delete("/delSucursalAuto/:id",deletesucursalAuto )

router.put("/putSucursalAuto/:id",putsucursalAuto )


export default router;