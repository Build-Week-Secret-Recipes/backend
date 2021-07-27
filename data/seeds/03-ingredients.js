exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      { ingredients_name: 'water',ingredients_unit:'cups'},
      { ingredients_name: 'pasta',ingredients_unit:'oz'},
      { ingredients_name: 'tomato sauce',ingredients_unit: 'oz'},  
      { ingredients_name: 'veggie broth',ingredients_unit:'cups'},
      { ingredients_name: 'vegetables',ingredients_unit:'oz'},
      { ingredients_name: 'Seasoned Hamburger meat',ingredients_unit:'oz'},
      { ingredients_name: 'Hamburger buns',ingredients_unit:'oz'},
      { ingredients_name: 'onions',ingredients_unit:'oz'},
      { ingredients_name: 'tomatoes',ingredients_unit:'oz'},
      { ingredients_name: 'cheese',ingredients_unit:'oz'},
      { ingredients_name: 'ketchup',ingredients_unit:'oz'},
      { ingredients_name: 'rice',ingredients_unit:'cups'},
      { ingredients_name: 'fish',ingredients_unit:'oz'},
      { ingredients_name: 'seaweed',ingredients_unit:'oz'}
    ]);
  };