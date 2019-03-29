
exports.up = function(knex, Promise) {
  return knex.schema
  
    .createTable('projects', tbl => {
        //primary key, auto increments
        tbl.increments();

        //project name - required - unique
        tbl
         .string('name', 128)
         .notNullable()
         .unique();
        
         //description - required 
        tbl
         .string('description', 128)
         .notNullable();

        //completed: boolean
        tbl
         .boolean('completed');
  })
  .createTable('actions', tbl => {
      //primary key , auto increments
      tbl.increments();

      //action-description
      tbl
       .string('description', 128)
       .notNullable();
    
     //action-notes
      tbl
       .string('notes', 255)
       .notNullable();

     //action-completed:boolean
      tbl
       .boolean('completed')  

    //connect to projects table
      tbl
       .integer('project_id')
       .unsigned()
       .notNullable()
       .references('id')
       .inTable('projects')
       .onDelete('CASCADE')
       .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('actions');
  
};
