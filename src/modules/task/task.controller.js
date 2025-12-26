const taskServices = require("./task.service");

const getAllTask = async (req, res) => {
  try {
    const response = await taskServices.getAllTask(req.query);
    res.status(200).send(response);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const response = await taskServices.getTaskById(req.params.id);
    res.status(200).send(response);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const response = await taskServices.createTask(req.body);
    res.status(201).send(response);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const response = await taskServices.updateTask(req.params.id, req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const response = await taskServices.deleteTask(req.params.id);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

const getTasksByPriority = async (req, res) => {
  try {
    const response = await taskServices.getTasksByPriority(req.params.level);
    res.status(200).send(response);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};
module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTasksByPriority,
};
