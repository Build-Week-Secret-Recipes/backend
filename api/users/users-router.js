const router = require("express").Router();
const users = require('./users-model.js')
const {restricted,only} = require('../auth/auth-middleware.js')

//GET /api/users
router.get('/', (req, res) => {
    users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({ message: 'Problem getting users' });
        });
});

//GET /api/users/:id
router.get('/:id', (req, res) => {
    users.findById(req.params.id)
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving users' });
        });
});

//GET /api/users/:id/recipes
router.get('/:id/recipes', (req, res) => {
    users.findusersRecipes(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving recipes' });
        });
});

//GET /api/users/:id/recipes/:id
router.get('/:id/recipes/:id', (req, res) => {
    users.findusersRecipes(req.params.id)
        .then(recipe => {
            if (recipe) {
                users.findusersRecipesById(req.params.id)
                    .then(recipeId => {
                        res.status(200).json(recipeId);
                    })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem retrieving users recipes' });
        });
});

//POST /api/users
router.post('/', (req, res) => {
    users.insert(req.body)
        .then(users => {
            res.status(201).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem creating users' });
        });
});

//POST /api/users/:id/recipes
router.post('/:id/recipes', (req, res) => {
    users.findusersRecipes(req.params.id)
        .then(recipe => {
            if (recipe) {
                users.insertRecipe(req.body, req.params.id)
                    .then(newRecipe => {
                        res.status(201).json(newRecipe);
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ message: `Problem creating users recipes ` });
        });
});

//PUT /api/users/:id
router.put('/:id', (req, res) => {
    users.update(req.params.id, req.body)
        .then(users => {
            res.status(201).json(users);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Problem updating users' });
        });
});

//PUT /api/users/:id/recipes/:id
router.put('/:id/recipes/:id', (req, res) => {
    users.findusersRecipes(req.params.id)
        .then(recipe => {
            if (recipe) {
                users.updateusersRecipe(req.params.id, req.body)
                    .then(newRecipe => {
                        res.status(201).json(newRecipe);
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem updating users recipes' });
        });
});

//DELETE /api/users/:id
router.delete('/:id', (req, res) => {
    users.remove(req.params.id)
        .then(users => {
            res.status(201).json(users);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Problem deleting users' });
        });
});

//DELETE /api/users/:id/recipes/:id
router.delete('/:id/recipes/:id', (req, res) => {
    users.findusersRecipes(req.params.id)
        .then(recipe => {
            if (recipe) {
                users.removeusersRecipe(req.params.id)
                    .then(newRecipe => {
                        res.status(201).json(newRecipe);
                    });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem deleting users recipes' });
        });
});

module.exports = router;