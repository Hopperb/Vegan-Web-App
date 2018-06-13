const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

const RecipeController = require('./recipes/RecipeController');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).json({api: 'up and running'})
});

server.use('/api/recipe', RecipeController)

mongoose.Promise =  global.Promise;
mongoose.connect('mongodb://localhost/vegandb', {}, (err) => {
    if(err) console.log(err);
    console.log('Mongoose connected to Database server')
});

const port = process.env.PORT || 5001;
server.listen(port, () => {
    console.log(`Server up and running on ${port}`)
})