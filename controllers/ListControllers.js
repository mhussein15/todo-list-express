const { Todo } = require("../db/models");

exports.TaskCreate = async (req, res) => {
  try {
    console.log(req.body);
    const newTask = await Todo.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ messege: error.messege });
    console.log(error);
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
