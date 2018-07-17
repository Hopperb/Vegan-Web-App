const router = require('express').Router();
const _ = require('lodash');
const {authenticate} = require('../middleware/authenticate')

const {User} = require('./UserModel');

router
    .route('/')
    .post((req, res) => {
        const body  = _.pick(req.body, ['email', 'password']);
        const user = new User({body})

        user.save().then(() => {
            return user.generateAuthToken();
        }).then((token) => {
            res.header('x-auth', token).send(user)
        }).catch((e) => {
            res.status(400).send(e)
        })
    })

    
    module.exports = router;