const express = require("express");

const Tasks = require("./projecrouter");

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

// STRETCH - GET /api/tasks/:id endpoint for Retrieving a task by ID - TESTED
router.get("/:id", (req, res) => {
  Tasks.getTaskById(req.params.id)
    .then(task => {
      if (task) {
        const updatedTask = {
          ...task,
          completed: task.completed === 1 ? true : false
        };
        res.status(200).json(updatedTask);
      } else {
        res.status(404).json({ message: "Could not find task with given ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get task" });
    });
});

/* ******************************************************************* */

module.exports = router;
