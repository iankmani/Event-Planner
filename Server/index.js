import express from "express";
import { config } from "dotenv";
import cors from "cors";
import Usersrouter from "./Routes/Users.routes.js";
import LoginRouter from "./Routes/Login.routes.js";
import EventsRouter from "./Routes/Events.routes.js";
import cookieParser from "cookie-parser";
config();

const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PATCH", "DELETE"],
    credentials: true,

  }),
);

app.use("/api/users", Usersrouter);
app.use("/api/users", LoginRouter);
app.use("/api/users", EventsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
