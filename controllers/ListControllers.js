const { Todo } = require("../db/models");

exports.TaskCreate = async (req, res) => {
  try {
    const newEvent = await Todo.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.TaskFind = async (req, res) => {
  try {
    const task = await Todo.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({ messege: error.messege });
  }
};

exports.TaskDetail = async (req, res) => {
  try {
    const foundTask = await Todo.findByPk(+req.params.taskID);
    if (foundTask) {
      res.status(200).json(foundTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.TaskDelete = async (req, res) => {
  try {
    const foundTask = await Todo.findByPk(+req.params.taskID);
    if (foundTask) {
      await foundTask.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ messege: error.messege });
  }
};

exports.TaskUpdate = async (req, res) => {
  try {
    const foundTask = await Todo.findByPk(+req.params.taskID);
    if (foundTask) {
      await foundTask.update(req.body);
      res.status(204).json(foundTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ messege: error.messege });
  }
};
