
exports.up = function(knex) {
   return knex.schema.createTable("project-resources", tbl => {
     tbl.increments();
     tbl
       .integer("project_id")
       .unsigned()
       .notNullable()
       .references("id")
       .inTable("projects")
       .onDelete("CASCADE")
       .onUpdate("CASCADE");
     tbl
       .integer("resource_id")
       .unsigned()
       .notNullable()
       .references("id")
       .inTable("resources")
       .onDelete("CASCADE")
       .onUpdate("CASCADE");
     tbl.unique(["project_id", "resource_id"]);
   });

};

exports.down = function(knex) {
     return knex.schema
     .dropTableIfExists('project-resources')

  
};
