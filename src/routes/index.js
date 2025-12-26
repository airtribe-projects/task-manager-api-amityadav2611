const router = require("express").Router();
const taskRoute = require("../modules/task/task.route"); 



router.use("/tasks", taskRoute);

module.exports = router;
