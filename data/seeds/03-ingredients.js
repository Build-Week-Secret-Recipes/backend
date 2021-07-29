exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      {ingredients_name: 'water',
      ingredients_unit:'cups', recipes_id:1},
      {ingredients_name: 'pasta',ingredients_unit:'oz', recipes_id:1},
      {ingredients_name: 'tomato sauce',ingredients_unit: 'oz', recipes_id:1},  
      {ingredients_name: 'Seasoned Hamburger beyond meat',ingredients_unit:'oz',recipes_id:2},
      {ingredients_name: 'Hamburger buns',ingredients_unit:'oz',recipes_id:2},
      {ingredients_name: 'onions',ingredients_unit:'oz',recipes_id:2},
      {ingredients_name: 'tomatoes',ingredients_unit:'oz',recipes_id:2},
      {ingredients_name: 'cheese',ingredients_unit:'oz',recipes_id:2},
      {ingredients_name: 'ketchup',ingredients_unit:'oz',recipes_id:2},
      {ingredients_name: 'rice',ingredients_unit:'cups',recipes_id:3},
      {ingredients_name: 'fish',ingredients_unit:'oz',recipes_id:3},
      {ingredients_name: 'seaweed',ingredients_unit:'oz',recipes_id:3},
      {ingredients_name: 'vegetables',ingredients_unit:'oz',recipes_id:3},
    ]);
  };