exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "Project1",
      description: "Description for Project 1",
      completed: 0
    },
    {
      name: "Project2",
      description: "Description for Project 2",
      completed: 0
    }
  ]);
};
