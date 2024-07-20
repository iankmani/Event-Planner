import { Router } from "express";
import { LoginUser } from "../Controllers/Login.controllers.js";

const router = Router();

router.post("/login", LoginUser);

export default router;
