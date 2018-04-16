var mongoose = require("mongoose"),
    passLocalMongoose = require("passport-local-mongoose");

//data Schema & modelling
var bussUserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    rePassword: String,
    terms: String
});

bussUserSchema.plugin(passLocalMongoose); 

module.exports = mongoose.model("bussuser", bussUserSchema);