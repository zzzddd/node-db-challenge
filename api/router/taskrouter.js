const express = require("express");

const Tasks = require("../helper/tasksmodel");

const router = express.Router();

/* ******************************************************************* */

// MVP Endpoints

// GET /api/tasks endpoint for Retrieving a list of tasks - TESTED
router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      const updatedTasks = tasks.map(task => {
        if (task.completed === 0) {
          task.completed = false;
        } else if (task.completed === 1) {
          task.completed = true;
        }
        return task;
      });
      res.status(200).json(updatedTasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get tasks" });
    });
});



/* ******************************************************************* */

module.exports = router;
