
exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "Lambda Student", description: "a soon to be hired developer" },
    { name: "MacBook Pro", description: "an overly expensive laptop computer" },
    { name: "Meeting Room", description: "generic meeting room description" },
    {
      name: "Software License",
      description: "generic software license description"
    }
  ]);
};