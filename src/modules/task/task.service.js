const ApiError = require("../../errors/error.helper");
const store = require("./task.store");

const isNonEmptyString = (val) =>
  typeof val === "string" && val.trim().length > 0;

const getAllTask = async (query) => {
  let result = [...store.tasks];

  if ("completed" in query) {
    if (query.completed !== "true" && query.completed !== "false") {
      throw new ApiError(400, "Completed must be true or false");
    }
    const completed = query.completed === "true";
    result = result.filter((t) => t.completed === completed);
  }

  if (query.sort === "asc") {
    result.sort((a, b) => a.createdAt - b.createdAt);
  } else {
    result.sort((a, b) => b.createdAt - a.createdAt);
  }

  return result;
};

const getTaskById = async (id) => {
  const taskId = Number(id);
  if (isNaN(taskId)) throw new ApiError(400, "Invalid id");

  const task = store.tasks.find((t) => t.id === taskId);
  if (!task) throw new ApiError(404, "Task data not found");

  return task;
};

const createTask = async (data) => {
  const { title, description, completed, priority } = data;

  if (!isNonEmptyString(title) || !isNonEmptyString(description)) {
    throw new ApiError(400, "Title and Description are required");
  }

  if ("completed" in data && typeof completed !== "boolean") {
    throw new ApiError(400, "Completed must be boolean");
  }

  if ("priority" in data && !["low", "medium", "high"].includes(priority)) {
    throw new ApiError(400, "Priority must be low, medium, or high");
  }

  const task = {
    id: store.getNextId(),
    title: title.trim(),
    description: description.trim(),
    completed: completed ?? false,
    priority: priority ?? "medium",
    createdAt: Date.now(),
  };

  store.tasks.push(task);
  return task;
};

const updateTask = async (id, data) => {
  const taskId = Number(id);
  if (isNaN(taskId)) throw new ApiError(400, "Invalid id");

  const task = store.tasks.find((t) => t.id === taskId);
  if (!task) throw new ApiError(404, "Task data not found");

  if (
    ("title" in data && !isNonEmptyString(data.title)) ||
    ("description" in data && !isNonEmptyString(data.description)) ||
    ("completed" in data && typeof data.completed !== "boolean") ||
    ("priority" in data && !["low", "medium", "high"].includes(data.priority))
  ) {
    throw new ApiError(400, "Invalid update payload");
  }

  Object.assign(task, data);
  return task;
};

const deleteTask = async (id) => {
  const taskId = Number(id);
  if (isNaN(taskId)) throw new ApiError(400, "Invalid id");

  const index = store.tasks.findIndex((t) => t.id === taskId);
  if (index === -1) throw new ApiError(404, "Task data not found");

  store.tasks.splice(index, 1);
  return true;
};

const getTasksByPriority = async (level) => {
  if (!["low", "medium", "high"].includes(level)) {
    throw new ApiError(400, "Priority must be low, medium, or high");
  }

  return store.tasks.filter((t) => t.priority === level);
};

module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTasksByPriority,
};
