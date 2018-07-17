const router = require('express').Router();

const Recipe = require('./RecipeModel');

router
    .route('/')
    .post((req, res) => {
        Recipe
        .create(req.body)
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json({err: 'there was an error saving the new recipe'})
        })
    })
router
    .route('/')
    .get((req, res) => {
        Recipe
        .find()
        .populate()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json({err: 'there was an issue fetching recipes. Please try again.'})
        })
    })

module.exports = router