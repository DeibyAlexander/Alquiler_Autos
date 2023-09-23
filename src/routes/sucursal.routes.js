import { Router } from "express";

import { getSucursal, postSucursal, deleteSucursal, putSucursal } from "../controllers/sucursal.controllers.js";


const router = Router();

router.get("/getSucursal",getSucursal)

router.post("/postSucursal",postSucursal)

router.delete("/delSucursal/:id",deleteSucursal )

router.put("/putSucursal/:id",putSucursal )


export default router;