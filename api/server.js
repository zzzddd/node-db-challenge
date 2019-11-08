const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

// const tasksRouter = require("./router/tasksrouter");

const server = express();

server
  .use(helmet())
  .use(express.json())
  .use(cors())
  .use(morgan("combined"));
  const ProjectRouter = require("./router/projecrouter");
  const ResourceRouter = require("./router/resourcerouter");
  const TaskRouter = require("./router/taskrouter");

// server.use("/api/tasks", tasksRouter);

server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TaskRouter);


server.get("/", (req, res) => {
  res.send("SERVER IS RUNNINGGGGGGGGG");
});

module.exports = server;
