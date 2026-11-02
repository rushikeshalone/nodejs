import { Router } from "express";
import Test from "../controller/Testcontroller.js";
const router = Router();

router.route("/").get(Test)

export default router;