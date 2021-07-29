# backend

#CRUD for `auth user registration`
-   `[GET]  /api/users` returns an array of registered users (or an empty array if there aren't any).
  - `[GET] /api/users/:id` returns a user by the given id.
  - `[POST] /api/auth/register` returns the created account. 
  - `[POST] /api/auth/login` returns the created account.
  - `[PUT] /api/users/:id` returns the updated account. 
  - `[DELETE] /api/users/:id` returns the deleted account.

#CRUD for `recipes`
-   `[GET]  /api/recipes` returns an array of recipes (or an empty array if there aren't any).
  - `[GET] /api/recipes/:id` returns a user by the given id.
  - `[POST] /api/recipes` returns the created recipes.
  - `[PUT] /api/recipes/:id` returns the updated recipes.
  - `[DELETE] /api/recipes/:id` returns the deleted recipes.

#CRUD for `ingredients`
-   
  - `[GET] /api/recipes/:id/ingredients` returns the ingredients for given recipe id .
  - `[GET] /api/recipes/:id/ingredients/:id` returns the ingredient for the given ingredient_id.
  - `[POST] /api/recipes/:id/ingredients` returns the created account. 
  - `[PUT] /api/recipes/:id/ingredients/:id` returns the updated ingredient for the given recipe.
  - `[DELETE] /api/recipes/:id/ingredients/:id` returns the deleted ingredient.

#CRUD for `steps`
-   
  - `[GET] /api/recipes/:id/steps` returns the steps for given recipe id .
  - `[GET] /api/recipes/:id/steps/:id` returns the step for the given steps_id.
  - `[POST] /api/recipes/:id/steps` returns the created steps.
  - `[PUT] /api/recipes/:id/steps/:id` returns the updated step for the given recipe.
  - `[DELETE] /api/recipes/:id/steps/:id` returns the deleted step.