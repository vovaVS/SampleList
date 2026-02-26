import Task from "../services/task.service.js";

const task = new Task();

export const CreateTask = async (req, res) => {
  const { content } = req.body;
  const result = await task.createTask(content);
  return res.status(200).json(result);
};

export const RenderTask = async (req, res) => {
  const result = await task.renderTask();
  console.log(result)
  return res.status(200).json(result);
};

export const DeleteTask = async (req, res) => {
  const content = req.params["id"];
  const result = await task.deleteTask(content);
  return res.status(200).json(result);
};

