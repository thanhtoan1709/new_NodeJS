const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater');

mongoose.plugin(slug)
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type :String, required: true,},
    description: {type :String},
    image: {type :String,},
    videoID: {type :String, required: true},
    level: {type :String},  
    slug : {type : String,slug : 'name',unique:true},
},{
    timestamps:true
});
module.exports = mongoose.model('Course',Course);