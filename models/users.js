/**
 * Created by abdulfaiyaz 18/10/2016.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    age: Number,
    dob: String,
    gender: String,
    country: String,
    photoUrl: String,  
    mobileNo: Number,
    ocupation:String,
    url: String
},{ collection : 'users' });

module.exports = mongoose.model('users', userSchema);