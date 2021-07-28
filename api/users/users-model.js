const db = require('../../data/db-config.js')

function find(){
    return db('users')
}

function findById(id){
    return db('users')
    .where({id})
    .first()
}

function findusersRecipes(usersId) {
    return db('recipes as r')
        .join('users as u', 'u.recipes_id', 'r.users_id')
        .select('r.users_id as users', 'r.id', 'r.recipe_name as name', 'r.description', 'r.prep_time', 'r.cook_time')
        .where('r.users_id', usersId)
}

function findusersRecipesById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function insert(users) {
    return db('users')
        .insert(users)
        .then(ids => {
            return findById(ids[0]);
        });
}

function insertRecipe(recipes, users_id) {
    return db('recipes').insert({ ...recipes, users_id });
}

function update(id, changes) {
    return db('users')
        .where('users_id', id)
        .update(changes);
}

function updateusersRecipe(id, changes) {
    return db('recipes')
        .where('recipes_id', id)
        .update(changes);
}

function remove(id) {
    return db('users')
        .where('users_id', id)
        .del();
}

function removeusersRecipe(id) {
    return db('recipes')
        .where('recipes_id', id)
        .del();
}

module.exports = {
    find,
    findById,
    findusersRecipes,
    findusersRecipesById,
    insert,
    insertRecipe,
    update,
    updateusersRecipe,
    remove,
    removeusersRecipe
};