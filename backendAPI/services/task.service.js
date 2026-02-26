import connection from "../database/mysql.js";
import { TaskStruct } from "../StructData.js";

class Task {
  async createTask(text) {
    const dateCreate = new Date().toLocaleDateString();
    const user = [text, 1, dateCreate];

    const sql = "INSERT INTO `name` (content, status, date) VALUES (?, ?, ?);";

    const results = await new Promise((resolve, reject) => {
      connection.query(sql, user, (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });

    const newTask = new TaskStruct(results.insertId, text, 1, dateCreate);
    return newTask;
  }

  async deleteTask(id) {
    const sql = "DELETE FROM name WHERE `name`.`id` = ?";
    const user = [id];
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, user, (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });
    return result;
  }

  async renderTask() {
    const result = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM `name` ORDER BY `date`",
        (err, results) => {
          err ? reject(err) : resolve(results);
        },
      );
    });
    return result;
  }
}

export default Task;
