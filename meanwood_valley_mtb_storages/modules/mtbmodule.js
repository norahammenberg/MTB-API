//use mongoose 
var mongoose = require('mongoose');

//creating a schema, definding the structor of the document : 

var MtbSchema = new mongoose.Schema({
    name: String,
    brand: String,
    model: String,
    colour: String,
    fork: String,
    shock: String,
    img: String
},
//the db collections name:
{
    collection: 'MTBs'
});

module.exports = mongoose.model('mtbmodule', MtbSchema);