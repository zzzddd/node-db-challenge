// const plists = [
//   {
//   name: 'project1',
//   description: 'node',
//   completed: false
//   },
//   {
//    name: 'project2',
//   description: 'java',
//   completed: true,
//   },
//   {
//    name: 'project3',
//   description: 'phyton',
//   completed: false,
//   }
// ];




// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex("projects").then(function() {
//     // Inserts seed entries
//     return knex("projects").insert(plists);
//   });
// };



exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "Project 1",
      description: "Description for Project 1",
      completed: 0
    },
    {
      name: "Project 2",
      description: "Description for Project 2",
      completed: 0
    }
  ]);
};