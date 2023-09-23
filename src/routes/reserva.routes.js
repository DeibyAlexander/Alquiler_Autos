import { Router } from "express";

import { getReserva, postReserva, deleteReserva, putReserva } from "../controllers/reserva.controllers.js";


const router = Router();

router.get("/getReserva",getReserva)

router.post("/postReserva",postReserva)

router.delete("/delReserva/:id",deleteReserva )

router.put("/putReserva/:id",putReserva )


export default router;