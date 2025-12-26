const express = require("express");
const router = express.Router();
const controller = require("./task.controller");

router.get("/priority/:level", controller.getTasksByPriority);
router.get("", controller.getAllTask);
router.get("/:id", controller.getTaskById);
router.post("", controller.createTask);
router.put("/:id", controller.updateTask);
router.delete("/:id", controller.deleteTask);
module.exports = router;
