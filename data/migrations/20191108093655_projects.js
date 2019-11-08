
exports.up = function(knex) {
      return knex.schema.createTable("projects", tbl => {
        tbl.increments();
        tbl
          .string("name", 128)
          .notNullable()
          .unique();
        tbl.string("description", 128);
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(0);
      });
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects');
};
