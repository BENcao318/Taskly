const express = require("express");
const router = express.Router();
const tasks = require("../controller/task.controller");

router.get("/", tasks.findAll);

router.get("/find", tasks.findTask);

router.get("/assigned", tasks.findAllAssignedTasks);

router.get("/completed", tasks.findAllCompletedTasks);

router.post("/new", tasks.createTask);

router.post("/assigned/new", tasks.createAssignedTask);

router.post("/completed/new", tasks.createCompletedTask);

router.post("/completed/update", tasks.markTaskComplete);

module.exports = router;
