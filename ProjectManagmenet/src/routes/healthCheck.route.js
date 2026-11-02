import { Router } from "express";   
import { healthCheck } from "../controller/healthCheckcontroller.js";


const router = Router();

router.route("/").get(healthCheck)


export default router;