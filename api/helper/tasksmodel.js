const db = require("../../data/dbconfig");

module.exports = {
  getTasks,
  getTaskById,
  getTaskContexts
};

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "project_id")
    .select(
      "t.description as task description",
      "notes",
      "t.completed",
      "p.name as project name",
      "p.description as project description"
    );
}

function getTaskById(id) {
  const promises = [
    db("tasks")
      .where({ id })
      .first(),
    getTaskContexts(id)
  ];

  return Promise.all(promises).then(results => {
    const [task, contexts] = results;

    return { ...task, contexts };
  });
}

function getTaskContexts(task_id) {
  return db("contexts as c")
    .join("task-contexts as tc", "tc.context_id", "c.id")
    .select("c.context")
    .where({ task_id });
}
