const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
     author: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true,
    },
    recipe: {
        type: String,
        required: true
    },
    directions: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const recipeModel = mongoose.model('Recipe', RecipeSchema);
module.exports = recipeModel;