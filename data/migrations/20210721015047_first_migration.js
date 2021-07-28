
exports.up = function(knex) {
  return knex.schema
   .createTable('users', tbl => {
      tbl.increments('users_id');
      tbl.string('first_name').notNullable();
      tbl.string('last_name').notNullable();
      tbl.string('email').notNullable();
      tbl.string('usersname', 12).notNullable().unique();//max 12 characters
      tbl.string('password', 12).notNullable();//max 12 characters
  })

  
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
    
};
