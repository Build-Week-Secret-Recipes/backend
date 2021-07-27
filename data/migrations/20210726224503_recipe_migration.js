
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', tbl =>{
      tbl.increments('recipe_id')
      tbl.string('recipe_name',128).notNullable().unique()
  })
  .createTable('ingredients',tbl =>{
      tbl.increments('ingredients_id')
      tbl.string('ingredients_name',128).notNullable()
      tbl.string('ingredients_unit',128)
  })
  .createTable('steps',tbl =>{
      tbl.increments('steps_id')
      tbl.string('steps_name')
      tbl.string('steps_order')
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
  })
  .createTable('steps_ingredients', tbl =>{
    tbl.increments('steps_ingredients_id')
    tbl.float('quantity').notNullable()
    tbl.integer('steps_id')
        .unsigned()
        .notNullable()
        .references('steps_id')
        .inTable('steps')
        .onDelete('RESTRICT')
    tbl.integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('ingredients_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
  })
};

exports.down = async function(knex) {
      await knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
