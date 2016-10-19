/**
 * Created by Abdulfaiyaz on 18/10/2016.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sampleApp'); // connect to our database
mongoose.connection.on('error', function (err) {
    console.log("Connection error");
});

module.exports = mongoose;