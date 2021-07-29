const db = require('../../data/db-config.js')

function find() {
    return db('recipes');
}

function findById(id) {
    return db('recipes').where("recipes_id",id).first();
}

function findIngredients(recipeId) {
    return db('ingredients as i')
        .join('recipes as r', 'r.recipes_id', 'i.recipes_id')
        .select('i.recipes_id as recipe', 'r.recipe_name as name', 'i.ingredients_id', 'i.ingredients_name as ingredient', 'i.ingredients_unit')
        .where('i.recipes_id', recipeId);
}

function findIngredientsById(id) {
    return db('ingredients')
        .where("ingredients_id", id)
        .first();
}

function findSteps(recipeId) {
    return db('steps as s')
        .join('recipes as r', 'r.recipes_id', 's.recipes_id')
        .select('s.recipes_id ', 'r.recipe_name', 's.steps_id', 's.steps_order', 's.steps_name')
        .where('s.recipes_id', recipeId);
}
function findStepsById(id) {
    return db('steps')
        .where('steps_id',id)
        .first();
}
function insert(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(ids => {
            return findById(ids[0]);
        });
}
function insertStep(steps, recipes_id) {
    return db('steps').insert({ ...steps, recipes_id });
}

function insertIngredient(ingredients, recipes_id) {
    return db('ingredients').insert({ ...ingredients, recipes_id });
}

function update(id, changes) {
    return db('recipes')
        .where('recipes_id',id)
        .update(changes);
}

function updateIngredient(id, changes) {
    return db('ingredients')
        .where('ingredients_id', id)
        .update(changes);
}

function updateStep(id, changes) {
    return db('steps')
        .where('steps_id', id)
        .update(changes);
}
function remove(id) {
    return db('recipes')
        .where('recipes_id', id)
        .del();
}

function removeIngredient(id) {
    return db('ingredients')
        .where('ingredients_id', id)
        .del();
}

function removeStep(id) {
    return db('steps')
        .where('steps_id', id)
        .del();
}
module.exports = {
    find,
    findById,
    findIngredients,
    findIngredientsById,
    findSteps,
    findStepsById,
    insert,
    insertStep,
    insertIngredient,
    update,
    updateIngredient,
    updateStep,
    remove,
    removeIngredient,
    removeStep
};