exports.seed = function(knex,Promise){
    return knex('recipes').insert([
      
        { users_id: 1, recipe_name: 'Spaghetti', description: "Don't toucha my Spaghet", prep_time: '15 minutes', cook_time: '15 minutes' },
        { users_id: 2, recipe_name: 'Hamburgers', description: 'Learn how to make delicious, juicy hamburgers', prep_time: '10 minutes', cook_time: '10 minutes' },
        { users_id: 3, recipe_name: 'Sushi', description: 'Learn how to make tasty soosh', prep_time: '20 minutes', cook_time: '20 minutes' }
    ]);
};