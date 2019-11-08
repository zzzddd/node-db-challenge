
exports.up = function(knex) {
   return knex.schema.createTable("tasks", tbl => {
     tbl.increments();
     tbl.string("description", 128).notNullable();
     tbl.string("notes", 128);
     tbl
       .boolean("completed")
       .notNullable()
       .defaultTo(0);
     tbl
       .integer("project_id")
       .unsigned()
       .notNullable()
       .references("id")
       .inTable("projects")
       .onDelete("CASCADE")
       .onUpdate("CASCADE");
   });

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks");
  
};
