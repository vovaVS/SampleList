import express from "express";
import cors from "cors";
import router from "./routers/taskRouts.js";
import { configDotenv } from "dotenv";
import routsUSER from "./routers/userRouts.js";

const app = express();

app.use(express.json())
app.use(cors());

app.use("/", router);
app.use("/user", routsUSER);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
  console.log(process.env.DATABASE)
});

