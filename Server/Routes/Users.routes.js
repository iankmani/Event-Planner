import { Router } from "express";
import { RegisterUser } from "../Controllers/Users.controllers.js";
import { DeleteUser } from "../Controllers/Users.controllers.js";
import { GetAllUsers } from "../Controllers/Users.controllers.js";
const router = Router();

router.post("/register", RegisterUser);
router.delete("/DeleteUser/:id", DeleteUser);
router.get("/GetAllUsers", GetAllUsers);
export default router;
