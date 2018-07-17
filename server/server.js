const express  = require('express');
const helmet   = require('helmet');
const mongoose = require('./db/mongoose');
const cors     = require('cors');
const request  = require('request');
const yargs    = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'recipe',
            describe: 'Input ingredient or cusine to fetch recipe',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    var encodedAddress = encodeURIComponent('argv.recipe');

    request({
        url: `https://api.edamam.com/search?q=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        console.log(body.hits[0].recipe.label);
        console.log(body.hits[0].recipe.ingredientLines);
        console.log(body.hits[0].recipe.healthLabels);
        console.log(body.hits[0].recipe.calories);
        console.log(body.hits[0].recipe.totalTime);
    });
    

const RecipeController = require('../server/recipes/RecipeController');
const UserController = require('../server/users/UserContoller');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST']
}));

server.get('/', (req, res) => {
    res.status(200).json({api: 'up and running'})
});

server.use('/api/recipes', RecipeController)
server.use('/api/signup', UserController);

const port = process.env.PORT || 5001;
server.listen(port, () => {
    console.log(`Server up and running on ${port}`)
})