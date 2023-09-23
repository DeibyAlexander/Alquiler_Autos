import { Router } from "express";

import { getAlquiler, postAlquiler, deleteAlquiler, putAlquiler } from "../controllers/alquiler.controllers.js";


const router = Router();

router.get("/getAlquiler",getAlquiler)

router.post("/postAlquiler",postAlquiler)

router.delete("/delAlquiler/:id",deleteAlquiler )

router.put("/putAlquiler/:id",putAlquiler )


export default router;