
exports.up = function(knex) {
  return knex.schema
  .createTable('roles', tbl =>{
    tbl.increments('role_id')
    tbl.string('role_id',32).notNullable().unique()
  })
  .createTable('users', tbl =>{
     tbl.increments('user_id')
     tbl.string('username',128).notNullable().unique()
     tbl.string('password',128).notNullable()
     tbl.integer('role_id')
      .unsigned()
      .notNullable()
      .refrences('role_id')
      .inTable('roles')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT')
  })
  .createTable('posts', tbl => {
    tbl.increments()
    tbl.text('contents')
    tbl.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
    
};
