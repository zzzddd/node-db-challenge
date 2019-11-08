
exports.up = function(knex) {
    return knex.schema.createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
      tbl.string("description", 128);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};
