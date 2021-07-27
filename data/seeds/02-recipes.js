exports.seed = function(knex,Promise){
    return knex('recipes').insert([
        {recipe_name:'Spaghetti'},
        {recipe_name:'Hamburgers'},
        {recipe_name:'Sushi'}
    ]);
};