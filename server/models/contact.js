let mongoose = require('mongoose');
//const { stringify } = require('querystring');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
   
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contact', contactModel);