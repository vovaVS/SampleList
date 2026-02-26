import express from "express";

import {RenderTask,DeleteTask,CreateTask} from "../controllers/task.controllers.js";
const urlencodedParser = express.urlencoded({ extended: false });

const router = express.Router();

router.use(express.json());

router.get("/", urlencodedParser, RenderTask);
router.delete("/:id", urlencodedParser, DeleteTask);
router.post("/createTask", urlencodedParser, CreateTask);

export default router;
