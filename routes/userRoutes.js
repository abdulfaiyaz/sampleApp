/**
 * Created by Abdulfaiyaz 18/10/2016.
 */

var express = require('express');
var router = express.Router();
var Users = require('../models/users');

router.get('/',function (req, res) {
    Users.find(function (err, users) {
        if (err) {
            res.send(err);
        } else {
            res.json(users);
        }
    })
});


module.exports = router;