const db = require("../../data/dbconfig");

module.exports = {
  getResources,
  // getResourceById,
  addResource
};

function getResources() {
  return db("resources");
}

// function getResourceById() {}

function addResource(resource) {
  return db("resources").insert(resource);
  // .then(ids => getResourceById(ids[0]))
}
