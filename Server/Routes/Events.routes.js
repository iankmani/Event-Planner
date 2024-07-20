import { Router } from "express";
import { CreateNewEvent } from "../Controllers/Events.controllers.js";
import { GetAllEvents } from "../Controllers/Events.controllers.js";

const router = Router();

router.post("/CreateEvent", CreateNewEvent);
router.get("/GetAllEvents", GetAllEvents);

export default router;
