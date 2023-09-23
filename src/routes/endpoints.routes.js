import { Router } from "express";

import { endPoint1, endPoint2, endPoint3, endPoint4, endPoint5, endPoint6, endPoint7, endPoint8, endPoint9 } from "../controllers/endpoints.controllers.js";


const router = Router();

router.get("/endpoint1", endPoint1)

router.get("/endpoint2", endPoint2)

router.get("/endpoint3", endPoint3)

router.get("/endpoint4", endPoint4)

router.get("/endpoint5/:id", endPoint5)

router.get("/endpoint6", endPoint6)

router.get("/endpoint7", endPoint7)

router.get("/endpoint8/:id", endPoint8)

router.get("/endpoint9/:dni", endPoint9)

export default router;

