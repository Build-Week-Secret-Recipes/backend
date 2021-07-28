
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', tbl =>{
      tbl.increments('recipes_id')
      tbl.integer('users_id').references('id').inTable('users').unsigned().notNullable().onUpdate('CASCADE').onDelete('CASCADE');
      tbl.string('image');
      tbl.string('recipe_name',128).notNullable().unique()
      tbl.text('description', 255).notNullable();
      tbl.string('prep_time').notNullable();
      tbl.string('cook_time').notNullable();

  })
  .createTable('ingredients',tbl =>{
      tbl.increments('ingredients_id')
      tbl.integer('recipes_id').references('id').inTable('recipes').unsigned().notNullable().onUpdate('CASCADE').onDelete('CASCADE');
      tbl.string('ingredients_name',128).notNullable()
      tbl.string('ingredients_unit',128)
  })
  .createTable('steps',tbl =>{
      tbl.increments('steps_id')
      tbl.string('steps_name')
      tbl.string('steps_order')
      tbl.integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('recipes_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
  })
  
};

exports.down = async function(knex) {
      await knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
