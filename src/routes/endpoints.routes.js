import { Router } from "express";

import { endPoint1, endPoint10, endPoint11, endPoint12, endPoint13, endPoint14, endPoint15, endPoint16, endPoint17, endPoint2, endPoint3, endPoint4, endPoint5, endPoint6, endPoint7, endPoint8, endPoint9 } from "../controllers/endpoints.controllers.js";


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

router.get("/endpoint10", endPoint10)

router.get("/endpoint11", endPoint11)

router.get("/endpoint12/:id", endPoint12)

router.get("/endpoint13", endPoint13)

router.get("/endpoint14", endPoint14)

router.get("/endpoint15", endPoint15)

router.get("/endpoint16", endPoint16)


router.get("/endpoint17", endPoint17)

export default router;

