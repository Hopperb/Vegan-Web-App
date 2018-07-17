const mongoose  = require('mongoose');

mongoose.Promise =  global.Promise;
mongoose.connect('mongodb://localhost/vegandb', {}, (err) => {
    if(err) console.log(err);
    console.log('Mongoose connected to Database server')
});
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vegandb');

module.exports =  {mongoose};

