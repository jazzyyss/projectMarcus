const mongoose = require('mongoose');
const config = require('config');

//setting up mongoose parameters 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = _ => {
    mongoose.connect(config.get('DB_URL'))
        .then(_ => console.log(`connected to ${config.get('DB_URL')}`))
        .catch(err => console.log(err));
}