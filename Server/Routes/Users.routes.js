import { Router } from "express";
import { RegisterUser } from "../Controllers/Users.controllers.js";
const router = Router();

router.post("/register", RegisterUser);
export default router;
