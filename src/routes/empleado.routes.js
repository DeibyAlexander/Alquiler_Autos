import { Router } from "express";

import { getEmpleado, postEmpleado, deleteEmpleado, putEmpleado } from "../controllers/empleado.controllers.js";


const router = Router();

router.get("/getEmpleado",getEmpleado)

router.post("/postEmpleado",postEmpleado)

router.delete("/delEmpleado/:id",deleteEmpleado )

router.put("/putEmpleado/:id",putEmpleado )


export default router;