import { Router } from "express";

import { endPoint1, endPoint2, endPoint3, endPoint4 } from "../controllers/endpoints.controllers.js";


const router = Router();

router.get("/endpoint1", endPoint1)

router.get("/endpoint2", endPoint2)

router.get("/endpoint3", endPoint3)

router.get("/endpoint4", endPoint4)

export default router;

